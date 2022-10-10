import { Component, OnInit } from '@angular/core';
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
    private router: Router,
  ) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    this.idTechnology = state || JSON.parse(localStorage.getItem('idTechnology') || '{}')
  }

  ngAfterViewChecked() {
    if (this.haveCode) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

  ngOnInit(): void {
    this.getStatements();
  }

  getStatements() {
    this.apiService.getStatements(this.idTechnology).subscribe((response: any) => {
      this.results = response.data.sort(() => Math.random() - 0.5);
      this.statements = this.results[0].question;
      this.options = this.results[0].answer;
      if (this.results[0].code) {
        this.haveCode = true;
        this.code = this.results[0].code;
      } else {
        this.haveCode = false;
      }
    })
  }

  checkAnswer(answer: any) {
    this.disabledButtons = true;
    let correct = answer.correct
    correct ? this.showMessageAnswer = true : this.showMessageAnswer = true
    correct ? this.messageAnswer = globals.MESSAGES.correct : this.messageAnswer = globals.MESSAGES.incorrect
    setTimeout(() => {
      this.nextQuestion();
    }, 12000);
  }

  nextQuestion() {
    this.disabledButtons = false;
    this.messageAnswer = '';
    this.showMessageAnswer = false;
    if (this.results.length > 1) {
      const remainingList = this.results.filter((item: any) => item._id !== this.results[0]._id);
      this.results = remainingList;
      this.statements = this.results[0].question;
      this.options = this.results[0].answer;
      if (this.results[0].code) {
        this.haveCode = true;
        this.code = this.results[0].code;
      } else {
        this.haveCode = false;
      }
    } else {
      this.showFinishQuestions = true;
      this.finishMessage = globals.MESSAGES.finish;
      console.log('termino', this.results);
    }
  }

}
