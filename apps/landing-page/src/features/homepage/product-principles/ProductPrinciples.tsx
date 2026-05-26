import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { useId, useState } from "react";
import threeDButton from "./assets/3d-button.png";

const data = [
  {
    title: "Visual workflows, not black boxes",
    content:
      "BharatFlow AI keeps business logic visible. Teams can inspect every question, condition, handoff, integration, and AI step before a workflow goes live.",
  },
  {
    title: "WhatsApp-first, web-ready",
    content:
      "The same journey can run on WhatsApp, websites, custom domains, embeds, and APIs, so Indian teams can meet customers where they already prefer to talk.",
  },
  {
    title: "Controlled AI inside real processes",
    content:
      "AI is used where it improves speed and quality, while deterministic steps, consent prompts, routing, and human handoff keep the experience accountable.",
  },
  {
    title: "Built for enterprise adoption",
    content:
      "Encrypted credentials, OIDC-friendly auth, APIs, webhooks, self-hosting foundations, and reviewable workflows make the platform practical for IT and operations leaders.",
  },
  {
    title: "India-specific playbooks",
    content:
      "Templates focus on Indian business motion: lead qualification, site visits, admissions, support triage, dealer onboarding, document intake, feedback, and payment collection.",
  },
];

export const ProductPrinciples = () => {
  const [openedIndex, setOpenedIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    if (openedIndex === index) return;
    setOpenedIndex(index);
  };

  return (
    <div className="flex flex-col gap-8 max-w-7xl w-full">
      <h2>Principles for serious automation</h2>
      <div className="flex md:bg-white rounded-2xl gap-4 p-2 items-start border">
        <div className="flex flex-col gap-2 md:gap-0 md:pl-4 w-full">
          {data.map(({ title, content }, index) => (
            <Principle
              key={title}
              title={title}
              content={content}
              isOpened={index === openedIndex}
              isLastItem={index === data.length - 1}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
        <img
          src={threeDButton}
          alt="A three dimensional product illustration"
          className="max-w-lg md:block hidden"
        />
      </div>
    </div>
  );
};

const Principle = ({
  title,
  content,
  isOpened,
  isLastItem,
  onClick,
}: {
  title: string;
  content: string;
  isOpened: boolean;
  isLastItem: boolean;
  onClick: () => void;
}) => {
  const contentId = useId();

  return (
    <div className="rounded-xl md:rounded-none md:px-0 bg-white border md:border-0 border-border">
      <button
        type="button"
        className="w-full px-4 py-4 font-display font-medium text-2xl flex flex-col items-stretch gap-3 text-left cursor-pointer"
        aria-expanded={isOpened}
        aria-controls={contentId}
        onClick={onClick}
      >
        <span className="flex justify-between">
          {title}
          <span
            className={cn(
              buttonVariants({ variant: "secondary", size: "icon" }),
              "shrink-0 [&_svg]:size-6",
            )}
          >
            {isOpened ? (
              <ArrowUp01Icon className="size-8" />
            ) : (
              <ArrowDown01Icon />
            )}
          </span>
        </span>
      </button>
      {isLastItem ? null : <hr className="hidden md:block mx-4" />}
      <motion.div
        id={contentId}
        className="overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpened ? "auto" : 0,
          opacity: isOpened ? 1 : 0,
        }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
      >
        <hr className="mb-4 md:hidden mx-4 border-border" />
        <p className="py-4 mx-4">{content}</p>
      </motion.div>
    </div>
  );
};
