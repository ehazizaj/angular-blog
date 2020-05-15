import {
  Observable,
  BehaviorSubject
} from 'rxjs';
import {
  pluck,
  distinctUntilChanged
} from 'rxjs/operators';
import { State } from '../models/state';

const state: State = {
  posts: undefined
};

export class Store {

  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable().pipe(distinctUntilChanged());

  get value() {
    return this.subject.value;
  }

  select<T>(name: string): Observable<T> {
    return this.store.pipe(pluck(name));
  }


  set(name: string, value: any) {
    this.subject.next({
      ...this.value, [name]: value
    });
  }

}
