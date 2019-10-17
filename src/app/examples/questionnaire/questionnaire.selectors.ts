import { createSelector } from '@ngrx/store';
import { questionnaireAdapter } from './questionnaire.reducer';

import { ExamplesState, selectExamples } from '../examples.state';

const { selectEntities, selectAll } = questionnaireAdapter.getSelectors();

export const selectQuestionnaires = createSelector(
  selectExamples,
  (state: ExamplesState) => state.questionnaire
);

export const selectAllQuestionnaire = createSelector(selectQuestionnaires, selectAll);

export const selectQuestionnairesState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.questionnaire
);

export const selectQuestionnaireTour = createSelector(
  selectQuestionnairesState,
  state => state.entities
);

export const selectQuestionnairesEtat = createSelector(
  selectQuestionnairesState,
  state => state.entities
);

export const selectTourEtat = createSelector(
  selectQuestionnaireTour,
  selectQuestionnairesEtat,
  (tour, etat) => {
    return etat;
  }
);
