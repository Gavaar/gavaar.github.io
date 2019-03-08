import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'gav-spinner-directive-component',
  template: '<mat-spinner [diameter]=16 class="GavSpinner"></mat-spinner>',
})
export class GavSpinnerDirectiveComponent { }

@Directive({
  selector: '[gavSpinner]',
})
export class GavSpinnerDirective implements OnChanges {
  @Input('gavSpinner') loading: boolean;
  spinner: ComponentFactory<GavSpinnerDirectiveComponent>;

  constructor(
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private template: TemplateRef<any>
  ) {
    this.spinner = this.cfr.resolveComponentFactory(GavSpinnerDirectiveComponent);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.vcr.clear();
    if (changes.loading.currentValue !== changes.loading.previousValue && this.loading) {
      this.vcr.clear();
      this.vcr.createComponent(this.spinner);
    } else if (!this.loading) {
      this.vcr.clear();
      this.vcr.createEmbeddedView(this.template);
    } else {
      console.warn('opps! something bad happened with gav-spinner');
    }
  }
}
