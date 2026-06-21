import { Project } from './project.model';

// TODO: replace with the real App Store link once recovered (Fitime is published).
const FITIME_APP_STORE_PLACEHOLDER = 'https://apps.apple.com/app/fitime';

/** Curated projects, in display order. Content mirrors the livrable verbatim. */
export const PROJECTS: Project[] = [
  {
    id: 'intuifit',
    name: 'IntuiFit',
    type: 'mobile',
    badge: 'Mobile · iOS',
    description:
      'Application iOS de suivi de musculation, pensée pour enregistrer une série en un seul geste. Suivi gratuit, version Premium (sync iCloud, analyses de progression). Conçue et développée seul, en développement assisté par IA.',
    tags: ['Swift', 'SwiftUI', 'App Store'],
    image: 'projects/intuifit.png',
    video: 'projects/intuifit.mp4',
    demo: 'https://codebygaetan.github.io/intuifit-web/fr/#/',
    // appStore omitted on purpose ⇒ "à paraître" (awaiting App Store validation).
  },
  {
    id: 'lector',
    name: 'Lector',
    type: 'web',
    badge: 'Web · Full-stack',
    description:
      'Application web de suivi de lectures : livres lus, à lire, notes, et fil social entre amis. Back-end Java/Spring Boot, front Angular, authentification via Keycloak, déploiement Docker. Conçue et développée seul.',
    tags: ['Angular', 'Spring Boot', 'Docker'],
    image: 'projects/lector.png',
    video: 'projects/lector.mp4',
    demo: 'https://lector.codebygaetan.fr',
  },
  {
    id: 'baudy-training',
    name: 'Baudy Training',
    type: 'web',
    badge: 'Web · Client',
    description:
      'Site livré pour un coach sportif à Lyon : présentation des services, tarifs et prise de rendez-vous en ligne. Conçu et mis en ligne de bout en bout, en production.',
    tags: [],
    image: 'projects/baudy-training.png',
    video: 'projects/baudy-training.mp4',
    demo: 'https://www.baudytraining.fr',
  },
  {
    id: 'removerr',
    name: 'Removerr',
    type: 'web',
    badge: 'Web · Open source',
    description:
      "Application full-stack de gestion d'une médiathèque : mise en corbeille et suppression différée de films et séries, avec purge automatique. Back-end Java/Spring Boot, front Angular, authentification via Plex, conteneurisée avec Docker. Développée en développement assisté par IA.",
    tags: ['Angular', 'Spring Boot', 'Docker'],
    image: 'projects/removerr.png',
    video: 'projects/removerr.mp4',
    // No public demo (self-hosted). Public repository ⇒ "Code source".
    source: 'https://github.com/CodeByGaetan/Removerr',
  },
  {
    id: 'fitime',
    name: 'Fitime',
    type: 'mobile',
    badge: 'Mobile · iOS',
    description:
      "Application iOS d'entraînement qui réconcilie le chrono HIIT/circuit et le suivi de musculation, pensée pour composer ses propres séances sans choisir un camp. App Apple Watch, minuteur en Dynamic Island, sync iCloud sans compte tiers, export .fitime. Gratuite (avec pub), Premium one-shot pour retirer les pubs. Conçue et développée seul.",
    tags: ['Swift', 'SwiftUI', 'App Store'],
    image: 'projects/fitime.png',
    video: 'projects/fitime.mp4',
    demo: 'https://fitime.codebygaetan.fr',
    appStore: FITIME_APP_STORE_PLACEHOLDER,
  },
];
