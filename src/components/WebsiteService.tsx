import { content } from "../data/content";

const WebsiteService = () => {
  const { websiteService } = content;

  return (
    <section id="website-service" className="section-light py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="card flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-small uppercase tracking-[0.2em] text-muted">
              {websiteService.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-headline text-text">
              {websiteService.title}
            </h2>
            <p className="mt-3 text-body text-muted">
              {websiteService.description}
            </p>
            <ul className="mt-4 space-y-2 text-small text-muted">
              {websiteService.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#cta" className="btn-outline">
              {websiteService.ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteService;
