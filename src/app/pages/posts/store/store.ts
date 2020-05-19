import { BehaviorSubject, Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';

export interface State {
  [key: string]: any;
}

const initialState: State = {};

export class Store {

  get value() {
    return this.store.value;
  }

  private store = new BehaviorSubject<any>(initialState);
  private store$ = this.store.asObservable();

  private static mapToArray<T>(mapObj: Map<string, T>): T[] {
    const arr = [];
    for (const value of mapObj.values()) {
      arr.push(value);
    }
    return arr;
  }


  private static arrayToMap<T>(arr: T[], key: string = 'id'): Map<string, T> {
    const newMap = new Map<string, T>();
    arr.forEach(item => {
      newMap.set(item[key], item);
    });
    return newMap;
  }

  select<T>(name: string): Observable<T[] | Observable<boolean>> {
    return this.store$.pipe(
      pluck(name),
      map((val: Map<string, T>) => val ? Store.mapToArray<T>(val) : null)
    );
  }

  selectItem<T>(name: string, itemId: number): Observable<T> | Observable<boolean> {
    return this.store$.pipe(
      pluck(name),
      map((val: Map<number, T>) => val ? val.get(+itemId) : null)
    );
  }

  set(name: string, state: any, key?: string) {
    if (state.posts instanceof Map) {
      this.store.next({
        ...this.value,
        [name]: state.posts
      });
    } else {
      const newState = Array.isArray(state) ? Store.arrayToMap(state, key) : state;
      this.store.next({
        ...this.value,
        [name]: newState
      });
    }
  }

}
