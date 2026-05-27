import type { Template } from "@typebot.io/templates";
import { Book02Icon } from "@typebot.io/ui/icons/Book02Icon";
import { Calendar01Icon } from "@typebot.io/ui/icons/Calendar01Icon";
import { CreditCardIcon } from "@typebot.io/ui/icons/CreditCardIcon";
import { CustomerSupportIcon } from "@typebot.io/ui/icons/CustomerSupportIcon";
import { FileEmpty02Icon } from "@typebot.io/ui/icons/FileEmpty02Icon";
import { Megaphone03Icon } from "@typebot.io/ui/icons/Megaphone03Icon";
import { StarIcon } from "@typebot.io/ui/icons/StarIcon";
import { UsersIcon } from "@typebot.io/ui/icons/UsersIcon";
import { Wallet01Icon } from "@typebot.io/ui/icons/Wallet01Icon";
import { cn } from "@typebot.io/ui/lib/cn";

type Props = {
  className?: string;
  template: Template;
};

export const TemplateIcon = ({ className, template }: Props) => {
  const Icon = getIcon(template.slug);
  const palette = getPalette(template.slug);

  return (
    <div
      className={cn(
        "relative h-28 overflow-hidden rounded-xl border p-4",
        palette.surface,
        className,
      )}
    >
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_0)] [background-size:18px_18px]" />
      <div
        className={cn(
          "absolute -right-8 -top-10 size-28 rounded-full blur-2xl",
          palette.glow,
        )}
      />
      <div
        className={cn(
          "absolute -bottom-10 left-10 size-24 rounded-full blur-2xl",
          palette.secondaryGlow,
        )}
      />
      <div className="relative flex h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={cn("size-2 rounded-full", palette.node)} />
          <span className={cn("h-px w-10", palette.line)} />
          <span className={cn("size-2 rounded-full", palette.node)} />
          <span className={cn("h-px w-6", palette.line)} />
          <span className={cn("size-2 rounded-full", palette.node)} />
        </div>
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "flex size-14 items-center justify-center rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.18)]",
              palette.icon,
            )}
          >
            <Icon className="size-7 text-white" />
          </div>
          <div
            className={cn(
              "rounded-full border px-2 py-1 text-xs font-bold tracking-[0.08em]",
              palette.monogram,
            )}
          >
            {template.emoji}
          </div>
        </div>
      </div>
    </div>
  );
};

const getIcon = (slug: string) => {
  switch (slug) {
    case "click-to-whatsapp-lead-qualifier":
      return Megaphone03Icon;
    case "real-estate-site-visit-booking":
      return Calendar01Icon;
    case "loan-insurance-pre-qualification":
      return Wallet01Icon;
    case "admissions-counselling":
      return Book02Icon;
    case "healthcare-appointment-triage":
      return HealthcareIcon;
    case "dealer-distributor-enquiry":
      return UsersIcon;
    case "vendor-customer-kyc-intake":
      return FileEmpty02Icon;
    case "support-ticket-triage":
      return CustomerSupportIcon;
    case "payment-link-collection":
      return CreditCardIcon;
    case "nps-csat-on-whatsapp":
      return StarIcon;
    default:
      return Megaphone03Icon;
  }
};

