export interface SidenavOption {
  name: string;
  routerLink?: string;
  icon?: string;
  suboptions?: { name: string; routerLink: string }[];
}

export class SidenavOptions {
  readonly fields: SidenavOption[];

  constructor(options: SidenavOption[]) {
    if (options) {
      this.fields = options.map((opt: SidenavOption) => {
        const current = { ...opt, active: false, arrow: !!opt.suboptions };

        return current;
      });
    }
  }
}
