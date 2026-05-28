import { cn } from "@typebot.io/ui/lib/cn";
import { cx } from "@typebot.io/ui/lib/cva";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { CtaButtonLink } from "@/components/link";
import { Progress } from "@/components/Progress";
import { TypebotLogoFull } from "@/components/TypebotLogo";
import { registerUrl } from "@/constants";
import marketingBotSrc from "./assets/marketing-bot.png";
import marketingBuilderSrc from "./assets/marketing-builder.png";
import salesBotSrc from "./assets/sales-bot.png";
import salesBuilderSrc from "./assets/sales-builder.png";
import supportAndProductBotSrc from "./assets/support-bot.png";
import supportAndProductBuilderSrc from "./assets/support-builder.png";

const useCases = [
  {
    label: "Revenue",
    description: "Qualify WhatsApp leads, score intent, and route clean deals.",
    eyebrow: "Lead-to-revenue command flow",
    outcome:
      "Every high-intent WhatsApp lead lands in sales with owner, score, and context.",
    metrics: [
      { value: "38%", label: "more qualified demos" },
      { value: "7 min", label: "median first response" },
      { value: "92%", label: "consent captured" },
    ],
    tags: ["Lead scoring", "CRM sync", "Callback booking"],
    images: {
      builder: {
        src: marketingBuilderSrc,
        alt: "An example of a revenue lead qualification workflow being built in BharatFlow AI",
      },
      bot: {
        src: marketingBotSrc,
        alt: "A WhatsApp screenshot of a lead qualification workflow",
      },
    },
  },
  {
    label: "Customer Experience",
    description: "Triage issues, collect proof, and keep SLA handoffs visible.",
    eyebrow: "Support intake and SLA routing",
    outcome:
      "Customers get structured help while teams receive complete tickets, not loose chats.",
    metrics: [
      { value: "24/7", label: "guided support" },
      { value: "4h", label: "priority SLA path" },
      { value: "1 tap", label: "proof upload" },
    ],
    tags: ["Issue triage", "File proof", "Agent handoff"],
    images: {
      builder: {
        src: supportAndProductBuilderSrc,
        alt: "An example of a support workflow being built in BharatFlow AI",
      },
      bot: {
        src: supportAndProductBotSrc,
        alt: "A web widget screenshot of a support workflow",
      },
    },
  },
  {
    label: "Operations",
    description: "Collect KYC, documents, and approvals without inbox chaos.",
    eyebrow: "Vendor and KYC onboarding",
    outcome:
      "Operations teams collect documents, verify fields, and move approvals from one governed flow.",
    metrics: [
      { value: "64%", label: "faster document cycle" },
      { value: "0", label: "missing purpose fields" },
      { value: "84", label: "vendors this month" },
    ],
    tags: ["KYC intake", "Approval queue", "Audit notes"],
    images: {
      builder: {
        src: salesBuilderSrc,
        alt: "An example of a vendor onboarding workflow being built in BharatFlow AI",
      },
      bot: {
        src: salesBotSrc,
        alt: "A WhatsApp screenshot of an automated vendor onboarding workflow",
      },
    },
  },
] as const;

