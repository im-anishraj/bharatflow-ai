import { cn } from "../lib/cn";

type Props = {
  className?: string;
};

export const TypebotLoader = ({ className }: Props) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    className={cn(
      "size-6 text-gray-7 animate-pulse motion-reduce:animate-none motion-reduce:opacity-50",
      className,
    )}
  >
    <title>Loading</title>
    <rect width="40" height="40" rx="10" fill="currentColor" />
    <path
      d="M11 11H22C25.4 11 27.5 12.9 27.5 15.8C27.5 17.6 26.6 19 25 19.8C27.1 20.5 28.4 22.1 28.4 24.3C28.4 27.4 26 29.5 22.3 29.5H11V11ZM15.2 14.5V18.4H21.3C22.6 18.4 23.3 17.7 23.3 16.5C23.3 15.3 22.5 14.5 21.1 14.5H15.2ZM15.2 21.5V26H21.8C23.3 26 24.2 25.1 24.2 23.8C24.2 22.4 23.2 21.5 21.7 21.5H15.2Z"
      fill="white"
    />
  </svg>
);
