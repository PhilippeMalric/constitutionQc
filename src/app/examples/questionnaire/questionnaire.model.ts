import { EntityState } from '@ngrx/entity';
import { Vote } from '../crud/vote.model';
import { Logo } from '../crud/logos.model';

export class Questionnaire {
  id:string;
 votes:Vote[];
 logos : Logo[];
  name:string
  constructor(
    id:string,
    votes:Vote[],
    logos : Logo[],
    name : string
  ) {
    this.votes = votes
    this.logos  = logos
    this.name  = name
  }
}

export interface QuestionnaireState extends EntityState<Questionnaire> {}
