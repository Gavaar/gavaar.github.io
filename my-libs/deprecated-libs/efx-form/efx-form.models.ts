import { FormGroup } from '@angular/forms';

// Structural Interfaces
interface EquifaxForm {
  formGroup: FormGroup;
  title?: string;
}

type EquifaxInputTypes =
  | { text: string }
  | { number: string }
  | { select: string[] }
  | { datepicker: Date };
type EquifaxForms = EquifaxForm[] | EquifaxForm | FormGroup;

interface EquifaxFormTypes {
  [label: string]: EquifaxInputTypes;
}

export interface EquifaxFormConfigOpts {
  columns: number[];
  types: EquifaxFormTypes;
}

export class EquifaxFormConfig {
  forms: EquifaxForms;
  readonly header: string;
  readonly opts: EquifaxFormConfigOpts;
  readonly tabs: boolean;

  private _defaultOpts: EquifaxFormConfigOpts = {
    columns: [],
    types: {},
  };

  constructor(forms: EquifaxForms, opts?: Partial<EquifaxFormConfigOpts>) {
    this.forms = forms;
    if ((this.forms as EquifaxForm[]).length) this.tabs = true;

    this.opts = { ...this._defaultOpts, ...opts };
  }

  private _markAsTouched(form: FormGroup): FormGroup {
    Object.keys(form.controls)
      .map(e => form.controls[e])
      .forEach(control => control.markAsTouched());
    return form;
  }

  // required only when using change detection ChangeDetectionStrategy.OnPush
  // markForCheck(): void {
  //   if (this.forms['length']) {
  //     (this.forms as EquifaxForm[]).map(efxForm => {
  //       efxForm.formGroup = new FormGroup(this._markAsTouched(efxForm.formGroup).controls);
  //       return efxForm;
  //     });
  //   } else {
  //     this.forms = new FormGroup(this._markAsTouched(this.forms as FormGroup).controls);
  //   }
  // }
}
