// Experience entries shown in the Experience section.
const experience = [
  {
    title: "ColouredFinches",
    meta: "Private Partnership · 10 years",
    points: [
      "Set direction and strategy at group level.",
      "Led fundraising and equity stories.",
      "Managed senior stakeholders: shareholders, executives and partners.",
      "Allocated capital and time across the portfolio.",
      "Negotiated deals with 17 Capital, d'Artagnan and InfraVia.",
      "Resolved conflicts and aligned different views in the partnership.",
      "Guided key personnel decisions and re-organisations in ventures."
    ]
  },
  {
    title: "FincoEnergies",
    meta: "CEO and Member of the Board · 3 years",
    points: [
      "Led a company built from scratch into a EUR 20M EBITDA business by 2020.",
      "Worked in road transport fuels and biofuel blending in the Netherlands.",
      "Steered the company through a split in views on sustainability.",
      "Oversaw the push into new areas such as biogas, hydrogen and EV charging."
    ]
  }
];

// Project cards shown in the Projects section.
const projects = [
  {
    title: "2017 Capital Raise",
    text: "Raised EUR 33M of mezzanine finance from 17Capital at a 14% coupon. The story covered three asset types: Alkion, FincoEnergies and AFCO."
  },
  {
    title: "FincoEnergies Buy and Build",
    text: "A buy-and-build story from 2013 to 2020. It grew into a EUR 20M EBITDA company and a leading biofuels blender in the Netherlands."
  },
  {
    title: "GoodNRG Acquisition",
    text: "A step towards full sustainability. It added GoodFuels, GoodShipping and GoodZero to the portfolio."
  },
  {
    title: "FincoEnergies Sale Preparation",
    text: "Supported the sales preparation in 2022. Work focused on strategy and the equity story."
  }
];

// Builds one experience entry (title, meta line and bullet points) and returns it.
function createJob(job) {
  const item = document.createElement("li");
  item.className = "job";

  const title = document.createElement("h3");
  title.textContent = job.title;

  const meta = document.createElement("p");
  meta.className = "meta";
  meta.textContent = job.meta;

  const list = document.createElement("ul");
  job.points.forEach((point) => {
    const li = document.createElement("li");
    li.textContent = point;
    list.appendChild(li);
  });

  item.append(title, meta, list);
  return item;
}

// Builds one project card (title and short text) and returns it.
function createCard(project) {
  const card = document.createElement("article");
  card.className = "card";

  const title = document.createElement("h3");
  title.textContent = project.title;

  const text = document.createElement("p");
  text.textContent = project.text;

  card.append(title, text);
  return card;
}

// Fills the Experience list, the Projects grid and the footer year.
function renderPage() {
  const experienceList = document.getElementById("experience-list");
  experience.forEach((job) => experienceList.appendChild(createJob(job)));

  const projectGrid = document.getElementById("project-grid");
  projects.forEach((project) => projectGrid.appendChild(createCard(project)));

  document.getElementById("year").textContent = new Date().getFullYear();
}

renderPage();
