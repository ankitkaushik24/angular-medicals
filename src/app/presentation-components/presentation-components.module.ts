import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AkDropdownComponent} from './my-dropdown/ak-dropdown.component';
import {AkDropdownOptionComponent} from './my-dropdown/my-dropdown-option/ak-dropdown-option.component';
import {FormFieldComponent} from './form-field/form-field.component';

@NgModule({
    declarations: [AkDropdownComponent, AkDropdownOptionComponent, FormFieldComponent],
    imports: [
        CommonModule
    ],
    exports: [AkDropdownComponent, AkDropdownOptionComponent, FormFieldComponent]
})
export class PresentationComponentsModule {
}
