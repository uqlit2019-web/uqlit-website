// Job Hub postings from sponsors.
// The graphic, title, description, due date and apply link are posted exactly as the sponsor sends them.

export interface JobPosting {
  id: string;          // used in the URL: /jobs/#deswik-grad-swe
  company: string;
  logo: string;        // sponsor logo already used on the Sponsors section
  title: string;
  type: 'Graduate' | 'Internship' | 'Program';
  graphic?: string;    // the sponsor's own graphic, untouched (a branded card stands in if there isn't one)
  graphicW?: number;   // its size, so the board can lay it out before it loads
  graphicH?: number;
  due: string;         // ISO date applications close
  dueTime?: string;    // optional closing time as the sponsor gives it, e.g. '11:59 pm Hong Kong time'
  applyUrl: string;
  description: string; // pasted as provided: line breaks and "•" bullets are kept
}

export const jobs: JobPosting[] = [
  {
    id: 'janestreet-insight',
    company: 'Jane Street',
    logo: '/assets/logo-janestreet.png',
    title: 'INSIGHT Program, Hong Kong',
    type: 'Program',
    graphic: '/assets/jobs/janestreet-insight.jpg', graphicW: 1200, graphicH: 1180,
    due: '2026-11-08',
    dueTime: '11:59 pm Hong Kong time',
    applyUrl: 'https://www.janestreet.com/apply-insight-hkg/?utm_source=program_email&utm_medium=email&utm_campaign=insight_hkg_program&utm_content=apply_button',
    description: `You're invited to apply to Jane Street's INSIGHT Program!

This January, Jane Street is excited to host our INSIGHT program in Hong Kong! We’re inviting students who identify as women, transgender, and/or gender-expansive to spend three days in our office learning more about roles within our firm and how we solve challenges at Jane Street, including the specific concepts and tools we use in our daily work.

Selected students will arrive in Hong Kong and depart according to their track dates. Jane Street will provide all travel to and from Hong Kong, as well as meals, housing, and a variety of social events. Out-of-pocket program-related expenses may be eligible for reimbursement.

INSIGHT has three different program tracks students can apply for:
- Trading and Research (January 3rd - 8th)
- Strategy and Product (January 3rd - 8th)
- Software Engineering (January 5th - 10th)

Don’t have a background in finance? No worries — many Jane Street employees don’t come from a financial background. If you’re curious about our work and want to learn more about what a career in finance could look like, we encourage you to apply!`,
  },
  {
    id: 'deswik-grad-swe',
    company: 'Deswik',
    logo: '/assets/logo-deswik.png',
    title: 'Graduate Software Engineer',
    type: 'Graduate',
    graphic: '/assets/jobs/deswik-grad-swe.jpg', graphicW: 800, graphicH: 800,
    due: '2026-11-13',
    applyUrl: 'https://sandvik.wd3.myworkdayjobs.com/deswik-jobs/job/Australia-QLD-Brisbane/Graduate-Software-Engineer_R0098726',
    description: `Deswik is seeking graduates with an interest in a range of software engineering disciplines, with a particular focus on:
• Mathematical Modelling & Operational Research
• Graphics, Visualisation & 3D Modelling
• Full Stack Feature Development
• Data Analytics & Software Engineering
• Students with an AI emphasis in their software degrees are also encouraged to apply
This is an excellent opportunity for students looking to apply their technical skills in an innovative environment and gain hands-on experience working on impactful software solutions.`,
  },
];
