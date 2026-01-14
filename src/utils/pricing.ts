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

export type PricingTierSummary = {
  tier: PricingTier | null;
  tierIndex: number;
  totalTiers: number;
  baseRate: number;
  rate: number;
  savingsAnnual: number;
};

const sortTiers = (tiers: PricingTier[]) =>
  [...tiers].sort((a, b) => a.min - b.min);

const getTierForCount = (athleteCount: number, tiers: PricingTier[]) => {
  const sorted = sortTiers(tiers);
  const count = Math.max(1, athleteCount);
  const match = sorted.find((tier) => {
    const withinMin = count >= tier.min;
    const withinMax = tier.max === null || count <= tier.max;
    return withinMin && withinMax;
  });

  return match ?? sorted[sorted.length - 1] ?? null;
};

const getTierRate = (athleteCount: number, tiers: PricingTier[]) => {
  const count = Math.max(1, athleteCount);
  const match = getTierForCount(count, tiers);

  return match ? match.rate : tiers[tiers.length - 1]?.rate ?? 0;
};

export const getPricingTierSummary = (
  athleteCount: number,
  tiers: PricingTier[] = content.pricing.tiers
): PricingTierSummary => {
  const sorted = sortTiers(tiers);
  const count = Math.max(1, athleteCount);
  const tier = getTierForCount(count, sorted);
  const baseRate = sorted[0]?.rate ?? 0;
  const rate = tier?.rate ?? baseRate;
  const tierIndex = tier ? sorted.findIndex((item) => item === tier) + 1 : 1;
  const savingsAnnual = Math.max(0, (baseRate - rate) * count * 12);

  return {
    tier,
    tierIndex,
    totalTiers: sorted.length,
    baseRate,
    rate,
    savingsAnnual,
  };
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
