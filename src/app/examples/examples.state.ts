import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '@app/core';

import { jeuReducer } from './authenticated/jeu.reducer';
import { Jeu, JeuState } from './authenticated/jeu.model';
import { logoReducer } from './crud/logos.reducer';
import { LogoState } from './crud/logos.model';
import { voteReducer } from './crud/vote.reducer';
import { VoteState } from './crud/vote.model';
import { UserState } from './users-info/users.model';
import { userReducer } from './users-info/users.reducer';
import { QuestionnaireState } from './questionnaire/questionnaire.model';
import { questionnaireReducer } from './questionnaire/questionnaire.reducer';
import { FbState } from './fb-component/fb.model';
import { FbReducer } from './fb-component/fb.reducer';

export const FEATURE_NAME = 'examples';

export const selectExamples = createFeatureSelector<State, ExamplesState>(
  FEATURE_NAME
);

export const reducers: ActionReducerMap<ExamplesState> = {
  jeux: jeuReducer,
  logos: logoReducer,
  votes: voteReducer,
  users: userReducer,
  questionnaire: questionnaireReducer,
  fb:FbReducer
};

export interface ExamplesState {
  jeux: JeuState;
  logos: LogoState;
  votes: VoteState;
  users: UserState;
  questionnaire: QuestionnaireState;
  fb:FbState;
}

export interface State extends AppState {
  examples: ExamplesState;
}
