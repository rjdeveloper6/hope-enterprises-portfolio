import Reveal from "../components/Reveal";
import draftingImg from "../assets/drafting-modeling.jpg";
import fabricationImg from "../assets/fabrication-design.jpg";
import productImg from "../assets/product-design.jpg";
import reverseEngineeringImg from "../assets/reverse-engineering.png";
import structuralImg from "../assets/structural-design.jpg";
import toolImg from "../assets/tool-design.png";

const serviceCards = [
  {
    title: "Structural Design",
    text: "Engineering support for structures that need strength, clarity, and practical performance.",
    image: structuralImg,
  },
  {
    title: "Tool Design",
    text: "Purpose-built tooling concepts focused on precision, workflow efficiency, and durability.",
    image: toolImg,
  },
  {
    title: "Product Development",
    text: "From idea shaping to engineering refinement, we help move concepts toward buildable outcomes.",
    image: productImg,
  },
  {
    title: "Drafting & Modeling",
    text: "Clean drawing packages and dependable models that improve coordination and manufacturing readiness.",
    image: draftingImg,
  },
  {
    title: "Fabrication Design",
    text: "Design thinking grounded in fabrication logic, process flow, and execution constraints.",
    image: fabricationImg,
  },
  {
    title: "Reverse Engineering",
    text: "Analyzing existing parts and systems to rebuild design intent with greater accuracy and control.",
    image: reverseEngineeringImg,
  },
];

const servicePoints = [
  "Design support shaped for modern industry needs",
  "Balanced focus on performance, manufacturability, and clarity",
  "Visual communication that makes ideas easier to review and execute",
];

function Services() {
  return (
    <div className="px-6 pb-24 pt-32 text-slate-100">
      <section className="max-w-7xl mx-auto">
        <Reveal>
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:p-10 lg:p-12">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
              Services
            </span>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-50 md:text-5xl">
                  Engineering services presented in one consistent visual
                  system.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                  We help transform requirements into thoughtful design outputs
                  that are easier to evaluate, communicate, and move toward
                  implementation.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-[rgba(8,18,14,0.82)] p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
                  What guides our work
                </p>
                <div className="mt-5 space-y-4">
                  {servicePoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm leading-7 text-slate-300"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto mt-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <Reveal key={service.title}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-[rgba(10,22,17,0.88)] shadow-[0_18px_60px_rgba(0,0,0,0.22)]">
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06110c] via-[#06110c]/10 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-slate-50">
                    {service.title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-400">{service.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
