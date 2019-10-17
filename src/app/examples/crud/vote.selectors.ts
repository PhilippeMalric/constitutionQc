import { createSelector } from '@ngrx/store';

import { ExamplesState, selectExamples } from '../examples.state';
import { voteAdapter } from './vote.reducer';

const { selectEntities, selectAll } = voteAdapter.getSelectors();

export const selectVotes = createSelector(
  selectExamples,
  (state: ExamplesState) => state.votes
);

export const selectAllVotes = createSelector(selectVotes, selectAll);

export const selectVoteState = createSelector(
  selectExamples,
  (state: ExamplesState) => state.votes
);

export const selectVoteTour = createSelector(
  selectVoteState,
  state => state.entities
);

export const selectVotesEtat = createSelector(
  selectVoteState,
  state => state.entities
);


