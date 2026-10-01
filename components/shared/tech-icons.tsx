import {
  Network,
  ShieldCheck,
  BrainCircuit,
  FileSearch,
  Bot,
  Plug2,
  GitBranch,
  Zap,
  Database,
  Terminal,
  Feather,
} from "lucide-react";
import { RiNextjsFill } from "react-icons/ri";

import { FaReact } from "react-icons/fa";
import { GithubIcon } from "@/components/shared/icons";
import { SiTypescript } from "react-icons/si";

type TechDef = {
  badgeClassName: string;
  render: React.ReactNode;
};

const iconBox = "size-6";

const defs: Record<string, TechDef> = {
  TypeScript: {
    badgeClassName: "bg-[#3178C6]",
    render: <SiTypescript />,
  },
  JavaScript: {
    badgeClassName: "bg-[#F7DF1E]",
    render: <span className="text-[13px] font-bold text-black">JS</span>,
  },
  React: {
    badgeClassName: "bg-white/5",
    render: <FaReact />,
  },
  "Next.js": {
    badgeClassName: "bg-white",
    render: <RiNextjsFill />,
  },
  "Tailwind CSS": {
    badgeClassName: "bg-white/5",
    render: (
      <svg viewBox="0 0 24 24" className={iconBox} fill="#38BDF8">
        <path d="M6 10c.9-3.1 3-4.6 6.3-4.5 3.3.1 4.3 1.9 5.4 3.6-1-.8-2.3-1-3.6-.4-1 .4-1.7 1.3-2.5 2.3C10.6 12.6 9.1 13.8 6.6 13.2 5.1 12.9 5.3 11.2 6 10Z" />
        <path d="M1.3 16c.9-3.1 3-4.6 6.3-4.5 3.3.1 4.3 1.9 5.4 3.6-1-.8-2.3-1-3.6-.4-1 .4-1.7 1.3-2.5 2.3C5.9 18.6 4.4 19.8 1.9 19.2.4 18.9.6 17.2 1.3 16Z" />
      </svg>
    ),
  },
  "Node.js": {
    badgeClassName: "bg-white/5",
    render: (
      <svg
        viewBox="0 0 24 24"
        className={iconBox}
        fill="none"
        stroke="#5FA04E"
        strokeWidth="1.5"
      >
        <path d="M12 2 20.5 7v10L12 22 3.5 17V7Z" />
      </svg>
    ),
  },
  Express: {
    badgeClassName: "bg-white/5",
    render: <span className="mono text-lg text-foreground/90">ex</span>,
  },
  PostgreSQL: {
    badgeClassName: "bg-white/5",
    render: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
        alt="PostgreSQL"
        className={iconBox}
      />
    ),
  },
  MongoDB: {
    badgeClassName: "bg-white/5",
    render: (
      <svg viewBox="0 0 24 24" className={iconBox} fill="#47A248">
        <path d="M12 2c3 3.3 5 7.1 5 10.6A5 5 0 0 1 12 18a5 5 0 0 1-5-5.4C7 9.1 9 5.3 12 2Z" />
        <path d="M11.5 15v7h1v-7Z" />
      </svg>
    ),
  },
  Git: {
    badgeClassName: "bg-white/5",
    render: <GitBranch className="size-5" style={{ color: "#F05032" }} />,
  },
  GitHub: {
    badgeClassName: "bg-white/5",
    render: <GithubIcon className="size-5 text-foreground/90" />,
  },
  Docker: {
    badgeClassName: "bg-white/5",
    render: (
      <svg viewBox="0 0 24 24" className={iconBox} fill="#2496ED">
        <rect x="3" y="11" width="3.6" height="3.6" rx="0.5" />
        <rect x="7.2" y="11" width="3.6" height="3.6" rx="0.5" />
        <rect x="11.4" y="11" width="3.6" height="3.6" rx="0.5" />
        <rect x="7.2" y="6.8" width="3.6" height="3.6" rx="0.5" />
        <path d="M2 15c0 2.8 2.3 4.6 5.5 4.6h6c3 0 5.6-1.4 6.8-4.6-1-1-2.7-1.3-3.7-.8-.5-1.3-1.8-2.1-3.1-1.8-.6-.9-1.8-1.3-2.7-.9-1.8-.9-3.7 0-4 1.8-1.4-.2-2.7.5-2.8 1.7Z" />
      </svg>
    ),
  },
};

const fallback: TechDef = {
  badgeClassName: "bg-white/5",
  render: <Database className="size-5 text-muted-foreground" />,
};

export function TechIcon({ name }: { name: string }) {
  const def = defs[name] ?? fallback;
  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center rounded-lg ${def.badgeClassName}`}
    >
      {def.render}
    </div>
  );
}
