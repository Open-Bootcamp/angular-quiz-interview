import { Component, OnInit, Output } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import * as globals from '../../globals';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css'],
})
export class StatementsComponent implements OnInit {
  // sidebar

  show = false;
  toggle(): void {
    this.show = !this.show;
  }

  // ./ sidebar

  private highlighted: boolean = false;
  showMessageAnswer = false;
  haveCode = false;
  showFinishQuestions = false;
  disabledButtons = false;
  messageAnswer!: string;
  finishMessage!: string;
  results: any;
  statements!: string;
  code!: string;
  options: any;
  idTechnology: any;

  constructor(
    private highlightService: HighlightService,
    private apiService: ApiService,
    private router: Router
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.idTechnology =
      state || JSON.parse(localStorage.getItem('idTechnology') || '{}');
  }

  ngAfterViewChecked() {
    if (this.haveCode && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.getStatements();
  }

  getStatements() {
    this.apiService
      .getStatements(this.idTechnology)
      .subscribe((response: any) => {
        this.valuesStatements(response.data);
      });
  }

  checkAnswer(answer: any) {
    this.disabledButtons = true;
    let correct = answer.correct;
    correct ? (this.showMessageAnswer = true) : (this.showMessageAnswer = true);
    correct
      ? (this.messageAnswer = globals.MESSAGES.correct)
      : (this.messageAnswer = globals.MESSAGES.incorrect);
    setTimeout(() => {
      this.nextQuestion();
    }, 800);
  }

  nextQuestion() {
    this.resetViewValues();
    if (this.results.length > 1) {
      const remainingList = this.results.filter(
        (item: any) => item._id !== this.results[0]._id
      );
      this.valuesStatements(remainingList);
    } else {
      this.showFinishQuestions = true;
      this.finishMessage = globals.MESSAGES.finish;
    }
  }

  resetViewValues() {
    this.highlighted = false;
    this.disabledButtons = false;
    this.haveCode = false;
    this.showMessageAnswer = false;
    this.messageAnswer = '';
    this.statements = '';
    this.options = [];
    this.code = '';
  }

  valuesStatements(obj: any) {
    this.results = obj.sort(() => Math.random() - 0.5);
    this.statements = this.results[0].question;
    this.options = this.results[0].answer;
    if (this.results[0].code) {
      this.haveCode = true;
      this.code = this.results[0].code;
    } else {
      this.haveCode = false;
    }
  }
}
