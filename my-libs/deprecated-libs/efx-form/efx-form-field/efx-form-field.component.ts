import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EquifaxFormConfigOpts } from '../efx-form.models';

@Component({
  selector: 'efx-form-field',
  templateUrl: './efx-form-field.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EfxFormFieldComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() opts: EquifaxFormConfigOpts;

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
