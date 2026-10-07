import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[rgba(4,12,9,0.86)]">
      <div className="max-w-7xl mx-auto grid gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-green-300">
            Hope Design & Enterprises
          </p>
          <h3 className="mt-4 max-w-md text-2xl font-semibold text-slate-50">
            Modern engineering support shaped by practical industry exposure.
          </h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400">
            We design with clarity, precision, and a strong connection to
            real-world manufacturing needs.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Explore
          </p>
          <div className="mt-4 space-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block text-sm text-slate-400 transition hover:text-green-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Focus
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {["Industrial Design", "Tool Design", "Product Development"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 px-6 py-4 text-center text-xs tracking-[0.18em] text-slate-500 uppercase">
        Hope Design & Enterprises
      </div>
    </footer>
  );
}

export default Footer;
