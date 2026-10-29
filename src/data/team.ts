// ─────────────────────────────────────────────────────────────
//  UQLIT committee
//  photo: optional, a file in public/assets/team/, e.g. '/assets/team/jane.jpg'
//         (square-ish photos work best). Leave it out to show their initials instead.
// ─────────────────────────────────────────────────────────────

export interface Member {
  name: string;
  role: string;
  photo?: string;
}

// TODO: photos still to come, and the exec team names below are placeholders.

/** T3: the top three roles. */
export const t3: Member[] = [
  { name: 'Vanna Ung', role: 'President' },
  { name: 'Linh Le Do', role: 'Secretary' },
  { name: 'Ellie Feng', role: 'Treasurer' },
];

/** T6: the vice presidents. */
export const t6: Member[] = [
  { name: 'Vaishnavi Ganachari', role: 'Socials VP' },
  { name: 'Clare Johnston', role: 'Corporate VP' },
  { name: 'Jasmin Soon', role: 'Marketing VP' },
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

/** Initials for the photo placeholder, e.g. 'Linh Le Do' -> 'LD'. '?' for '[Name]' placeholders. */
export function initials(name: string): string {
  const parts = name.replace(/\[.*?\]/g, '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
}
