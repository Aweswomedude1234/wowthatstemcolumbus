import * as React from "react";

import { NavLink } from "@/components/NavLink";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const linkBase =
  "rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 md:px-6">
        <NavLink
          to="/"
          className="inline-flex items-center gap-3 rounded-full border border-border bg-card/70 px-3 py-2 shadow-[var(--shadow-soft)]"
          aria-label="Go to home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-accent text-accent-foreground text-xs font-bold leading-none">
            W
          </span>
          <div className="leading-tight">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase md:text-xs text-muted-foreground">
              WOW That’s STEM
            </p>
            <p className="text-[12px] font-semibold md:text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              Columbus Branch
            </p>
          </div>
        </NavLink>

        <nav className="flex flex-wrap justify-end gap-2" aria-label="Primary">
          <NavLink to="/" end className={linkBase} activeClassName="border-accent text-foreground">
            Home
          </NavLink>

          <ProgramsDropdown linkBase={linkBase} />

          <NavLink to="/team" className={linkBase} activeClassName="border-accent text-foreground">
            Our Team
          </NavLink>
          <NavLink to="/impact" className={linkBase} activeClassName="border-accent text-foreground">
            Our Impact
          </NavLink>
          <NavLink to="/donate" className={linkBase} activeClassName="border-accent text-foreground">
            Donate
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function ProgramsDropdown({ linkBase }: { linkBase: string }) {
  const [open, setOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  const scheduleClose = React.useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  }, []);

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }, []);

  React.useEffect(() => {
    return () => {
      if (closeTimer.current) window.clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <div onMouseEnter={() => (cancelClose(), setOpen(true))} onMouseLeave={scheduleClose}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button type="button" className={linkBase} aria-label="Our Programs">
            Our Programs
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="z-50 w-56 bg-popover/95 backdrop-blur-md"
          onMouseEnter={cancelClose}
          onMouseLeave={scheduleClose}
        >
          <DropdownMenuItem asChild>
            <NavLink to="/invention-convention" className="w-full">
              Invention Convention
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/chess-club" className="w-full">
              Chess Club
            </NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <NavLink to="/summer-robotics" className="w-full">
              Summer Robotics
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SiteHeader;
