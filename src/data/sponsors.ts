// Sponsor logos live in public/assets/.
// maxHeight evens out how big each logo looks (some files have more padding than others).
// NOTE: the featured/supporting split was inferred from the prospectus. Confirm with the corporate team.

export interface Sponsor {
  name: string;
  logo: string;
  maxHeight: number;
  url?: string;
}

export const featured: Sponsor[] = [
  { name: 'NTI', logo: '/assets/logo-nti.png', maxHeight: 82 },
  { name: 'Jane Street', logo: '/assets/logo-janestreet.png', maxHeight: 78 },
  { name: 'Atlassian', logo: '/assets/logo-atlassian.png', maxHeight: 96 },
  { name: 'Fenwick', logo: '/assets/logo-fenwick.png', maxHeight: 60 },
];

export const supporting: Sponsor[] = [
  { name: 'Jumbo', logo: '/assets/logo-jumbo.png', maxHeight: 60 },
  { name: 'Deswik', logo: '/assets/logo-deswik.png', maxHeight: 46 },
  { name: 'Optiver', logo: '/assets/logo-optiver.png', maxHeight: 40 },
  { name: 'Data#3', logo: '/assets/logo-data3.png', maxHeight: 44 },
  { name: 'Vivcourt Trading', logo: '/assets/logo-vivcourt.png', maxHeight: 70 },
  { name: 'PwC', logo: '/assets/logo-pwc.png', maxHeight: 62 },
  { name: 'Suncorp', logo: '/assets/logo-suncorp.png', maxHeight: 44 },
];
