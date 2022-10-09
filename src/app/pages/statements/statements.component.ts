import { Component, OnInit } from '@angular/core';
import { HighlightService } from '../../services/highlight.service';
import * as globals from '../../globals';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent implements OnInit {
  private highlighted: boolean = false;
  showCorrect = false;
  messageAnswer!: string;
  haveCode = false;
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
    this.idTechnology = state;
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

  checkAnswer(answer: any) {
    console.log(answer);
    let correct = answer.correct
    correct ? this.showCorrect = true : this.showCorrect = true
    correct ? this.messageAnswer = globals.ANSWERS.correct : this.messageAnswer = globals.ANSWERS.incorrect
  }

  getStatements() {
    this.apiService.getStatements(this.idTechnology).subscribe((response: any) => {
      this.results = response.data;
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

}