const getPalette = (slug: string) => {
  switch (slug) {
    case "click-to-whatsapp-lead-qualifier":
      return {
        surface: "border-[#FFB86C]/35 bg-[#FFF7ED] text-[#FF6B35]",
        glow: "bg-[#FFB86C]/70",
        secondaryGlow: "bg-[#0F9F6E]/35",
        icon: "bg-gradient-to-br from-[#FFB86C] via-[#FF4D2E] to-[#0F9F6E]",
        monogram: "border-[#FFB86C]/45 bg-white/70 text-[#C2410C]",
        node: "bg-[#FF4D2E]",
        line: "bg-[#FFB86C]",
      };
    case "real-estate-site-visit-booking":
      return {
        surface: "border-[#2DD4BF]/35 bg-[#ECFDF5] text-[#0F766E]",
        glow: "bg-[#2DD4BF]/65",
        secondaryGlow: "bg-[#F59E0B]/35",
        icon: "bg-gradient-to-br from-[#14B8A6] via-[#0F9F6E] to-[#0F766E]",
        monogram: "border-[#2DD4BF]/50 bg-white/70 text-[#0F766E]",
        node: "bg-[#0F9F6E]",
        line: "bg-[#99F6E4]",
      };
    case "loan-insurance-pre-qualification":
      return {
        surface: "border-[#60A5FA]/35 bg-[#EFF6FF] text-[#1D4ED8]",
        glow: "bg-[#60A5FA]/65",
        secondaryGlow: "bg-[#22C55E]/30",
        icon: "bg-gradient-to-br from-[#60A5FA] via-[#2563EB] to-[#0F766E]",
        monogram: "border-[#93C5FD]/70 bg-white/70 text-[#1D4ED8]",
        node: "bg-[#2563EB]",
        line: "bg-[#93C5FD]",
      };
    case "admissions-counselling":
      return {
        surface: "border-[#A78BFA]/35 bg-[#F5F3FF] text-[#6D28D9]",
        glow: "bg-[#A78BFA]/65",
        secondaryGlow: "bg-[#FB7185]/30",
        icon: "bg-gradient-to-br from-[#A78BFA] via-[#7C3AED] to-[#EC4899]",
        monogram: "border-[#C4B5FD]/70 bg-white/70 text-[#6D28D9]",
        node: "bg-[#7C3AED]",
        line: "bg-[#C4B5FD]",
      };
    case "healthcare-appointment-triage":
      return {
        surface: "border-[#38BDF8]/35 bg-[#F0F9FF] text-[#0369A1]",
        glow: "bg-[#38BDF8]/65",
        secondaryGlow: "bg-[#34D399]/35",
        icon: "bg-gradient-to-br from-[#38BDF8] via-[#0EA5E9] to-[#10B981]",
        monogram: "border-[#7DD3FC]/70 bg-white/70 text-[#0369A1]",
        node: "bg-[#0EA5E9]",
        line: "bg-[#7DD3FC]",
      };
    case "dealer-distributor-enquiry":
      return {
        surface: "border-[#F97316]/35 bg-[#FFF7ED] text-[#C2410C]",
        glow: "bg-[#FDBA74]/70",
        secondaryGlow: "bg-[#22C55E]/30",
        icon: "bg-gradient-to-br from-[#FDBA74] via-[#F97316] to-[#16A34A]",
        monogram: "border-[#FDBA74]/70 bg-white/70 text-[#C2410C]",
        node: "bg-[#F97316]",
        line: "bg-[#FDBA74]",
      };
    case "vendor-customer-kyc-intake":
      return {
        surface: "border-[#64748B]/30 bg-[#F8FAFC] text-[#334155]",
        glow: "bg-[#94A3B8]/50",
        secondaryGlow: "bg-[#FF4D2E]/25",
        icon: "bg-gradient-to-br from-[#64748B] via-[#334155] to-[#FF4D2E]",
        monogram: "border-[#CBD5E1]/90 bg-white/70 text-[#334155]",
        node: "bg-[#475569]",
        line: "bg-[#CBD5E1]",
      };
    case "support-ticket-triage":
      return {
        surface: "border-[#22C55E]/35 bg-[#F0FDF4] text-[#15803D]",
        glow: "bg-[#86EFAC]/65",
        secondaryGlow: "bg-[#60A5FA]/30",
        icon: "bg-gradient-to-br from-[#22C55E] via-[#16A34A] to-[#2563EB]",
        monogram: "border-[#86EFAC]/80 bg-white/70 text-[#15803D]",
        node: "bg-[#16A34A]",
        line: "bg-[#86EFAC]",
      };
    case "payment-link-collection":
      return {
        surface: "border-[#F59E0B]/35 bg-[#FFFBEB] text-[#B45309]",
        glow: "bg-[#FCD34D]/70",
        secondaryGlow: "bg-[#FF4D2E]/25",
        icon: "bg-gradient-to-br from-[#FCD34D] via-[#F59E0B] to-[#FF4D2E]",
        monogram: "border-[#FCD34D]/90 bg-white/70 text-[#B45309]",
        node: "bg-[#F59E0B]",
        line: "bg-[#FCD34D]",
      };
    case "nps-csat-on-whatsapp":
      return {
        surface: "border-[#F472B6]/35 bg-[#FDF2F8] text-[#BE185D]",
        glow: "bg-[#F9A8D4]/65",
        secondaryGlow: "bg-[#A78BFA]/30",
        icon: "bg-gradient-to-br from-[#F9A8D4] via-[#EC4899] to-[#7C3AED]",
        monogram: "border-[#F9A8D4]/80 bg-white/70 text-[#BE185D]",
        node: "bg-[#EC4899]",
        line: "bg-[#F9A8D4]",
      };
    default:
      return {
        surface: "border-[#FFB86C]/35 bg-[#FFF7ED] text-[#FF6B35]",
        glow: "bg-[#FFB86C]/70",
        secondaryGlow: "bg-[#0F9F6E]/35",
        icon: "bg-gradient-to-br from-[#FFB86C] via-[#FF4D2E] to-[#0F9F6E]",
        monogram: "border-[#FFB86C]/45 bg-white/70 text-[#C2410C]",
        node: "bg-[#FF4D2E]",
        line: "bg-[#FFB86C]",
      };
  }
};

const HealthcareIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-4 stroke-[1.5px] inline-flex shrink-0", className)}
  >
    <title>Healthcare</title>
    <path d="M12 7V17" />
    <path d="M7 12H17" />
    <path d="M4.5 9.5C4.5 6.462 6.462 4.5 9.5 4.5H14.5C17.538 4.5 19.5 6.462 19.5 9.5V14.5C19.5 17.538 17.538 19.5 14.5 19.5H9.5C6.462 19.5 4.5 17.538 4.5 14.5V9.5Z" />
  </svg>
);
