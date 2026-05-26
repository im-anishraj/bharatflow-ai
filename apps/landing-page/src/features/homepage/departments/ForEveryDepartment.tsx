import { isDefined, isNotDefined } from "@typebot.io/lib/utils";
import { Button } from "@typebot.io/ui/components/Button";
import { Cancel01Icon } from "@typebot.io/ui/icons/Cancel01Icon";
import { PlusSignIcon } from "@typebot.io/ui/icons/PlusSignIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import { cx } from "@typebot.io/ui/lib/cva";
import { motion } from "motion/react";
import { useState } from "react";
import { MotionCard } from "@/components/motion-wrappers";
import marketingSrc from "./assets/marketing.png";
import productSrc from "./assets/product.png";
import salesSrc from "./assets/sales.png";
import type { DepartmentCardData } from "./types";

const departments = [
  {
    title: "Revenue",
    sub: "Qualify ad, website, and WhatsApp leads before sales calls.",
    bulletPoints: [
      {
        main: "Lead qualification",
        sub: "Ask budget, city, timeline, intent, and product fit before assigning owners.",
      },
      {
        main: "Meeting booking",
        sub: "Route hot prospects to calendars, site visits, demos, or branch teams.",
      },
      {
        main: "CRM-ready data",
        sub: "Push clean fields into sales systems with source and consent context.",
      },
    ],
    image: {
      src: marketingSrc,
      alt: "marketing illustration",
    },
  },
  {
    title: "Customer Experience",
    sub: "Resolve routine questions and route complex issues with context.",
    bulletPoints: [
      {
        main: "Support triage",
        sub: "Capture issue type, order details, priority, and screenshots before handoff.",
      },
      {
        main: "Policy answers",
        sub: "Use controlled AI blocks for focused, business-specific answers.",
      },
      {
        main: "Feedback loops",
        sub: "Collect NPS, CSAT, and reasons in the same channel customers already use.",
      },
    ],
    image: {
      src: productSrc,
      alt: "Product illustration",
    },
  },
  {
    title: "Operations",
    sub: "Automate document intake, onboarding, and internal service requests.",
    bulletPoints: [
      {
        main: "KYC intake",
        sub: "Collect required fields, files, and consent before an operations review.",
      },
      {
        main: "Dealer onboarding",
        sub: "Standardize distributor, vendor, franchise, and partner requests.",
      },
      {
        main: "Employee helpdesk",
        sub: "Route HR, IT, and admin requests through governed self-service flows.",
      },
    ],
    image: {
      src: salesSrc,
      alt: "sales illustration",
    },
  },
] as const satisfies DepartmentCardData[];

