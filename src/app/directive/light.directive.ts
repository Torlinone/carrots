import {Attribute, Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[exeUnless]'
})
export class LightDirective {

  @Input('exeUnless')
  set condition(newCondition: boolean) {
    if (!newCondition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    } }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {
  }


}
