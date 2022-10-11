import { Component, OnInit, Output } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import * as globals from '../../globals';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { IName } from 'src/app/interface/router.interface';
@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css'],
})
export class StatementsComponent implements OnInit {
  // Modal
  showModal = false;

  toggleModalCancel(): void {
    this.showModal = !this.showModal;
  }

  goToMenuPage() {
    this.router.navigate(['/']);
  }
  // ./Modal

  // sidebar
  name!: IName;
  bonusLife = 0;
  show = false;
  lifes = [...new Array(globals.ASIDE_DATA.lifes)].map((_, i) => i);
  points = 0;
  toggle(): void {
    this.show = !this.show;
  }

  subtractLife() {
    this.lifes.pop();
    if (this.lifes.length === 0) {
      this.showFinishQuestions = true;
      this.finishMessage = globals.MESSAGES.finish;
    }
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
  templateCodes!: string;
  options: any;
  idTechnology: any;
  incomingData: any;
  constructor(
    private highlightService: HighlightService,
    private apiService: ApiService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.incomingData = state;
    this.idTechnology =
      JSON.parse(localStorage.getItem('idTechnology') as string) ||
      this.incomingData[1];
    this.name =
      JSON.parse(localStorage.getItem('name') as string) ||
      this.incomingData[0];
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
    if (correct) {
      this.messageAnswer = globals.MESSAGES.correct;
      this.points += 10;
      this.bonusLife++;
      if (this.bonusLife === 5) {
        this.lifes.push(1);
        this.bonusLife = 0;
      }
    } else {
      this.messageAnswer = globals.MESSAGES.incorrect;
      this.points === 0 && this.subtractLife();
      this.points !== 0 && (this.points -= 10);
      this.bonusLife = 0;
    }

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
      this.code = this.results[0].code;
      this.templateCodes = `
      <pre>
      <code class="language-javascript">${this.code}</code>
      </pre>`;
      this.haveCode = true;
    } else {
      this.haveCode = false;
    }
  }

  goToMenu() {
    this.router.navigate(['/register']);
  }
}
