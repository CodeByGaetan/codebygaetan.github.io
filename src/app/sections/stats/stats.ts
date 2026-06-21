import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  readonly stats: Stat[] = [
    { value: 'Ing.', label: 'Profil ingénieur' },
    { value: 'Java · Spring', label: '+ Angular' },
    { value: 'iOS', label: 'Swift / SwiftUI · App Store' },
    { value: 'A → Z', label: 'Du concept à la production' },
  ];
}
