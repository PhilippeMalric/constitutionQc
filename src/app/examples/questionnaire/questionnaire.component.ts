import { v4 as uuid } from 'uuid';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input } from '@angular/core';
import { QuestionService } from './questions-service2';
import { QuestionControlService } from './question-service';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { State, ExamplesState } from '../examples.state';
import { ActionQuestionnaireUpsertOne } from './questionnaire.actions';
import { take } from 'rxjs/operators';
import { selectAllLogos } from '../crud/logos.selectors';
import { selectAllVotes } from '../crud/vote.selectors';

@Component({
  selector: 'anms-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionnaireComponent implements OnInit {

  questions: any[];

  form: FormGroup;
  payLoad = '';

  constructor(
    private qservice : QuestionService,
    private qcs: QuestionControlService,
    private ref: ChangeDetectorRef,
    public store: Store<State>,) {
    this.questions = qservice.getQuestions();
   }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

  addQ(){
    this.questions = this.qservice.addQuestion()
    console.log("questions")
    console.log(this.questions)
    this.form = this.qcs.toFormGroup(this.questions);
    this.ref.markForCheck();
  }

  saveQ(){
    this.store.pipe(take(1)).subscribe((store:State)=>{
      let logos = selectAllLogos(store)
      let votes = selectAllVotes(store)

      this.store.dispatch(new ActionQuestionnaireUpsertOne({questionnaire:{id:uuid(),name:"premierQ",logos:logos,votes:votes}}))
    })
  }




}
