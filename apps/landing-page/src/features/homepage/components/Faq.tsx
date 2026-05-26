import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";
import { TextLink } from "@/components/link";
import { docsUrl } from "../../../constants";

const data = [
  {
    title: "What is BharatFlow AI built for?",
    content: (
      <>
        BharatFlow AI is built for Indian teams that need governed workflows on
        WhatsApp, web, and APIs. Typical use cases include lead qualification,
        appointment booking, document intake, support triage, dealer onboarding,
        admissions counselling, payment collection, and feedback.
      </>
    ),
  },
  {
    title: "How does it integrate with existing systems?",
    content: (
      <>
        Workflows can connect through webhooks, HTTP requests, embedded web
        widgets, custom domains, Google Sheets, email, AI providers, support
        tools, and APIs. India-native CRM, payments, and telephony connectors
        are planned as Forge blocks.
      </>
    ),
  },
  {
    title: "Is this a general-purpose AI assistant on WhatsApp?",
    content: (
      <>
        No. BharatFlow AI is positioned around business-specific workflows. AI
        is used as a controlled step inside journeys, while routing, consent,
        qualification, handoff, and integrations remain explicit.
      </>
    ),
  },
  {
    title: "What support is available in the public prototype?",
    content: (
      <>
        The public prototype is supported directly by the maintainer and
        community:
        <ol className="list-decimal list-inside flex flex-col gap-6 py-6">
          <li>
            <TextLink href={docsUrl} target="_blank">
              Public documentation
            </TextLink>
            : setup guides, workflow patterns, and operational notes.
          </li>
          <li>
            <span className="font-bold">GitHub issues and discussions</span>:
            bugs, roadmap requests, and contribution ideas are managed in the
            public repository.
          </li>
          <li>
            <span className="font-bold">Enterprise demos</span>: customer-facing
            pilots should use approved demo data only.
          </li>
        </ol>
      </>
    ),
  },
  {
    title: "How should teams handle data privacy?",
    content: (
      <p>
        The MVP includes DPDP-aware workflow guidance, not a complete compliance
        product. Teams should collect only necessary data, explain purpose,
        capture consent for follow-up or document workflows, and avoid sending
        personal data to AI providers without approval.
        <br />
        <br />
        For more detail, review the{" "}
        <TextLink to="/$slug" params={{ slug: "privacy-policy" }}>
          privacy policy draft
        </TextLink>
      </p>
    ),
  },
];

export const Faq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <h2>FAQ</h2>
      <div className="flex flex-col gap-2">
        {data.map(({ title, content }) => (
          <Question key={title} title={title}>
            {content}
          </Question>
        ))}
      </div>
    </div>
  );
};

const Question = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <details
      className="p-4 rounded-xl bg-card text-card-foreground cursor-pointer"
      onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
    >
      <summary className="font-display font-medium text-2xl flex justify-between list-none md:gap-12">
        {title}
        <span
          className={cn(
            buttonVariants({ variant: "secondary", size: "icon" }),
            "shrink-0 [&_svg]:size-6",
          )}
        >
          {isOpen ? <ArrowUp01Icon className="size-8" /> : <ArrowDown01Icon />}
        </span>
      </summary>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="my-4" />
        {children}
      </motion.div>
    </details>
  );
};