export const UseCases = ({ className }: { className?: string }) => {
  const [isAutoProgressEnabled, setIsAutoProgressEnabled] = useState(true);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [currentUseCase, setCurrentUseCase] = useState<{
    index: number;
    value: number;
  }>({
    index: 0,
    value: 0,
  });
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  useEffect(() => {
    if (intervalRef.current || !isInView || !isAutoProgressEnabled) return;
    intervalRef.current = setInterval(() => {
      setCurrentUseCase((prev) => {
        setPreviousIndex(prev.index);
        if (prev.value < 100) {
          return { ...prev, value: prev.value + 1 };
        }
        return {
          index: prev.index === useCases.length - 1 ? 0 : prev.index + 1,
          value: 0,
        };
      });
    }, 100);

    return () => {
      if (!intervalRef.current) return;
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [isAutoProgressEnabled, isInView]);

  const selectUseCase = (index: number) => {
    setPreviousIndex(currentUseCase.index);
    setCurrentUseCase({ index, value: 0 });
    setIsAutoProgressEnabled(false);
    if (!intervalRef.current) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const getProgressValue = (index: number) => {
    if (isAutoProgressEnabled) {
      if (currentUseCase.index === index) return currentUseCase.value;
      return;
    }
    if (currentUseCase.index === index) return 100;
    return;
  };

  const activeUseCase = useCases[currentUseCase.index];

  return (
    <div
      className={cn("flex flex-col gap-16 md:gap-20 px-4 md:pt-10", className)}
      ref={containerRef}
    >
      <div className="flex flex-col items-center gap-20">
        <TypebotLogoFull width="120px" />
        <Cta />
      </div>
      <div className="flex flex-col items-center gap-6 md:gap-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex max-w-full items-end gap-4 overflow-x-auto px-2 md:gap-12">
            {useCases.map((useCase, index) => (
              <UsecaseTitle
                isSelected={currentUseCase.index === index}
                progressValue={getProgressValue(index)}
                onClick={() => selectUseCase(index)}
                key={useCase.label}
              >
                {useCase.label}
              </UsecaseTitle>
            ))}
          </div>
          <p className="min-h-6 max-w-xl text-center text-sm text-muted-foreground md:text-base">
            {activeUseCase.description}
          </p>
          <InsightStrip
            metrics={activeUseCase.metrics}
            tags={activeUseCase.tags}
          />
        </div>
        <div className="relative isolate w-[94%] max-w-6xl md:w-[86%]">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentUseCase.index}
              initial={{
                opacity: 0,
                x: previousIndex > currentUseCase.index ? -40 : 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.25,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                x: previousIndex > currentUseCase.index ? 40 : -40,
                transition: {
                  duration: 0.15,
                  ease: "easeIn",
                },
              }}
              className="relative"
            >
              <DemoStage
                activeUseCase={activeUseCase}
                builderImage={activeUseCase.images.builder}
                botImage={activeUseCase.images.bot}
              />
            </motion.div>
          </AnimatePresence>
          <PreloadUseCaseImages />
        </div>
      </div>
    </div>
  );
};

const InsightStrip = ({
  metrics,
  tags,
}: {
  metrics: readonly { value: string; label: string }[];
  tags: readonly string[];
}) => (
  <div className="flex max-w-4xl flex-col items-center gap-3">
    <div className="grid grid-cols-3 gap-2">
      {metrics.map((metric) => (
        <div
          className="rounded-lg border border-white/50 bg-white/55 px-3 py-2 text-center shadow-sm backdrop-blur"
          key={`${metric.value}-${metric.label}`}
        >
          <p className="text-sm font-semibold leading-none text-gray-12 md:text-base">
            {metric.value}
          </p>
          <p className="mt-1 text-[11px] leading-tight text-gray-10 md:text-xs">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
    <div className="hidden flex-wrap justify-center gap-2 md:flex">
      {tags.map((tag) => (
        <span
          className="rounded-full border border-orange-6/50 bg-orange-2/70 px-3 py-1 text-xs font-medium text-orange-11 shadow-sm"
          key={tag}
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const DemoStage = ({
  activeUseCase,
  builderImage,
  botImage,
}: {
  activeUseCase: (typeof useCases)[number];
  builderImage: { src: string; alt: string };
  botImage: { src: string; alt: string };
}) => (
  <div className="relative rounded-2xl border border-white/50 bg-white/35 p-2 shadow-[0_18px_54px_rgba(15,23,42,0.16)] backdrop-blur md:rounded-3xl md:p-3">
    <div className="mb-2 flex items-center justify-between gap-4 px-1 md:mb-4 md:px-2">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-orange-10 md:text-sm">
          {activeUseCase.eyebrow}
        </p>
        <p className="hidden max-w-2xl text-sm text-gray-11 md:block">
          {activeUseCase.outcome}
        </p>
      </div>
      <div className="hidden items-center gap-2 rounded-full border border-gray-5 bg-white/75 px-3 py-2 text-xs font-medium text-gray-11 shadow-sm md:flex">
        <span className="size-2 rounded-full bg-green-9" />
        WhatsApp + web + API
      </div>
    </div>
    <figure className="overflow-hidden rounded-xl border-2 border-gray-12 bg-white shadow-xl outline-4 outline-gray-12 -outline-offset-[5px] outline-solid md:rounded-2xl md:outline-6 md:-outline-offset-8 md:mr-20">
      <img
        src={builderImage.src}
        alt={builderImage.alt}
        className="w-full"
        width="2400px"
        height="1500px"
      />
    </figure>
    <figure className="absolute -right-2 -bottom-6 w-[28%] max-w-28 overflow-hidden rounded-2xl border border-gray-4 bg-white shadow-[0_18px_44px_rgba(15,23,42,0.28)] outline-4 outline-gray-12 -outline-offset-[5px] outline-solid md:right-2 md:-bottom-8 md:w-[18%] md:max-w-60 md:rounded-3xl md:border-2 md:outline-6 md:-outline-offset-8">
      <img
        src={botImage.src}
        alt={botImage.alt}
        className="w-full p-1 md:p-2"
        width="900px"
        height="1800px"
      />
    </figure>
    <div className="absolute -left-2 bottom-3 hidden max-w-60 rounded-xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur md:block">
      <p className="text-xs font-semibold text-gray-12">Live pilot signal</p>
      <p className="mt-1 text-xs leading-relaxed text-gray-10">
        Sales, support, and ops teams see structured outcomes instead of loose
        chat history.
      </p>
    </div>
  </div>
);

const UsecaseTitle = ({
  children,
  isSelected,
  progressValue,
  onClick,
}: {
  children: React.ReactNode;
  isSelected: boolean;
  progressValue?: number;
  onClick?: () => void;
}) => (
  <button
    type="button"
    aria-pressed={isSelected}
    className="flex shrink-0 cursor-pointer flex-col items-center gap-2 rounded-md px-1 py-1 outline-hidden focus-visible:ring-2 focus-visible:ring-orange-8 hover:[&_h3]:opacity-100"
    onClick={onClick}
  >
    <h3
      className={cx(
        "text-center text-lg font-medium transition-opacity duration-200 ease-out",
        isSelected ? "opacity-100" : "opacity-55",
      )}
    >
      {children}
    </h3>
    <Progress value={progressValue ?? 0} className="w-12 rounded-full" />
  </button>
);

export const Cta = () => (
  <div className="flex flex-col gap-6 items-center">
    <p className="text-balance max-w-4xl md:text-center text-lg">
      Picture{" "}
      <span className="font-medium">
        a workflow that goes beyond answering questions
      </span>
      : it qualifies leads, captures consent, collects documents, routes
      requests, books meetings, and updates your CRM without forcing customers
      away from WhatsApp. For Indian teams,{" "}
      <span className="font-medium">
        the fastest path to automation is where customers already talk
      </span>
      .
    </p>
    <div className="w-full md:w-auto flex flex-col md:flex-row gap-4">
      <CtaButtonLink size="lg" href={registerUrl}>
        Request pilot access
      </CtaButtonLink>
    </div>
  </div>
);

const PreloadUseCaseImages = () => (
  <>
    {useCases.map((useCase) => (
      <div key={useCase.label} className="sr-only" aria-hidden="true">
        <img src={useCase.images.builder.src} alt="" />
        <img src={useCase.images.bot.src} alt="" />
      </div>
    ))}
  </>
);
