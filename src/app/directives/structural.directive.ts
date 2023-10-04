import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appStructural]',
  standalone: true
})
export class StructuralDirective {

  private _show: boolean = false;
  private _templateRef = inject(TemplateRef<any>);
  private _viewContainerRef = inject(ViewContainerRef)

  constructor() { }

  @Input() set correctRole( condition: boolean ){

    if( condition && !this._show ){
      this._viewContainerRef.createEmbeddedView(this._templateRef)
      this._show = true;
    }else{
      this._viewContainerRef.clear();
      this._show= false;
    }

  }


}
