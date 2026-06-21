import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Hero } from './sections/hero/hero';
import { Stats } from './sections/stats/stats';
import { Services } from './sections/services/services';
import { About } from './sections/about/about';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Stats, Services, About],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