export const ForEveryDepartment = () => {
  const [openedDepartmentIndex, setOpenedDepartmentIndex] = useState<number>();
  const [lastOpenedDepartmentIndex, setLastOpenedDepartmentIndex] = useState<
    number | undefined
  >();

  const openedDepartment = isDefined(openedDepartmentIndex)
    ? departments[openedDepartmentIndex]
    : undefined;

  return (
    <>
      <div className="w-full gap-12 flex flex-col max-w-7xl">
        <div className="flex flex-col gap-4">
          <h2>Designed for every department</h2>
          <p className="text-gray-11 font-normal">
            Automate high-volume conversations across the Indian customer and
            operations journey.
          </p>
        </div>
        <div className="flex isolate flex-col gap-4 md:gap-6 md:flex-row">
          {departments.map((department, index) => (
            <DepartmentCard
              key={department.title}
              department={department}
              index={index}
              onClick={() => {
                setOpenedDepartmentIndex(index);
              }}
              openedDepartmentIndex={openedDepartmentIndex}
              lastOpenedDepartmentIndex={lastOpenedDepartmentIndex}
            />
          ))}
        </div>
      </div>
      {openedDepartment && (
        <div className="fixed size-full inset-0 flex justify-center items-center">
          <button
            type="button"
            aria-label="Close department details"
            className="bg-background/80 absolute inset-0 animate-in fade-in duration-350"
            onClick={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
          <OpenedDepartmentCard
            className="absolute"
            department={openedDepartment}
            index={openedDepartmentIndex as number}
            onClose={() => {
              setLastOpenedDepartmentIndex(openedDepartmentIndex);
              setOpenedDepartmentIndex(undefined);
            }}
          />
        </div>
      )}
    </>
  );
};

const DepartmentCard = ({
  department,
  index,
  onClick,
  openedDepartmentIndex,
  lastOpenedDepartmentIndex,
}: {
  department: DepartmentCardData;
  lastOpenedDepartmentIndex: number | undefined;
  index: number;
  onClick: () => void;
  openedDepartmentIndex: number | undefined;
  className?: string;
}) => (
  <MotionCard
    layoutId={`dep-${index}`}
    className={cx(
      "p-2 relative isolate cursor-pointer hover:brightness-110 transition-[filter] duration-350",
      lastOpenedDepartmentIndex === index &&
        isNotDefined(openedDepartmentIndex) &&
        "z-10",
    )}
    onClick={() => {
      if (isDefined(openedDepartmentIndex)) return;
      onClick();
    }}
    role="button"
    tabIndex={0}
    onKeyDown={(event) => {
      if (event.target !== event.currentTarget) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      if (isDefined(openedDepartmentIndex)) return;
      onClick();
    }}
  >
    <motion.figure layoutId={`dep-${index}-img`}>
      <img
        src={department.image.src}
        alt={department.image.alt}
        width="1035px"
        height="495px"
      />
    </motion.figure>
    <div className="flex flex-col px-2 pb-4 gap-3">
      <motion.h2
        layoutId={`dep-${index}-heading`}
        className="text-3xl font-medium"
        layout="position"
      >
        {department.title}
      </motion.h2>
      <motion.p
        layoutId={`dep-${index}-desc`}
        className="pr-10"
        layout="position"
      >
        {department.sub}
      </motion.p>
    </div>
    {openedDepartmentIndex !== index && (
      <Button
        aria-label="Expand department"
        variant="outline"
        size="icon"
        className="rounded-full p-0 w-6 h-6 absolute bottom-4 right-4"
      >
        <PlusSignIcon />
      </Button>
    )}
  </MotionCard>
);

const OpenedDepartmentCard = ({
  department,
  index,
  className,
  onClose,
}: {
  department: DepartmentCardData;
  index: number;
  className?: string;
  onClose: () => void;
}) => (
  <MotionCard
    className={cn("mx-4 p-2 max-w-xl", className)}
    layoutId={`dep-${index}`}
  >
    <div className="gap-4 flex flex-col">
      <Button
        aria-label="Close department"
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 animate-in slide-in-from-bottom-10 fade-in duration-350 delay-500 fill-mode-both"
        onClick={onClose}
      >
        <Cancel01Icon />
      </Button>
      <motion.figure layoutId={`dep-${index}-img`}>
        <img
          src={department.image.src}
          alt={department.image.alt}
          width="1035px"
          height="495px"
        />
      </motion.figure>
      <div className="flex flex-col gap-8 pb-4 px-2">
        <div className="flex flex-col gap-3">
          <motion.h2
            className="text-3xl font-medium"
            layoutId={`dep-${index}-heading`}
            layout="position"
          >
            {department.title}
          </motion.h2>
          <motion.p layoutId={`dep-${index}-desc`} layout="position">
            {department.sub}
          </motion.p>
        </div>
        <ul className="flex flex-col gap-4 pl-4 list-inside list-disc">
          {department.bulletPoints.map((bulletPoint, _index) => (
            <li
              className="text-md"
              key={`${bulletPoint.main}-${bulletPoint.sub}`}
            >
              <span className="font-medium">{bulletPoint.main}:</span>{" "}
              {bulletPoint.sub}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </MotionCard>
);
