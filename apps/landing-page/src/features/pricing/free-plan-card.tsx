import { chatsLimits } from "@typebot.io/billing/constants";
import { CtaButtonLink } from "@/components/link";
import { launchPilotUrl } from "@/constants";
import {
  PerkListItem,
  PlanNamePill,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const FreePlanCard = ({ children }: { children?: React.ReactNode }) => (
  <PricingCardRoot>
    <PlanNamePill className="bg-stone-950 text-white absolute top-0">
      Launch
    </PlanNamePill>
    <div className="flex flex-col gap-10 items-center">
      <h2>Private demo</h2>
      {children}
    </div>

    <PricingCardFooter>
      <CtaButtonLink href={launchPilotUrl} variant="secondary" size="lg">
        Build a workflow
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);

export const FreePlanPerksList = () => (
  <ul className="flex flex-col gap-3">
    <PerkListItem>Unlimited workflows</PerkListItem>
    <PerkListItem>
      <span>
        <span className="font-bold">
          {new Intl.NumberFormat().format(chatsLimits.FREE)} conversations
        </span>
        /month
      </span>
    </PerkListItem>
    <PerkListItem>Native integrations</PerkListItem>
    <PerkListItem>Webhooks</PerkListItem>
    <PerkListItem>Custom Javascript & CSS</PerkListItem>
    <PerkListItem>Private docs and founder support</PerkListItem>
  </ul>
);
