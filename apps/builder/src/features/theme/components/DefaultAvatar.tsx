import { cn } from "@typebot.io/ui/lib/cn";
import { useId } from "react";

export const DefaultAvatar = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const gradientId = `bharatflow-builder-avatar-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 156 156"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10 rounded-full", className)}
      data-testid="default-avatar"
      {...props}
    >
      <title>BharatFlow AI Avatar</title>
      <defs>
        <linearGradient
          id={gradientId}
          x1="24"
          x2="132"
          y1="18"
          y2="138"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB86C" />
          <stop offset="0.5" stopColor="#FF4D2E" />
          <stop offset="1" stopColor="#0F9F6E" />
        </linearGradient>
      </defs>
      <rect width="156" height="156" rx="78" fill="#1D1D1D" />
      <rect
        x="24"
        y="24"
        width="108"
        height="108"
        rx="28"
        fill={`url(#${gradientId})`}
      />
      <rect
        x="24.5"
        y="24.5"
        width="107"
        height="107"
        rx="27.5"
        stroke="white"
        strokeOpacity="0.16"
      />
      <path
        d="M11 11H22C25.4 11 27.5 12.9 27.5 15.8C27.5 17.6 26.6 19 25 19.8C27.1 20.5 28.4 22.1 28.4 24.3C28.4 27.4 26 29.5 22.3 29.5H11V11ZM15.2 14.5V18.4H21.3C22.6 18.4 23.3 17.7 23.3 16.5C23.3 15.3 22.5 14.5 21.1 14.5H15.2ZM15.2 21.5V26H21.8C23.3 26 24.2 25.1 24.2 23.8C24.2 22.4 23.2 21.5 21.7 21.5H15.2Z"
        fill="white"
        transform="translate(24 24) scale(2.7)"
      />
    </svg>
  );
};
