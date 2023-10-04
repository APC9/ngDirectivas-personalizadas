import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirective } from '../../directives';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [CommonModule, AttributeDirective],
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  color: string = '';

}
