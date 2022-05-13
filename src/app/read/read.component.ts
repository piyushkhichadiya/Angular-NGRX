import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.modal';
import { AppState } from '../app.state';
import { increment, decrement, reset } from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  name: string = '';
  url: string = '';
  tutorials: Observable<Tutorial[]>;
  count$: Observable<number>;

  constructor(private store: Store<{count: number, tutorial: Tutorial[]}>) { 
    this.tutorials = store.select('tutorial'); 
    this.count$ = store.select('count');
  }

  addLink = () => {
    console.log(this.name);
    console.log(this.url);
    const payload = {
      name: this.name,
      url: this.url
    }
    if (this.name && this.url) {
      this.store.dispatch({
        type: '[TUTORIAL] Add',
        payload: <Tutorial> payload
      });
      this.name = '';
      this.url = '';
    }
  }

  removeLink = (index: number) => {
    this.store.dispatch({
      type: '[TUTORIAL] Remove',
      payload: index
    });
  }

  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
  }

}
