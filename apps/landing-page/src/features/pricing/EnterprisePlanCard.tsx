import { CtaButtonLink } from "@/components/link";
import { enterpriseLeadUrl } from "@/constants";
import {
  PerkListItem,
  PricingCardFooter,
  PricingCardRoot,
} from "./components/pricing-card";

export const EnterprisePlanCard = () => (
  <PricingCardRoot className="pt-10 max-w-4xl">
    <div className="flex flex-col md:flex-row gap-10 items-center px-12">
      <div className="flex flex-col gap-3">
        <h2>Enterprise</h2>
        <p>
          Built for Indian enterprises that need private deployment, governed AI
          workflows, security review, and implementation support.
        </p>
      </div>
      <ul className="flex flex-col gap-3 shrink-0">
        <PerkListItem>Custom conversations, seats, and workspaces</PerkListItem>
        <PerkListItem>Contract with SLAs</PerkListItem>
        <PerkListItem>Dedicated implementation and support owner</PerkListItem>
        <PerkListItem>OIDC, SSO path, and granular access review</PerkListItem>
        <PerkListItem>Private deployment planning</PerkListItem>
        <PerkListItem>DPDP-aware workflow design support</PerkListItem>
        <PerkListItem>
          Security questionnaires and architecture review
        </PerkListItem>
        <PerkListItem>Custom connector development (add-on)</PerkListItem>
      </ul>
    </div>
    <PricingCardFooter>
      <CtaButtonLink variant="secondary" size="lg" href={enterpriseLeadUrl}>
        Book enterprise demo
      </CtaButtonLink>
    </PricingCardFooter>
  </PricingCardRoot>
);
