import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { QuestionnaireActionTypes } from './questionnaire.actions';
import { Action, Store } from '@ngrx/store';
import { State } from '../examples.state';
import { QuestionnaireService } from './questionnaire.service';
import { withLatestFrom, map } from 'rxjs/operators';


@Injectable()
export class QuestionnaireEffects {
  constructor(
    private actions$: Actions<Action>,
    private store: Store<State>,
    public questionnaireService: QuestionnaireService,
  ) {}

  @Effect({ dispatch: false })
  addVotesAll = this.actions$.pipe(
    ofType(QuestionnaireActionTypes.UPSERT_ONE),
    withLatestFrom(this.store),
    map(
      ([data, store]) => {
        console.log('Questionnaire');
        console.log('data to firebase!!');
        console.log('data');
        console.log(data);

        console.log('store');
        console.log(store);
        console.log('votes');
        console.log(store.examples.votes);

        this.questionnaireService.addQuestionnairesToFirebase(store.examples.questionnaire);

        })
    )

}
