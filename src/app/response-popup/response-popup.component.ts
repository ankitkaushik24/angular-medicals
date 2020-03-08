import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationService, untilDestroyed} from '../navigation.service';

@Component({
  selector: 'app-response-popup',
  templateUrl: './response-popup.component.html',
  styleUrls: ['./response-popup.component.scss']
})
export class ResponsePopupComponent implements OnInit, OnDestroy {

  @Input() data;

  constructor(private navigationService: NavigationService) {
  }

  ngOnInit() {
    this.navigationService.mouseClicked.pipe(untilDestroyed(this))
      .subscribe(event => {
        if (!event.srcElement.closest('#my_response_popup')) {
          this.navigationService.responseLoaded$.next(null);
        }
      });
  }

  ngOnDestroy() {
  }

}
