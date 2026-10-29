// ─────────────────────────────────────────────────────────────
//  UQLIT committee
//  photo: optional, a file in public/assets/team/, e.g. '/assets/team/jane.jpg'
//         (square-ish photos work best). Leave it out to show a "?" placeholder.
// ─────────────────────────────────────────────────────────────

export interface Member {
  name: string;
  role: string;
  photo?: string;
}

// TODO: all names and photos below are placeholders.

/** T3: the top three roles. */
export const t3: Member[] = [
  { name: '[Name]', role: 'President' },
  { name: '[Name]', role: 'Secretary' },
  { name: '[Name]', role: 'Treasurer' },
];

/** T6: the vice presidents. */
export const t6: Member[] = [
  { name: '[Name]', role: 'Socials VP' },
  { name: '[Name]', role: 'Corporate VP' },
  { name: '[Name]', role: 'Marketing VP' },
];

/** Executive team, grouped into portfolios. */
export const execs: { portfolio: string; members: Member[] }[] = [
  { portfolio: 'Socials', members: placeholders('Socials exec', 4) },
  { portfolio: 'Corporate', members: placeholders('Corporate exec', 4) },
  { portfolio: 'Marketing', members: placeholders('Marketing exec', 4) },
  { portfolio: 'General', members: placeholders('General exec', 4) },
];

function placeholders(role: string, n: number): Member[] {
  return Array.from({ length: n }, () => ({ name: '[Name]', role }));
}
