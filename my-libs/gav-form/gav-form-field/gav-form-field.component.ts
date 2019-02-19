import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GavaarFormConfigOpts, GavaarFormTypes } from '../gav-form.models';

@Component({
  selector: 'gav-form-field',
  templateUrl: './gav-form-field.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GavFormFieldComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() opts: GavaarFormConfigOpts;

  formGroupKeys: string[];
  formTypes: { [key: string]: string } = {};

  keyFn = index => index;

  ngOnInit(controls = this.formGroup.controls): void {
    const ok = Object.keys;
    this.formGroupKeys = ok(controls);

    this.formGroupKeys.forEach(key => {
      const optKey = this.opts.types[key];

      if (optKey) {
        this.formTypes[key] = ok(optKey)[0];
      }
    });
  }
}
