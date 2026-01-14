import { useMemo, useState } from "react";
import { content } from "../data/content";
import { formatCAD } from "../utils/money";
import { calculatePricing } from "../utils/pricing";

const Pricing = () => {
  const { pricing } = content;
  const [athleteCount, setAthleteCount] = useState(pricing.defaultAthletes);

  const pricingResult = useMemo(
    () =>
      calculatePricing(
        athleteCount,
        "annual",
        pricing.tiers,
        pricing.monthlyRate,
        pricing.contactThreshold
      ),
    [athleteCount, pricing.contactThreshold, pricing.monthlyRate, pricing.tiers]
  );

  const clampAthletes = (value: number) =>
    Math.min(pricing.maxAthletes, Math.max(pricing.minAthletes, value));

  const handleAthleteChange = (value: number) => {
    setAthleteCount(clampAthletes(value));
  };

  const isContactOnly = pricingResult.contactOnly;

  return (
    <section id="pricing" className="section-light py-section">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-small uppercase tracking-[0.2em] text-muted">
            {pricing.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-headline text-text">
            {pricing.title}
          </h2>
          <p className="mt-4 text-body text-muted">{pricing.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-small uppercase tracking-[0.2em] text-muted">
                  {pricing.calculator.label}
                </p>
                <h3 className="mt-2 text-title font-semibold text-text">
                  {pricing.calculator.heading}
                </h3>
              </div>
              <div className="rounded-pill border border-border bg-bg px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
                {pricing.calculator.contractBadge}
              </div>
            </div>

            <div className="mt-8 space-y-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-small text-muted">
                    {pricing.calculator.athleteCountLabel}
                  </p>
                  <p className="text-3xl font-semibold text-text">
                    {athleteCount}
                  </p>
                </div>
                <div className="w-28">
                  <label className="text-small text-muted" htmlFor="athleteCount">
                    {pricing.calculator.athleteInputLabel}
                  </label>
                  <input
                    id="athleteCount"
                    type="number"
                    min={pricing.minAthletes}
                    max={pricing.maxAthletes}
                    value={athleteCount}
                    onChange={(event) =>
                      handleAthleteChange(Number(event.target.value))
                    }
                    className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <input
                type="range"
                min={pricing.minAthletes}
                max={pricing.maxAthletes}
                value={athleteCount}
                onChange={(event) =>
                  handleAthleteChange(Number(event.target.value))
                }
                className="w-full accent-[rgb(var(--color-primary))]"
                aria-label={pricing.calculator.athleteRangeLabel}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-bg p-4">
                  <p className="text-small text-muted">
                    {pricing.calculator.perAthleteLabel}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-text">
                    {isContactOnly
                      ? pricing.calculator.contactLabel
                      : formatCAD(pricingResult.perAthleteRate ?? 0, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {isContactOnly
                      ? pricing.calculator.contactNote
                      : pricing.calculator.annualNote}
                  </p>
                </div>
                <div className="rounded-lg border border-border bg-bg p-4">
                  <p className="text-small text-muted">
                    {pricing.calculator.estimatedTotalLabel}
                    {pricing.calculator.estimatedAnnualSuffix}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-text">
                    {isContactOnly
                      ? pricing.calculator.contactLabel
                      : formatCAD(pricingResult.estimatedTotal ?? 0, {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                  </p>
                  <p className="mt-1 text-xs text-muted">
                    {isContactOnly ? pricing.calculator.contactNote : pricing.volumeNote}
                  </p>
                </div>
              </div>

              <p className="text-xs text-muted">{pricing.disclaimer}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <p className="text-small uppercase tracking-[0.2em] text-muted">
                {pricing.setupFee.eyebrow}
              </p>
              <h3 className="mt-3 text-title font-semibold text-text">
                {pricing.setupFee.label}
              </h3>
              <p className="mt-2 text-2xl font-semibold text-text">
                {formatCAD(pricing.setupFee.amount, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
              <p className="mt-2 text-small text-muted">
                {pricing.setupFee.description}
              </p>
            </div>

            <div className="card">
              <p className="text-small uppercase tracking-[0.2em] text-muted">
                {pricing.addonsLabel}
              </p>
              <ul className="mt-4 space-y-2 text-small text-muted">
                {pricing.addons.map((addon) => (
                  <li key={addon} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                    <span>{addon}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
