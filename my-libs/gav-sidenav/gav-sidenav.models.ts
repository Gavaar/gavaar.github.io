export interface SidenavOption {
  name: string;
  routerLink: string;
  icon?: string;
  suboptions?: Array<{ name: string; routerLink: string }>;
  arrow?: boolean;
  active?: boolean;
}

export class SidenavOptions {
  fields: SidenavOption[];

  constructor(options: SidenavOption[]) {
    if (options) {
      this.fields = options.map(opt => {
        const current = { ...opt, active: false, arrow: opt.suboptions ? true : false };

        return current;
      });
    }
  }
}
