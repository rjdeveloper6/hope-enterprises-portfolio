import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import bgImage from "../assets/homepage-banner.jpg";
import productImg from "../assets/product-design.jpg";
import structuralImg from "../assets/structural-design.jpg";
import toolImg from "../assets/tool-design.png";
import visitImg1 from "../assets/visits_1.jpg";
import visitImg2 from "../assets/visits_2.jpg";
import visitImg3 from "../assets/visits_3.jpg";
import visitImg4 from "../assets/visits.jpg";
import Reveal from "../components/Reveal";

const companyVisit = {
  eyebrow: "Industry Visit",
  title: "Metal Forming Expo, Pune",
  description:
    "Our team visited the Metal Forming Expo in Pune to explore the latest developments in sheet metal working, laser cutting, CNC machining, and precision engineering. The event gave us a valuable chance to observe modern machinery, understand fabrication trends, and connect our design thinking with real industry practices.",
  highlights: ["Expo visit", "Live demos", "Industry insights"],
  images: [
    {
      src: visitImg2,
      alt: "Entrance view of the Metal Forming Expo in Pune",
    },
    {
      src: visitImg1,
      alt: "Team member at the Metal Forming Expo event backdrop",
    },
    {
      src: visitImg3,
      alt: "Live machine demonstration inside the expo hall",
    },
    {
      src: visitImg4,
      alt: "Visitors walking through the expo activity area",
    },
  ],
};

function Home() {
  return (
    <>
      <section
        className="relative flex min-h-[100vh] items-center text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 pt-32">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">Engineering Excellence</span>

            <span className="text-green-500">
              <Typewriter
                words={[
                  "Industrial Design",
                  "Structural Solutions",
                  "Product Innovation",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300">
            Hope Design & Enterprises delivers innovative and cost-effective
            engineering solutions tailored to modern industry needs.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-block rounded-lg bg-green-500 px-8 py-3 font-semibold text-black transition hover:scale-105"
            >
              Our Services
            </Link>

            <Link
              to="/contact"
              className="rounded-md border border-green-500 px-6 py-3 transition hover:bg-green-500 hover:text-black"
            >
              Contact Us
            </Link>
          </div>

          <div className="relative z-10 mt-16 flex w-full flex-col items-center">
            <h2 className="mt-6 animate-fadeInUp bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-3xl font-extrabold tracking-wide text-transparent md:text-5xl">
              Be The First
            </h2>

            <div className="h-10 md:h-14"></div>
            <div className="flex w-full max-w-3xl flex-wrap justify-center gap-6 rounded-xl bg-black/60 px-4 py-6 shadow-lg backdrop-blur-md sm:gap-10 sm:px-10 sm:py-8">
              <div className="flex min-w-[120px] flex-1 flex-col items-center">
                <span className="text-3xl font-bold text-green-400 sm:text-4xl md:text-5xl">
                  <CountUp end={10} duration={2.5} />+
                </span>
                <span className="mt-2 text-center text-base text-gray-200 sm:text-lg">
                  Happy Customers
                </span>
              </div>
              <div className="flex min-w-[120px] flex-1 flex-col items-center">
                <span className="text-3xl font-bold text-green-400 sm:text-4xl md:text-5xl">
                  <CountUp end={150} duration={2.5} />+
                </span>
                <span className="mt-2 text-center text-base text-gray-200 sm:text-lg">
                  Design Completed
                </span>
              </div>
              <div className="flex min-w-[120px] flex-1 flex-col items-center">
                <span className="text-3xl font-bold text-green-400 sm:text-4xl md:text-5xl">
                  <CountUp end={5} duration={2.5} />+
                </span>
                <span className="mt-2 text-center text-base text-gray-200 sm:text-lg">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.22em] text-green-300">
                Core Services
              </span>
              <h2 className="mt-5 text-4xl font-bold text-slate-50">
                Clean structure, one premium theme, and focused service blocks.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal>
              <div className="group relative overflow-hidden rounded-xl border border-green-500/20 transition hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                <img
                  src={structuralImg}
                  alt="Structural Design"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70"></div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-green-400">
                    Structural Design
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Advanced structural engineering solutions built for
                    performance.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative overflow-hidden rounded-xl border border-green-500/20 transition hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                <img
                  src={toolImg}
                  alt="Tool Design"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70"></div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-green-400">
                    Tool Design
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    Precision tooling engineered for efficiency and durability.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="group relative overflow-hidden rounded-xl border border-green-500/20 transition hover:shadow-[0_0_25px_rgba(34,197,94,0.4)]">
                <img
                  src={productImg}
                  alt="Product Development"
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70"></div>

                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-semibold text-green-400">
                    Product Development
                  </h3>
                  <p className="mt-2 text-sm text-gray-300">
                    From concept to production-ready engineering innovation.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/services"
              className="inline-block rounded-lg bg-green-500 px-8 py-3 font-semibold text-black transition hover:scale-105"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-green-400/20 bg-green-400/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-green-300 shadow-sm">
                Recent Highlights
              </span>
              <h2 className="mt-5 text-4xl font-bold text-slate-50">
                Company Visits & Activities
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                A closer look at the events, expo visits, and learning moments
                that keep our team connected with modern industry practices.
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Reveal>
              <article className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(10,22,17,0.9)] shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                <div className="grid items-center lg:grid-cols-[1.05fr_1.2fr]">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <span className="inline-flex rounded-full bg-green-400/10 px-4 py-1 text-sm font-semibold text-green-300">
                      {companyVisit.eyebrow}
                    </span>

                    <h3 className="mt-5 text-3xl font-bold text-slate-50">
                      {companyVisit.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-slate-400">
                      {companyVisit.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                      {companyVisit.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-950/95 p-5 sm:p-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {companyVisit.images.map((image, imageIndex) => (
                        <div
                          key={image.alt}
                          className={`overflow-hidden rounded-[1.5rem] border border-white/10 ${
                            imageIndex % 2 === 0
                              ? "sm:translate-y-4"
                              : "sm:-translate-y-4"
                          }`}
                        >
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-72"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
