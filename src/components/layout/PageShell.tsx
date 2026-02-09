import * as React from "react";

import GroupMeBanner from "@/components/GroupMeBanner";
import SiteHeader from "@/components/SiteHeader";
import { cn } from "@/lib/utils";

type PageShellProps = {
  title: string;
  description?: React.ReactNode;
  children: React.ReactNode;
  maxWidthClassName?: string;
};

export default function PageShell({
  title,
  description,
  children,
  maxWidthClassName,
}: PageShellProps) {
  return (
    <div className="min-h-screen text-foreground flex flex-col">
      <SiteHeader />
      <GroupMeBanner />

      <main className="flex-1 flex items-start justify-center px-4 py-8 md:py-10">
        <div className={cn("w-full", maxWidthClassName ?? "max-w-4xl")}
        >
          <section className="rounded-[var(--radius)] bg-card/80 border border-border shadow-[var(--shadow-soft)] backdrop-blur-sm px-6 py-8 md:px-10 md:py-10">
            <header className={cn("space-y-3", description ? "mb-8" : "mb-6")}>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
                {title}
              </h1>
              {description ? (
                <div className="text-sm md:text-base text-muted-foreground font-medium max-w-2xl">
                  {description}
                </div>
              ) : null}
            </header>

            {children}
          </section>
        </div>
      </main>
    </div>
  );
}
