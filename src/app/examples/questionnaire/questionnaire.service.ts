import { Injectable } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { PixbayState, Pixbay } from './pixbay.model';
import { tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Questionnaire, QuestionnaireState } from './questionnaire.model';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';


export const questionnaire_key = "rNbaZLzxoj7JgiccITV3"


@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(public store: Store<QuestionnaireState>, private af: AngularFirestore) {
  }

  addQuestionnairesToFirebase(questionnaires) {
    console.log('addVoteToFirebase');
    console.log(questionnaires);

    const collection: AngularFirestoreCollection<Questionnaire> = this.af.collection(
      'questionnaires'
    );
    collection.doc(questionnaire_key).update(questionnaires);

    //collection.add(carte)

    // Notice how the observable is separated from write options

    //const collection$: Observable<Item> = collection.valueChanges()
    //collection$.subscribe(data => console.log(data) )
  }

}
