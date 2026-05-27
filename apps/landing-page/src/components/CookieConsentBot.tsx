import { Button } from "@typebot.io/ui/components/Button";
import { useEffect, useId, useState } from "react";
import { TypebotLogo } from "@/components/TypebotLogo";

type Props = {
  isOpen: boolean;
  openDelay: number;
  onSubmit: (consent: "accepted" | "declined") => void;
};

export const CookieConsentBot = ({ isOpen, onSubmit, openDelay }: Props) => {
  const isOpenDelayed = useDelayedOpen(isOpen, openDelay);
  const panelId = useId();

  if (!isOpenDelayed) return null;
  return (
    <div
      id={panelId}
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-5 left-5 z-50 flex w-[min(calc(100vw-40px),450px)] items-start gap-4 rounded-[20px] border border-white/10 bg-[#0D0D0D] p-7 text-white shadow-2xl"
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
        <TypebotLogo className="size-7" />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <p className="rounded-md bg-white/10 px-4 py-3 text-base text-gray-2 leading-relaxed">
          We only use <em>one</em> in-house cookie. Just enough to link
          anonymous visits across pages.
        </p>
        <p className="w-fit rounded-md bg-white/10 px-4 py-2 text-base text-gray-2">
          No third-party trackers. No creepy stuff.
        </p>
        <p className="w-fit rounded-md bg-white/10 px-4 py-2 text-base text-gray-2">
          Deal?
        </p>
        <div className="mt-1 flex justify-end gap-3">
          <Button
            variant="outline-secondary"
            className="border-white/20 bg-transparent text-white hover:bg-white/10 active:bg-white/15"
            onClick={() => onSubmit("declined")}
          >
            Decline
          </Button>
          <Button onClick={() => onSubmit("accepted")}>Accept</Button>
        </div>
      </div>
    </div>
  );
};

const useDelayedOpen = (isOpen: boolean, openDelay: number) => {
  const [isOpenDelayed, setIsOpenDelayed] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (isOpen === false) setIsOpenDelayed(false);
    else
      timeout = setTimeout(() => {
        setIsOpenDelayed(isOpen);
      }, openDelay);
    return () => clearTimeout(timeout);
  }, [isOpen, openDelay]);

  return isOpenDelayed;
};
