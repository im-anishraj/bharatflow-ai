import { chatsLimits, seatsLimits } from "@typebot.io/billing/constants";
import { MoreInfoTooltip } from "@typebot.io/ui/components/MoreInfoTooltip";
import { CtaButtonLink } from "@/components/link";
import { growthPilotUrl } from "@/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";
import { chatsTooltip } from "./constants";

export const StarterPlanCard = ({
  children,
}: {
  children?: React.ReactNode;
}) => (
  <PricingCardRoot>
    <PlanNamePill className="bg-orange-400 text-white absolute top-0 flex flex-col">
      Growth
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>
        Rs. 9,999
        <span className="text-lg">/month</span>
      </h2>
      {children}
    </div>
    <PricingCardFooter>
      <CtaButtonLink variant="secondary" size="lg" href={growthPilotUrl}>
        Start growth pilot
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);

export const StarterPlanPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>All Launch features and...</PerkListItem>
    <PerkListItem>
      <span>
        <span className="font-bold">{seatsLimits.STARTER} seats</span> included
      </span>
    </PerkListItem>
    <PerkListItem>
      <div className="flex flex-col gap-1">
        <span className="inline-flex">
          <span className="font-bold">
            {new Intl.NumberFormat().format(chatsLimits.STARTER)} conversations
          </span>
          /month
          <MoreInfoTooltip>{chatsTooltip}</MoreInfoTooltip>
        </span>
        <span className="text-xs text-muted-foreground">
          Extra conversations: Rs. 750 per 500
        </span>
      </div>
    </PerkListItem>
    <PerkListItem>India workflow templates</PerkListItem>
    <PerkListItem>Branding removed</PerkListItem>
    <PerkListItem>Collect files and consent</PerkListItem>
    <PerkListItem>Create folders</PerkListItem>
    <PerkListItem>Founder-led onboarding</PerkListItem>
  </ul>
);
