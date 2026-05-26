import { GithubIcon } from "@typebot.io/ui/icons/GithubIcon";
import { RulerIcon } from "@typebot.io/ui/icons/RulerIcon";
import { SourceCodeIcon } from "@typebot.io/ui/icons/SourceCodeIcon";
import { SparklesIcon } from "@typebot.io/ui/icons/SparklesIcon";
import { ZapIcon } from "@typebot.io/ui/icons/ZapIcon";
import { cn } from "@typebot.io/ui/lib/cn";
import { TextLink } from "@/components/link";
import { githubRepoUrl } from "../../../constants";

const data = [
  {
    Icon: RulerIcon,
    text: "Private deployment path with no lock-in",
  },
  {
    Icon: SourceCodeIcon,
    text: "APIs and webhooks for fast implementation",
  },
  {
    Icon: SparklesIcon,
    text: "Controlled AI blocks across providers",
  },
  {
    Icon: ZapIcon,
    text: "Built for reliable, scalable workflows",
  },
];

export const MadeForDevelopers = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:items-center gap-4">
        <h2>Built for operators, trusted by developers</h2>
        <div className="flex gap-3 items-center">
          <GithubIcon className="size-4" />
          <TextLink target="_blank" href={githubRepoUrl} hideExternalIcon>
            GitHub repository
          </TextLink>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        {data.map(({ Icon, text }, index) => (
          <div key={text} className="flex items-start gap-3">
            <Icon className="size-4 mt-1" />
            <p
              className={cn(
                "md:w-44",
                index === data.length - 1 ? undefined : "text-balance",
              )}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
