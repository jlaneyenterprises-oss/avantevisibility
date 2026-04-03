import Image from "next/image";
import Link from "next/link";

interface AuthorBylineProps {
  date?: string;
  variant?: "light" | "dark";
}

export default function AuthorByline({
  date,
  variant = "light",
}: AuthorBylineProps) {
  const textColor = variant === "dark" ? "text-white/70" : "text-text-muted";
  const nameColor =
    variant === "dark" ? "text-white" : "text-secondary";
  const titleColor =
    variant === "dark" ? "text-white/60" : "text-text-muted";

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Link href="/about" className="flex items-center gap-3 group">
        <Image
          src="/jolyn.jpg"
          alt="JoLyn Laney"
          width={36}
          height={36}
          className="rounded-full object-cover"
        />
        <div>
          <p
            className={`text-sm font-medium ${nameColor} group-hover:text-primary transition-colors`}
          >
            By JoLyn Laney
          </p>
          <p className={`text-xs ${titleColor}`}>
            Founder, Avante Visibility
          </p>
        </div>
      </Link>
      {date && (
        <span className={`text-xs ${textColor}`}>
          Last updated: {date}
        </span>
      )}
    </div>
  );
}
