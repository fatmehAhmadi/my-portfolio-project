import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  @Input() title: string = '';
  @Input() desc: string = '';
  @Input() techs: string[] = [];
  @Input() src: string = '';
}
