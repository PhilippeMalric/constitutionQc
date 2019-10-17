import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Vote, VoteState } from './vote.model';
import { Questionnaire, QuestionnaireState } from './questionnaire.model';
import { QuestionnaireActions, QuestionnaireActionTypes } from './questionnaire.actions';

export function sortByEtat(a: Questionnaire, b: Questionnaire): number {
  return a.name.localeCompare(b.name);
}

export const questionnaireAdapter: EntityAdapter<Questionnaire> = createEntityAdapter<Questionnaire>({
  sortComparer: sortByEtat
});

export const initialState: QuestionnaireState = questionnaireAdapter.getInitialState({
  ids: [],
  entities: {}
});

export function questionnaireReducer(
  state: QuestionnaireState = initialState,
  action: QuestionnaireActions
): QuestionnaireState {
  switch (action.type) {
    case QuestionnaireActionTypes.UPSERT_ONE:
      console.log('action.payload.questionnaire');
      console.log(action.payload.questionnaire);
      console.log("state")
      console.log(state)
      return questionnaireAdapter.upsertOne(action.payload.questionnaire, state);


    case QuestionnaireActionTypes.UPSERT_ALL:
        console.log("state")
        console.log(state)
        console.log('action.payload.');
        console.log(action.payload.questionnaires);
        let questionnaires: any = []

        questionnaires = action.payload.questionnaires.ids.map((id)=>action.payload.questionnaires.entities[id])

      return questionnaireAdapter.upsertMany(questionnaires, state);

    case QuestionnaireActionTypes.UPSERT_ALL:
      return questionnaireAdapter.removeAll(state);


    case QuestionnaireActionTypes.UPSERT_ONE:
      return questionnaireAdapter.upsertOne(action.payload.questionnaire, state);

    case QuestionnaireActionTypes.DELETE_ONE:
      return questionnaireAdapter.removeOne(action.payload.id, state);

    case QuestionnaireActionTypes.RESET:
      return initialState;



    default:
      return state;
  }
}
