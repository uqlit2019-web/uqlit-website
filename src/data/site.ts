// Site-wide settings. Edit these, not the components.

// UQLIT's membership page on Rubric.
export const RUBRIC_MEMBERSHIP_URL = 'https://campus.hellorubric.com/?tab=memberships&s=3220&mid=17235';

export const SOCIETY_NAME = 'UQ Ladies in Technology';

// UQLIT's events list on Rubric.
export const RUBRIC_EVENTS_URL = 'https://campus.hellorubric.com/?tab=events&s=3220';

// UQLIT's socials: shown in the Get in touch section and the footer.
// `icon` is the inner markup of a 24×24 SVG drawn in currentColor.
export const SOCIALS = [
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@uq.lit',
    href: 'https://www.instagram.com/uq.lit/',
    icon: '<rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="12" cy="12" r="4.4" fill="none" stroke="currentColor" stroke-width="2.2"/><circle cx="17.6" cy="6.4" r="1.4" fill="currentColor"/>',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    handle: '@uqlit',
    href: 'https://www.facebook.com/uqlit',
    icon: '<circle cx="12" cy="12" r="11" fill="currentColor"/><path d="M13.3 21.9v-7.2h2.4l.4-2.9h-2.8V10c0-.8.3-1.4 1.4-1.4h1.5V6.1a19 19 0 0 0-2.2-.1c-2.2 0-3.6 1.3-3.6 3.7v2.1H8v2.9h2.4v7.1a11 11 0 0 0 2.9.1z" fill="#fff"/>',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    handle: 'UQ Ladies in Technology',
    href: 'https://www.linkedin.com/company/uqlit/',
    icon: '<rect x="1.5" y="1.5" width="21" height="21" rx="3" fill="currentColor"/><g fill="#fff"><rect x="5.6" y="9.6" width="2.9" height="8.6"/><circle cx="7.05" cy="6.6" r="1.7"/><path d="M10.6 9.6h2.8v1.2c.4-.8 1.5-1.4 2.8-1.4 2.6 0 3.2 1.6 3.2 3.9v4.9h-2.9v-4.3c0-1.1-.2-2-1.4-2s-1.6.9-1.6 2v4.3h-2.9z"/></g>',
  },
] as const;
