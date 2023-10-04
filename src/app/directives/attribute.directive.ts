import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
  standalone: true
})
export class AttributeDirective {

  @Input() defaultColor: string = '';
  @Input('appHighLight') highlightColor: string = '';

  private _elementRef = inject(ElementRef)

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeColor( this.highlightColor || this.defaultColor || 'lightgreen')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor(null)
  }

  private changeColor( color: string | null) {
    this._elementRef.nativeElement.style.backgroundColor = color;
  }

}
