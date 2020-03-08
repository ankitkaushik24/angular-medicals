import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  forwardRef,
  HostBinding,
  HostListener,
  Input, OnDestroy,
  OnInit,
  QueryList
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, SelectControlValueAccessor} from '@angular/forms';
import {AkDropdownOptionComponent} from './my-dropdown-option/ak-dropdown-option.component';
import {NavigationService, untilDestroyed} from '../../navigation.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'ak-dropdown',
  templateUrl: './ak-dropdown.component.html',
  styleUrls: ['./ak-dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AkDropdownComponent),
      multi: true
    }
  ]
})
export class AkDropdownComponent implements ControlValueAccessor, OnInit, OnDestroy {

  @ContentChildren(AkDropdownOptionComponent, {descendants: false}) options !: QueryList<AkDropdownOptionComponent>;

  @HostBinding('class.ak-dropdown-open') isOpened = false;

  @Input() value: any;
  selectedItem = null;
  myId;

  onChange = (_: any) => {};
  onTouched = () => {};

  @Input() compareWith = (o1: any, o2: any) => o1 === o2;

  constructor(private navigationService: NavigationService) {
    this.myId = 'dropdown_' + this.navigationService.dropdownId++;
  }

  ngOnInit() {
    this.navigationService.mouseClicked.pipe(untilDestroyed(this))
      .subscribe((event: any) => {
        if (event.srcElement.closest(`#${this.myId}`)) {
          this.isOpened = !this.isOpened;
          this.onTouched();
        } else {
          this.isOpened = false;
        }
      });
  }

  registerOnChange(fn: ((value: any) => any) | any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  ngOnDestroy(): void {
  }

}
