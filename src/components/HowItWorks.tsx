import { content } from "../data/content";
import Icon from "./Icon";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-light py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-small uppercase tracking-[0.2em] text-muted">
            {content.howItWorks.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-headline text-text">
            {content.howItWorks.title}
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {content.howItWorks.steps.map((step, index) => (
            <div
              key={step.title}
              className="card group relative min-h-[220px] overflow-hidden p-0 animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/75 via-slate-800/70 to-slate-900/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent opacity-100 transition duration-300 ease-out md:opacity-0 md:group-hover:opacity-100" />
              <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white/90 transition duration-300 ease-out md:opacity-0 md:group-hover:opacity-100">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-md bg-white/10 text-white">
                    <Icon name={step.icon} className="text-2xl leading-none" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    {content.howItWorks.stepLabel} {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
