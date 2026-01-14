import type { MouseEvent } from "react";
import { content } from "../data/content";
import Icon from "./Icon";
import { smoothScrollToId } from "../utils/smoothScroll";

const Hero = () => {
  const handleScroll = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    smoothScrollToId(id, 136);
  };

  return (
    <section id="hero" className="section-dark relative overflow-hidden">
      <div className="mx-auto grid max-w-content gap-16 px-4 py-hero sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-8">
        <div className="space-y-6 animate-fade-up">
          <h1 className="font-display text-display text-text">
            {content.hero.headline}
          </h1>
          <p className="max-w-2xl text-body text-muted">{content.hero.subheadline}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#cta" onClick={handleScroll("cta")} className="btn-primary">
              {content.hero.primaryCta}
            </a>
            <a
              href="#how-it-works"
              onClick={handleScroll("how-it-works")}
              className="btn-outline"
            >
              {content.hero.secondaryCta}
            </a>
          </div>
          <ul className="grid gap-3 text-small text-muted sm:grid-cols-2">
            {content.hero.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Icon name="check_circle" className="mt-0.5 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-fade-in lg:-mr-8">
          <div className="relative overflow-hidden rounded-[28px] bg-surface shadow-strong">
            <div className="aspect-[16/10] w-full">
              <img
                className="h-full w-full object-cover"
                src={content.hero.preview.video.src}
                alt={content.hero.preview.video.label}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
