// ─────────────────────────────────────────────────────────────
//  UQLIT events
//  To add an event: copy one block below, change the details, save.
//  The site rebuilds itself after you commit on GitHub (~1 minute).
//
//  date:      'YYYY-MM-DD'
//  time:      shown as written, e.g. '6:00 pm – 8:30 pm'
//  rubricUrl: the event's page on Rubric (where people get tickets)
//  image:     optional, a file in public/assets/, e.g. '/assets/photo-panel.jpg'
// ─────────────────────────────────────────────────────────────

export interface UqlitEvent {
  title: string;
  date: string;
  time: string;
  venue: string;
  blurb?: string;
  rubricUrl?: string;
  image?: string;
}

// TODO: these are SAMPLE events so the layout can be seen. Replace before launch.
export const events: UqlitEvent[] = [
  {
    title: 'Sample: Industry panel night',
    date: '2026-11-12',
    time: '6:00 pm – 8:00 pm',
    venue: 'Advanced Engineering Building',
    blurb: 'Hear from women working across software, data and quant.',
  },
  {
    title: 'Sample: End of semester trivia',
    date: '2026-11-20',
    time: '5:30 pm – 7:30 pm',
    venue: 'The Red Room, UQ Union',
  },
  {
    title: 'Sample: Paint and sip',
    date: '2026-12-03',
    time: '6:00 pm – 8:00 pm',
    venue: 'Schonell Courtyard',
  },
];

// ---- helpers (no need to edit) ----

const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

function todayInBrisbane(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Brisbane' }).format(new Date());
}

/** Events on or after today (at build time), soonest first. */
export function upcomingEvents(): UqlitEvent[] {
  const today = todayInBrisbane();
  return sorted.filter((e) => e.date >= today);
}

/** Events before today, most recent first. */
export function pastEvents(): UqlitEvent[] {
  const today = todayInBrisbane();
  return sorted.filter((e) => e.date < today).reverse();
}

export function dateParts(iso: string) {
  const d = new Date(`${iso}T00:00:00Z`);
  const fmt = (o: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-AU', { ...o, timeZone: 'UTC' }).format(d);
  return {
    day: fmt({ day: 'numeric' }),
    month: fmt({ month: 'long' }),
    weekday: fmt({ weekday: 'long' }),
    long: fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  };
}
