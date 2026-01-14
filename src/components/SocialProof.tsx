import { content } from "../data/content";

const SocialProof = () => {
  return (
    <section id="social-proof" className="section-light py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <p className="text-small uppercase tracking-[0.2em] text-muted">
              {content.socialProof.eyebrow}
            </p>
            <h2 className="font-display text-headline text-text">
              {content.socialProof.title}
            </h2>
            <p className="text-body text-muted">{content.socialProof.subtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.socialProof.metrics.map((metric) => (
              <div key={metric.label} className="card-muted">
                <p className="text-2xl font-semibold text-text">{metric.value}</p>
                <p className="text-small text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
