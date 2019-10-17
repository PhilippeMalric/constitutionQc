import { Action } from '@ngrx/store';
import { Questionnaire } from './questionnaire.model';

export enum QuestionnaireActionTypes {
  UPSERT_ONE = '[questionnaire] Upsert_one',
  UPSERT_ALL = '[questionnaire] Upsert_all',
  UPDATE = '[questionnaire] Update',
  RESET = '[questionnaire] Reset',
  DELETE_ONE = '[questionnaire] Delete_one_'
}

export class ActionQuestionnaireLoadOne implements Action {
  readonly type = QuestionnaireActionTypes.UPSERT_ALL;
  constructor(readonly payload: { name: string }) {}
}

export class ActionQuestionnaireUpsertAll implements Action {
  readonly type = QuestionnaireActionTypes.UPSERT_ALL;
  constructor(readonly payload: { questionnaires: any }) {}
}

export class ActionQuestionnaireUpsertOne implements Action {
  readonly type = QuestionnaireActionTypes.UPSERT_ONE;
  constructor(readonly payload: { questionnaire: Questionnaire }) {}
}

export class ActionQuestionnaireDeleteOne implements Action {
  readonly type = QuestionnaireActionTypes.DELETE_ONE;
  constructor(readonly payload: { id: string }) {}
}

export class ActionQuestionnaireUpdate implements Action {
  readonly type = QuestionnaireActionTypes.UPDATE;
  constructor(readonly payload: { questionnaire: Questionnaire }) {}
}

export class ActionQuestionnaireReset implements Action {
  readonly type = QuestionnaireActionTypes.RESET;
}




export type QuestionnaireActions =
  | ActionQuestionnaireUpdate
  | ActionQuestionnaireReset
  | ActionQuestionnaireUpsertOne
  | ActionQuestionnaireDeleteOne
  | ActionQuestionnaireUpsertAll
