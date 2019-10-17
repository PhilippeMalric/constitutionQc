import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../examples.state';
import { User } from './users.model';
import { selectAllUsers } from './user.selectors';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from 'angularfire2/database';
import { selectEmail } from '@app/core';

@Component({
  selector: 'anms-users-info',
  templateUrl: './users-info.component.html',
  styleUrls: ['./users-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersInfoComponent implements OnInit {

  cardListOnline$: Observable<User[]>
  cardListOffline$: Observable<User[]>
  authEmail$: Observable<string>;
  constructor( private store: Store<State>,
               private db: AngularFireDatabase) {



    this.cardListOnline$ =  this.store.pipe(select(selectAllUsers),
                            map((users:User[])=>{
                              return users.filter((user:User)=>{
                                return user.texte == "online"
                              })
                            }))
    this.cardListOffline$ =  this.store.pipe(
                              select(selectAllUsers),
                              map((users:User[])=>{
                                return users.filter((user:User)=>{
                                  return user.texte == "offline"
                                })
                              })
                              )






   }

  ngOnInit() {

    this.authEmail$ = this.store.pipe(select(selectEmail));

  }

  delete(id:string){
    let path = "users/" + id
    this.db.object(path).remove().then(data=>{
      console.log("element removed")
      console.log(data)
    });
  }


}
