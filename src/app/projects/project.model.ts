/** Device frame used to present the project (browser vs iPhone). */
export type ProjectType = 'web' | 'mobile';

export interface Project {
  /** Slug — used for *ngFor keys and anchors. */
  id: string;
  name: string;
  type: ProjectType;
  /** Label shown on top of the card, e.g. "Web · Full-stack", "Mobile · iOS". */
  badge: string;
  description: string;
  /** Tech chips. Empty for projects whose stack is deliberately not shown. */
  tags: string[];
  /** Still image — 1600×1000 (web) / native frame (mobile). */
  image: string;
  /** Looping muted mp4 revealed on hover and in the lightbox. */
  video: string;
  /** Live public demo. The browser-bar URL is derived from it. */
  demo?: string;
  /**
   * App Store listing (mobile only).
   * Present ⇒ "Disponible sur l'App Store"; absent ⇒ "à paraître".
   */
  appStore?: string;
  /** Public source repository ⇒ "Code source" button. */
  source?: string;
}
