import { Directive } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]',
  standalone: true
})
export class LifeCycleDirective {

  constructor() { }

}
