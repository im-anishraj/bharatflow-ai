import { TextLink } from "@/components/link";
import { TypebotLogoFull } from "@/components/TypebotLogo";
import {
  contactUrl,
  discordUrl,
  docsUrl,
  founderGithubUrl,
  founderLinkedInUrl,
  githubRepoUrl,
} from "../../constants";
import gradientSeparatorSrc from "./assets/gradient-separator.png";

const data = [
  {
    title: "Product",
    links: [
      {
        label: "Docs",
        href: docsUrl,
      },
      {
        label: "Pricing",
        to: "/pricing",
      },
    ],
  },
  {
    title: "Governance",
    links: [
      {
        label: "Contact",
        href: discordUrl,
      },
      {
        label: "Templates",
        to: "/templates",
      },
      {
        label: "GitHub",
        href: githubRepoUrl,
      },
    ],
  },
  {
    title: "Founder",
    links: [
      {
        label: "Anish Raj",
        href: founderGithubUrl,
      },
      {
        label: "LinkedIn",
        href: founderLinkedInUrl,
      },
      {
        label: "Email",
        href: contactUrl,
      },
    ],
  },
  {
    title: "Solutions",
    links: [
      {
        label: "Lead Qualification",
        to: "/templates/$slug",
        params: {
          slug: "click-to-whatsapp-lead-qualifier",
        },
      },
      {
        label: "Support Triage",
        to: "/templates/$slug",
        params: {
          slug: "support-ticket-triage",
        },
      },
      {
        label: "KYC Intake",
        to: "/templates/$slug",
        params: {
          slug: "vendor-customer-kyc-intake",
        },
      },
      {
        label: "Site Visit Booking",
        to: "/templates/$slug",
        params: {
          slug: "real-estate-site-visit-booking",
        },
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        label: "About",
        to: "/about",
      },
      {
        label: "Terms of Service",
        to: "/$slug",
        params: {
          slug: "terms-of-service",
        },
      },
      {
        label: "Privacy Policy",
        to: "/$slug",
        params: {
          slug: "privacy-policy",
        },
      },
      {
        label: "Business Continuity",
        to: "/$slug",
        params: {
          slug: "business-continuity",
        },
      },
    ],
  },
] as const;

export const Footer = () => {
  return (
    <footer className="dark flex flex-col pb-12">
      <img src={gradientSeparatorSrc} alt="separator" className="w-full h-2" />
      <div className="flex flex-col max-w-7xl mx-auto px-6 md:px-4 w-full">
        <div className="flex flex-col md:flex-row gap-12 py-12 items-start">
          <TypebotLogoFull className="mt-1" />
          <div className="flex flex-col md:flex-row gap-8 md:justify-around w-full">
            {data.map((item) => (
              <div className="flex flex-col gap-3" key={item.title}>
                <h3 className="text-2xl">{item.title}</h3>
                <ul className="flex flex-col gap-1">
                  {item.links.map((link) => (
                    <li key={link.label}>
                      <TextLink
                        href={"href" in link ? link.href : undefined}
                        to={"to" in link ? link.to : undefined}
                        params={"params" in link ? link.params : undefined}
                        target={"href" in link ? "_blank" : undefined}
                        className="text-muted-foreground font-normal"
                        size="sm"
                      >
                        {link.label}
                      </TextLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <p className="text-foreground/70 text-sm">
          Open-development prototype - BharatFlow AI
        </p>
      </div>
    </footer>
  );
};
