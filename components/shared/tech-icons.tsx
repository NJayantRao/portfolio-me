import { Database } from "lucide-react";
import { GithubIcon } from "@/components/shared/icons";
import { SiExpress } from "react-icons/si";
import Image from "next/image";

type TechDef = {
  badgeClassName: string;
  render: React.ReactNode;
};

const ICON_SIZE = 30;
const iconBox = "size-9 object-contain";

function devicon(slug: string, alt: string) {
  return (
    <Image
      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}.svg`}
      alt={alt}
      width={ICON_SIZE}
      height={ICON_SIZE}
      className={iconBox}
    />
  );
}

const defs: Record<string, TechDef> = {
  TypeScript: {
    badgeClassName: "bg-[#3178C6]",
    render: devicon("typescript/typescript-original", "TypeScript"),
  },
  JavaScript: {
    badgeClassName: "bg-[#F7DF1E]",
    render: devicon("javascript/javascript-original", "JavaScript"),
  },
  React: {
    badgeClassName: "bg-white/5",
    render: devicon("react/react-original", "React"),
  },
  "Next.js": {
    badgeClassName: "bg-white",
    render: devicon("nextjs/nextjs-original", "Next.js"),
  },
  "Tailwind CSS": {
    badgeClassName: "bg-white/5",
    render: devicon("tailwindcss/tailwindcss-original", "Tailwind CSS"),
  },
  "Node.js": {
    badgeClassName: "bg-white/5",
    render: devicon("nodejs/nodejs-original", "Node.js"),
  },
  Express: {
    badgeClassName: "bg-white/5",
    render: <SiExpress size={ICON_SIZE} />,
  },
  PostgreSQL: {
    badgeClassName: "bg-white/5",
    render: devicon("postgresql/postgresql-original", "PostgreSQL"),
  },
  MongoDB: {
    badgeClassName: "bg-white/5",
    render: devicon("mongodb/mongodb-original", "MongoDB"),
  },
  Git: {
    badgeClassName: "bg-white/5",
    render: devicon("git/git-original", "Git"),
  },
  GitHub: {
    badgeClassName: "bg-white/5",
    render: <GithubIcon className="size-7 text-foreground/90" />,
  },
  Docker: {
    badgeClassName: "bg-white/5",
    render: devicon("docker/docker-original", "Docker"),
  },
};

export function TechIcon({ name }: { name: string }) {
  const def = defs[name];
  if (!def) {
    return null;
  }
  return (
    <div
      className={`flex size-10 shrink-0 items-center justify-center rounded-md ${def.badgeClassName}`}
    >
      {def.render}
    </div>
  );
}
