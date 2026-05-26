import { buttonVariants } from "@typebot.io/ui/components/Button";
import { ArrowDown01Icon } from "@typebot.io/ui/icons/ArrowDown01Icon";
import { ArrowUp01Icon } from "@typebot.io/ui/icons/ArrowUp01Icon";
import { cn } from "@typebot.io/ui/lib/cn";
import { motion } from "motion/react";
import { type ReactNode, useState } from "react";

const data = [
  {
    title: "What is considered a monthly conversation?",
    content: (
      <>
        A conversation is counted whenever a user starts a workflow. It is
        independent of the number of messages sent and received inside that
        session. If the user returns later and the session is remembered, it is
        not counted again. <br />
        <br />
        An easy way to think about it: one conversation equals one row in the
        Results table.
      </>
    ),
  },
  {
    title: "What happens once I reach the included conversation limit?",
    content: (
      <>
        Your workflows keep running.
        <br />
        <br />
        You will first receive a heads up email when you reach 80% of your
        included limit. Once you have reached 100%, you will receive another
        email notification.
        <br />
        <br />
        After that, your conversation limit can move to the next prototype tier
        or a custom enterprise limit.
      </>
    ),
  },
  {
    title: "Can I cancel or change my subscription any time?",
    content: (
      <>
        Yes, you can cancel, upgrade or downgrade your subscription at any time.
        There is no minimum time commitment or lock-in.
        <br />
        <br />
        When you upgrade or downgrade your subscription, you'll get access to
        the new options right away. Your next invoice will have a prorated
        amount.
      </>
    ),
  },
  {
    title: "Do you offer annual payments?",
    content: (
      <>
        The prototype tiers are shown monthly because usage, WhatsApp volume, AI
        credits, and implementation scope can change during controlled pilots.
      </>
    ),
  },
];

export const Faq = () => {
  return (
    <div className="flex flex-col gap-8 max-w-4xl w-full">
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
      className="p-4 rounded-xl bg-white border border-border cursor-pointer"
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
