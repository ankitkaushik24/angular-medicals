import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

interface Destroyable {
  ngOnDestroy(): void;

  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  dropdownId = 0;

  responseLoaded$ = new BehaviorSubject(null);
  mouseClicked = new Subject();

  constructor() { }
}

export const untilDestroyed = (component: Destroyable | any) => <T>(source: Observable<T>) => {
  if (!component._componentDestroyed$) {
    const oldNgOnDestroy = component.ngOnDestroy;
    const stop$ = new ReplaySubject<boolean>();
    component.ngOnDestroy = () => {
      oldNgOnDestroy && oldNgOnDestroy.apply(component);
      stop$.next(true);
      stop$.complete();
    };
    component._componentDestroyed$ = stop$.asObservable();
  }
  return source.pipe(takeUntil<T>(component._componentDestroyed$));
};
