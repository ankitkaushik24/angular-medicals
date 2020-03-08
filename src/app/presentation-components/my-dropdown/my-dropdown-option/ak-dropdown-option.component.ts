import {Component, Host, HostListener, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AkDropdownComponent} from '../ak-dropdown.component';

@Component({
  selector: 'ak-option',
  templateUrl: './ak-dropdown-option.component.html',
  styleUrls: ['./ak-dropdown-option.component.scss']
})
export class AkDropdownOptionComponent implements OnInit, OnChanges {

  @Input() value;
  @Input() display;

  @HostListener('click', ['$event']) onSelectOption(e) {
    this.akDropdown.writeValue(this.value);
    this.akDropdown.onChange(this.value);
    this.selectOption();
  }

  constructor(@Host() private akDropdown: AkDropdownComponent) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value.isFirstChange() && this.akDropdown.compareWith(this.akDropdown.value, changes.value.currentValue)) {
      this.selectOption();
    }
  }

  selectOption() {
    this.akDropdown.selectedItem = {value: this.value, display: this.display};
  }

}
