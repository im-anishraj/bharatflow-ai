import { type SVGProps, useId } from "react";

export const TypebotLogo = (props: SVGProps<SVGSVGElement>) => {
  const gradientId = `bharatflow-mark-${useId().replace(/:/g, "")}`;

  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" {...props}>
      <title>BharatFlow AI Logo</title>
      <defs>
        <linearGradient
          id={gradientId}
          x1="4"
          x2="36"
          y1="2"
          y2="38"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB86C" />
          <stop offset="0.5" stopColor="#FF4D2E" />
          <stop offset="1" stopColor="#0F9F6E" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${gradientId})`} />
      <rect
        width="40"
        height="40"
        rx="10"
        stroke="#161616"
        strokeOpacity="0.14"
      />
      <path
        d="M11 11H22C25.4 11 27.5 12.9 27.5 15.8C27.5 17.6 26.6 19 25 19.8C27.1 20.5 28.4 22.1 28.4 24.3C28.4 27.4 26 29.5 22.3 29.5H11V11ZM15.2 14.5V18.4H21.3C22.6 18.4 23.3 17.7 23.3 16.5C23.3 15.3 22.5 14.5 21.1 14.5H15.2ZM15.2 21.5V26H21.8C23.3 26 24.2 25.1 24.2 23.8C24.2 22.4 23.2 21.5 21.7 21.5H15.2Z"
        fill="white"
      />
    </svg>
  );
};

export const TypebotLogoFull = (props: SVGProps<SVGSVGElement>) => {
  const gradientId = `bharatflow-full-mark-${useId().replace(/:/g, "")}`;

  return (
    <svg width="170px" height="32" {...props} viewBox="0 0 170 32" fill="none">
      <title>BharatFlow AI Logo</title>
      <defs>
        <linearGradient
          id={gradientId}
          x1="3.2"
          x2="28.8"
          y1="1.6"
          y2="30.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFB86C" />
          <stop offset="0.5" stopColor="#FF4D2E" />
          <stop offset="1" stopColor="#0F9F6E" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#${gradientId})`} />
      <rect
        width="32"
        height="32"
        rx="8"
        stroke="#161616"
        strokeOpacity="0.14"
      />
      <path
        d="M9 8H18.1C20.9 8 22.7 9.6 22.7 12C22.7 13.5 22 14.6 20.6 15.3C22.4 15.9 23.5 17.2 23.5 19.1C23.5 21.7 21.5 23.4 18.4 23.4H9V8ZM12.5 10.9V14.2H17.5C18.6 14.2 19.2 13.6 19.2 12.6C19.2 11.6 18.6 10.9 17.4 10.9H12.5ZM12.5 16.8V20.5H18C19.3 20.5 20 19.8 20 18.7C20 17.5 19.2 16.8 17.9 16.8H12.5Z"
        fill="white"
      />
      <text
        x="42"
        y="21"
        fill="currentColor"
        fontFamily="Inter, ui-sans-serif, system-ui, sans-serif"
        fontSize="17"
        fontWeight="700"
        letterSpacing="0"
      >
        BharatFlow AI
      </text>
    </svg>
  );
};
