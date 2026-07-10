// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// Almost every text change you'll want to make lives here.
// You don't need to touch the components — they read from this file.
// ────────────────────────────────────────────────────────────────

export const hero = {
  name: "X",
  role: "Sales Professional",
  location: "Berlin, Germany",
  headline:
    "I turn cold conversations into long-term partnerships. Currently helping mid-market teams close deals they didn't think were possible.",
  ctaPrimary: { label: "See my work", href: "#projects" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};

export const about = {
  heading: "About",
  paragraphs: [
    "I'm a sales professional who turns cold conversations into long-term partnerships by diagnosing what a prospect actually needs before ever making a pitch.",
  ],
};

export const experience = {
  heading: "Experience",
  roles: [
    {
      title: "Senior Account Executive",
      company: "Alpha",
      period: "2023 — Present",
      summary:
        "Owned a full-cycle sales pipeline from prospecting to close for mid-market accounts. Exceeded quota every quarter, growing the book of business by 40% year over year.",
    },
    {
      title: "Account Executive",
      company: "Beta",
      period: "2020 — 2023",
      summary:
        "Built and managed a portfolio of key accounts, turning first-time buyers into repeat customers through consultative selling and relentless follow-through.",
    },
    {
      title: "Sales Development Representative",
      company: "Gamma",
      period: "2018 — 2020",
      summary:
        "Started at the top of the funnel, booking qualified meetings and learning the fundamentals that still shape how I sell today.",
    },
  ],
};

export const projects = {
  heading: "Selected wins",
  items: [
    {
      title: "Landing the anchor account",
      year: "2024",
      summary:
        "Turned a lukewarm inbound lead into the largest contract in company history through six months of patient relationship-building and a proposal tailored to their exact roadmap.",
      link: { label: "Case study", href: "#" },
    },
    {
      title: "Rebuilding a churned relationship",
      year: "2023",
      summary:
        "Re-engaged a customer who'd left for a competitor, addressed the root cause head-on, and won them back with a renewal 20% larger than their original contract.",
      link: { label: "Read the writeup", href: "#" },
    },
    {
      title: "Territory turnaround",
      year: "2022",
      summary:
        "Inherited an underperforming territory and rebuilt the pipeline from scratch — 3x'd quarterly bookings within two quarters through disciplined prospecting.",
      link: { label: "View details", href: "#" },
    },
  ],
};

export const skills = {
  heading: "What I work with",
  groups: [
    {
      label: "Sales",
      items: ["Consultative selling", "Pipeline management", "Negotiation", "Account planning", "Forecasting"],
    },
    {
      label: "Tools",
      items: ["Salesforce", "HubSpot", "Outreach", "LinkedIn Sales Navigator", "Gong"],
    },
    {
      label: "Strengths",
      items: ["Relationship building", "Objection handling", "Storytelling", "Cross-functional collaboration"],
    },
  ],
};

export const testimonials = {
  heading: "What people say",
  quotes: [
    {
      text:
        "X has a rare gift for making prospects feel understood rather than sold to. That's why the deals stick and the renewals happen without drama.",
      author: "Jordan Lee",
      role: "VP of Sales, Alpha",
    },
    {
      text:
        "Working with X changed how I think about our sales process. They ask better questions than anyone else on the team, and it shows in the numbers.",
      author: "Priya Nair",
      role: "Customer Success Lead, Alpha",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Open to new sales roles, partnerships, and conversations about what makes a good pipeline. Berlin or remote.",
  email: "x@example.com",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/in/yourname" },
    { label: "Twitter / X", href: "https://twitter.com/yourname" },
  ],
};

export const meta = {
  title: "X — Sales Professional",
  description: "Berlin-based sales professional building long-term partnerships, one deal at a time.",
};
