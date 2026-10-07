import Reveal from "../components/Reveal";
import teamImg from "../assets/team.jpg";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";
import historyImg from "../assets/history.jpg";
import customerFocusIcon from "../assets/customer-focus-icon.png";
import innovationIcon from "../assets/innovation-icon.png";
import reliabilityIcon from "../assets/reliability-icon.png";
import expertiseIcon from "../assets/expertise-icon.png";

const values = [
  {
    icon: customerFocusIcon,
    title: "Customer Focus",
    text: "We shape every design around usability, manufacturability, and practical client goals.",
  },
  {
    icon: innovationIcon,
    title: "Innovation",
    text: "Fresh thinking and exposure to new technologies help us keep our solutions current.",
  },
  {
    icon: reliabilityIcon,
    title: "Reliability",
    text: "Clear processes, consistent delivery, and technical discipline support long-term trust.",
  },
  {
    icon: expertiseIcon,
    title: "Engineering Expertise",
    text: "Our work combines design knowledge with growing awareness of real production environments.",
  },
];

const storyCards = [
  {
    image: missionImg,
    title: "Mission",
    text: "Deliver cost-effective and intelligent engineering solutions that add measurable value to modern industry.",
  },
  {
    image: visionImg,
    title: "Vision",
    text: "Build a design practice known for clarity, adaptability, and stronger links between design and manufacturing.",
  },
  {
    image: historyImg,
    title: "Growth",
    text: "We continue to sharpen our capabilities through project work, research, and direct industry exposure.",
  },
];

const roadmapData = [
  {
    year: "2021",
    title: "Foundation",
    points: [
      "Company incorporated",
      "Started industrial design & drafting",
      "Initial client projects",
    ],
  },
  {
    year: "2022",
    title: "Growth Phase",
    points: [
      "Delivered multiple design projects",
      "Built core team",
      "Improved CAD workflows",
    ],
  },
  {
    year: "2023",
    title: "Expansion",
    points: [
      "Entered product & tool design",
      "Improved client retention",
      "Production-ready solutions",
    ],
  },
  {
    year: "2024",
    title: "Process & Quality",
    points: [
      "MSME Registration & Certify by Customer",
      "Stronger industry exposure",
    ],
  },
  {
    year: "2025",
    title: "Brand Building",
    points: [
      "Portfolio & digital presence",
      "Scaling team",
      "Handling bigger projects",
    ],
  },
  {
    year: "2026",
    title: "Future Vision",
    points: [
      "Recognized design brand goal",
      "Advanced engineering solutions",
      "Expansion into new domains",
    ],
  },
];

function About() {
  return (
    <div className="px-6 pb-24 pt-32 text-slate-100">
      <section className="max-w-7xl mx-auto">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10 lg:p-12">
              <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                About Us
              </span>
              <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
                A focused engineering studio with a modern industrial mindset.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Hope Design & Enterprises works at the intersection of design,
                functionality, and production awareness. We aim to create
                precise engineering solutions that feel contemporary, practical,
                and ready for real manufacturing contexts.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "150+", label: "Designs completed" },
                  { value: "10+", label: "Happy customers" },
                  { value: "5+", label: "Years experience" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <p className="text-3xl font-bold text-green-300">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(8,18,14,0.9)] shadow-[0_20px_80px_rgba(0,0,0,0.3)]">
              <img
                src={teamImg}
                alt="Hope Design & Enterprises team"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-10">
        <div className="grid gap-6 md:grid-cols-3">
          {storyCards.map((card) => (
            <Reveal key={card.title}>
              <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(10,22,17,0.88)] shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-slate-50">
                    {card.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-400">{card.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto mt-16">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-bold text-slate-50">Our Journey</h2>

            <p className="mt-3 text-slate-400">
              A timeline of how Hope Design & Enterprises has evolved over the
              years.
            </p>

            <div className="mt-10 relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 h-full w-[2px] bg-green-400/30"></div>

              {roadmapData.map((item, index) => (
                <div key={index} className="relative pl-12 mb-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black text-sm font-bold shadow-lg">
                    🚩
                  </div>

                  {/* Card */}
                  <div className="rounded-xl border border-transparent bg-[rgba(8,18,14,0.85)] p-5 transition hover:scale-[1.02] hover:border-green-400/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                    <h3 className="text-xl font-semibold text-green-300">
                      {item.year} — {item.title}
                    </h3>

                    <ul className="mt-3 list-disc list-inside text-slate-400 space-y-1">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto mt-10">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                Core Values
              </span>
              <h2 className="mt-4 text-3xl font-bold text-slate-50">
                One visual language, one engineering standard.
              </h2>
              <p className="mt-4 leading-7 text-slate-400">
                Our approach combines disciplined execution with a curiosity for
                better tools, better processes, and better outcomes.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[1.5rem] border border-white/10 bg-[rgba(8,18,14,0.74)] p-6"
                >
                  <img
                    src={value.icon}
                    alt={value.title}
                    className="h-12 w-12 rounded-xl object-contain"
                  />
                  <h3 className="mt-5 text-xl font-semibold text-slate-50">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {value.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

export default About;
