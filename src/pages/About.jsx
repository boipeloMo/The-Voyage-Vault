import React from "react";

export default function About() {
  return (
    <section className="page-shell pt-8">
      <div className="section-card mx-auto max-w-4xl">
        <p className="eyebrow">
          About the project
        </p>
        <h2 className="section-title mt-3">
          The Voyage Vault is built to make travel planning feel inviting, not cluttered.
        </h2>
        <p className="mt-5 text-sm leading-8 text-slate-300 md:text-base">
          Designed by <strong className="text-white">Boipelo Kenya Moabi</strong>, the app brings
          destination discovery and itinerary planning into one interface. The audit uncovered a few
          common early-stage issues, including broken asset references, encoding artifacts, and a
          layout system that needed more structure on mobile and tablet sizes.
        </p>
        <p className="mt-4 text-sm leading-8 text-slate-300 md:text-base">
          The refreshed version focuses on cleaner hierarchy, stronger spacing, deploy-safe assets,
          responsive navigation, and more polished cards and forms so the product feels ready for a
          portfolio review or real users.
        </p>
      </div>
    </section>
  );
}
