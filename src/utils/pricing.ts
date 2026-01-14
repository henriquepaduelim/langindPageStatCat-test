import { content } from "../data/content";

export type BillingCycle = "monthly" | "annual";

export type PricingTier = {
  min: number;
  max: number | null;
  rate: number;
};

export type PricingResult = {
  perAthleteRate: number | null;
  estimatedTotal: number | null;
  contactOnly: boolean;
};

const getTierRate = (athleteCount: number, tiers: PricingTier[]) => {
  const count = Math.max(1, athleteCount);
  const match = tiers.find((tier) => {
    const withinMin = count >= tier.min;
    const withinMax = tier.max === null || count <= tier.max;
    return withinMin && withinMax;
  });

  return match ? match.rate : tiers[tiers.length - 1]?.rate ?? 0;
};

export const calculatePricing = (
  athleteCount: number,
  billingCycle: BillingCycle,
  tiers: PricingTier[] = content.pricing.tiers,
  monthlyRate: number = content.pricing.monthlyRate,
  contactThreshold: number = content.pricing.contactThreshold
): PricingResult => {
  const count = Math.max(1, athleteCount);
  const contactOnly = count > contactThreshold;

  if (contactOnly) {
    return {
      perAthleteRate: null,
      estimatedTotal: null,
      contactOnly: true,
    };
  }

  const baseRate =
    billingCycle === "monthly" ? monthlyRate : getTierRate(count, tiers);
  const multiplier = billingCycle === "annual" ? 12 : 1;

  return {
    perAthleteRate: baseRate,
    estimatedTotal: baseRate * count * multiplier,
    contactOnly: false,
  };
};
