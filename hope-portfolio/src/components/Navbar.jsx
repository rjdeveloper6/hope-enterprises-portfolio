import { useState } from "react";
import { NavLink } from "react-router-dom";
import companyLogo from "../assets/company-logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
  return `transition ${
    isActive ? "text-green-300" : "text-slate-200 hover:text-green-300"
  }`;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[rgba(6,17,12,0.72)] backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="flex min-w-0 items-center gap-3 text-slate-50 transition hover:text-green-300"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-green-400/25 bg-green-400/10 shadow-[0_0_25px_rgba(74,222,128,0.14)]">
            <img
              src={companyLogo}
              alt="Hope Design & Enterprises logo"
              className="h-7 w-7 object-contain"
            />
          </span>
          <div className="min-w-0">
            <p className="truncate text-[11px] font-semibold uppercase tracking-[0.24em] text-green-300 sm:text-sm sm:tracking-[0.28em]">
              Hope Design & Enterprises
            </p>
            <p className="truncate text-[11px] text-slate-400 sm:text-xs">
              Industrial Engineering
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-5 text-sm lg:flex xl:gap-8 xl:text-base">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="rounded-full border border-green-400/25 bg-green-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-green-300 transition hover:bg-green-400/15 lg:hidden sm:text-sm"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/8 bg-[rgba(7,18,13,0.94)] px-4 pb-5 pt-4 backdrop-blur-xl sm:px-6 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border-green-400/30 bg-green-400/10 text-green-300"
                      : "border-white/8 bg-white/4 text-slate-200 hover:border-green-400/20 hover:text-green-300"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
