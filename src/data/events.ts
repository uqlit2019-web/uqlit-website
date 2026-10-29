// ─────────────────────────────────────────────────────────────
//  UQLIT events
//  To add an event: copy one block below, change the details, save.
//  The site rebuilds itself after you commit on GitHub (~1 minute).
//
//  date:      'YYYY-MM-DD'
//  time:      shown as written, e.g. '6:00 pm – 8:30 pm'
//  rubricUrl: the event's page on Rubric (where people get tickets).
//             Open the event on Rubric and copy the address, or use
//             rubric(12345) with the event's id (the eid=… part of the address).
//  blurb:     a sentence or two about what to expect
//  image:     optional photo, a file in public/assets/events/ (keep it under ~1600px wide)
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

const rubric = (eid: number) => `https://campus.hellorubric.com/?s=3220&eid=${eid}`;

export const events: UqlitEvent[] = [
  // ---- 2026 ----
  {
    title: 'Winx Club Trivia! Skirts x LIT x BMES',
    date: '2026-09-24',
    time: '6:00 pm – 8:30 pm',
    venue: 'Hawken Engineering Building, 50-S201',
    blurb: 'Trivia, snacks and drinks with Winx Club flair, alongside UQ Skirts in Engineering and BMES.',
    rubricUrl: rubric(77515),
  },
  {
    title: 'UQLIT Games Night',
    date: '2026-08-31',
    time: '4:00 pm – 7:00 pm',
    venue: 'Sir James Foot Building',
    blurb: 'Mario Kart, Wii Sports, Just Dance, and plenty of snacks.',
    rubricUrl: rubric(73048),
  },
  {
    title: 'Fenwick x UQLIT Uni to Grad Life Info Session',
    date: '2026-08-27',
    time: '4:00 pm – 6:00 pm',
    venue: 'Collaborative Room, Building 69',
    blurb: 'Fenwick professionals on life after uni, graduate opportunities and making the leap into work. Boba included.',
    rubricUrl: rubric(73383),
  },
  {
    title: 'UQLIT x UQCS Mock Interviews',
    date: '2026-08-04',
    time: '6:30 pm – 8:30 pm',
    venue: 'Andrew N. Liveris Building, Room 242/243',
    blurb: 'Practise behavioural interviews and meet tech recruiters ahead of intern and grad applications.',
    rubricUrl: rubric(69824),
    image: '/assets/events/mockinterviews2026.jpg',
  },
  {
    title: 'Slime Making Social',
    date: '2026-05-22',
    time: '2:00 pm – 4:00 pm',
    venue: 'ModWest (11A) Deck',
    blurb: 'A pre-exam reset: make and decorate your own slime, with donuts and mocktails.',
    rubricUrl: rubric(63429),
  },
  {
    title: 'Ladies in Tech Gala',
    date: '2026-05-06',
    time: '6:00 pm – 9:00 pm',
    venue: 'The Garden Room, Roma Street Parklands',
    blurb: 'Our flagship night: career insights and networking with women leading in tech, alumni and sponsors.',
    rubricUrl: rubric(60709),
  },
  {
    title: 'Skirts x BMES x LIT Total Drama Island Trivia',
    date: '2026-04-24',
    time: '5:30 pm – 8:30 pm',
    venue: 'Hawken Engineering Building, 50-S201',
    blurb: 'Total Drama Island trivia with food, team challenges and prizes.',
    rubricUrl: rubric(60668),
  },
  {
    title: 'Resume Building & Headshots',
    date: '2026-03-24',
    time: '6:30 pm – 8:30 pm',
    venue: 'Andrew N. Liveris Building (46)',
    blurb: 'Resume tips from industry experts and a professional LinkedIn headshot, with UQCS.',
    rubricUrl: rubric(57243),
    image: '/assets/events/resumebuilding2026.jpg',
  },
  {
    title: 'Paint and Sip',
    date: '2026-03-18',
    time: '2:00 pm – 4:00 pm',
    venue: 'Dr Mary Mahoney AO Amphitheatre',
    blurb: 'Mini canvases, boba from Yoyo Tea and baked goods. No artistic experience needed.',
    rubricUrl: rubric(56998),
  },
  {
    title: 'UQLIT x Atlassian Coding Interview Workshop',
    date: '2026-03-10',
    time: '4:00 pm – 6:00 pm',
    venue: 'Hawken Engineering Building',
    blurb: 'Atlassian engineers and recruiters break down how to succeed in a coding interview.',
    rubricUrl: rubric(55240),
  },
];

// ---- helpers (no need to edit) ----

const sorted = [...events].sort((a, b) => a.date.localeCompare(b.date));

export function todayInBrisbane(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Australia/Brisbane' }).format(new Date());
}

/** Every event, oldest first. */
export function allEvents(): UqlitEvent[] {
  return sorted;
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
    mon: fmt({ month: 'short' }),
    weekday: fmt({ weekday: 'long' }),
    long: fmt({ weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }),
  };
}
