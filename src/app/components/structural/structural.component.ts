import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirective } from '../../directives/structural.directive';
import { AttributeDirective } from 'src/app/directives';

@Component({
  selector: 'app-structural',
  standalone: true,
  imports: [CommonModule, StructuralDirective, AttributeDirective ],
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {

  rol: boolean = false;

  changeRol(){
    this.rol = !this.rol;
  }

}
