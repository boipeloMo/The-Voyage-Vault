import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/destinations", label: "Destinations" },
  { to: "/itinerary", label: "Planner" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const getNavClass = ({ isActive }) =>
  [
    "inline-flex min-h-11 items-center rounded-full px-4 py-2 text-sm font-medium transition duration-200",
    isActive
      ? "bg-white text-slate-950 shadow-lg shadow-sky-500/10"
      : "text-slate-200 hover:bg-white/10 hover:text-white",
  ].join(" ");

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-[1.5rem] border border-white/10 bg-slate-900/75 px-4 py-3 shadow-2xl shadow-slate-950/40 backdrop-blur md:px-5 lg:px-6">
        <NavLink to="/" className="min-w-0 flex-1 max-w-[14rem] md:max-w-none" onClick={() => setMenuOpen(false)}>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-sky-300 md:text-xs md:tracking-[0.3em]">
            Travel Planner
          </p>
          <h1 className="truncate text-base font-semibold text-white md:text-xl">
            The Voyage Vault
          </h1>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={getNavClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-[1.5rem] border border-white/10 bg-slate-900/95 p-3 shadow-xl shadow-slate-950/40 backdrop-blur md:hidden">
          <nav id="mobile-navigation" className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    getNavClass({ isActive }),
                    "w-full justify-center",
                  ].join(" ")
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
