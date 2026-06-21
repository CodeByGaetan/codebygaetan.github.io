import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Nav } from './layout/nav/nav';
import { Hero } from './sections/hero/hero';
import { Stats } from './sections/stats/stats';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, Stats],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
