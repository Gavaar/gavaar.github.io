import { FormGroup } from '@angular/forms';

export interface GavaarForm {
  formGroup: FormGroup;
  title?: string;
}

export type GavaarForms = GavaarForm[] | GavaarForm | FormGroup;

export interface GavaarFormTypes {
  [key: string]: { [type: string]: string | string[] | Date };
}

export interface GavaarFormConfigOpts {
  columns: number[] | number[][];
  types: GavaarFormTypes;
}

export class GavaarFormConfig {
  forms: GavaarForms;
  readonly header: string;
  readonly opts: GavaarFormConfigOpts;
  readonly tabs: boolean;

  private _defaultOpts: GavaarFormConfigOpts = {
    columns: [],
    types: {}
  };

  constructor(forms: GavaarForms, header: string, opts?: Partial<GavaarFormConfigOpts>) {
    this.forms = forms;
    this.header = header;
    if ((this.forms as GavaarForm[]).length) this.tabs = true;

    this.opts = { ...this._defaultOpts, ...opts };
  }
}
