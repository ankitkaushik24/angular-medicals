import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {NavigationService} from './navigation.service';

const map = {
  'patient/0': {
    type: 'success',
    message: 'Patient has been created successfully'
  }
};

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private navigationService: NavigationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (map[req.url]) {
      return of(map[req.url]).pipe(delay(1000), tap(_ => {
        this.navigationService.responseLoaded$.next({
          ...map[req.url],
          response: req.body
        });
      }));
    } else {
      return next.handle(req);
    }
  }

}
