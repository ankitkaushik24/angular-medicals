import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {NavigationService, untilDestroyed} from './navigation.service';

@Component({
  selector: 'ak-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-medicals';
  resData = null;

  constructor(private navigationService: NavigationService) {
  }

  @HostListener('window:click', ['$event']) outSideClick(event) {
    this.navigationService.mouseClicked.next(event);
  }

  ngOnInit() {
    this.navigationService.responseLoaded$
      .pipe(untilDestroyed(this))
      .subscribe(res => {
        this.resData = res;
      });
  }

  ngOnDestroy(): void {
  }
}
