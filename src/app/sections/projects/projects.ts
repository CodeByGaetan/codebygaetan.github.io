import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Project } from '../../projects/project.model';
import { PROJECTS } from '../../projects/projects.data';
import { ProjectCard } from '../../projects/project-card/project-card';
import { Lightbox } from '../../projects/lightbox/lightbox';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, Lightbox],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  readonly projects = PROJECTS;
  readonly selected = signal<Project | null>(null);

  open(project: Project): void {
    this.selected.set(project);
  }

  close(): void {
    this.selected.set(null);
  }
}
