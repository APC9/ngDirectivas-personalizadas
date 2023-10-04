import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeComponent, LifeCycleComponent, StructuralComponent} from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AttributeComponent, LifeCycleComponent, StructuralComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngDirectives';
}
