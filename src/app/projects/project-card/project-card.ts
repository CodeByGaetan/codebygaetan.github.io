import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Project } from '../project.model';
import { DeviceFrame } from '../device-frame/device-frame';

@Component({
  selector: 'app-project-card',
  imports: [DeviceFrame],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly open = output<void>();

  readonly hovered = signal(false);
}
