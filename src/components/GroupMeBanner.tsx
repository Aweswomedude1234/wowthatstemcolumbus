import * as React from "react";

const GROUPME_BANNER_STORAGE_KEY = "wow-stem:groupme-banner-dismissed";

export default function GroupMeBanner() {
  const [showGroupMeBanner, setShowGroupMeBanner] = React.useState(() => {
    try {
      return localStorage.getItem(GROUPME_BANNER_STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  React.useEffect(() => {
    try {
      if (!showGroupMeBanner) localStorage.setItem(GROUPME_BANNER_STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, [showGroupMeBanner]);

  if (!showGroupMeBanner) return null;

  return (
    <div className="border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-4 py-2 md:px-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-border bg-card/70 px-4 py-2 shadow-[var(--shadow-soft)]">
          <p className="text-xs md:text-sm font-medium text-foreground/90">
            <a
              href="https://groupme.com/join_group/112544836/Em8Y58aW"
              target="_blank"
              rel="noreferrer"
              className="font-semibold underline decoration-dotted underline-offset-4"
            >
              Join our GroupMe
            </a>{" "}
            for February&apos;s free camps and workshops.
          </p>
          <button
            type="button"
            onClick={() => setShowGroupMeBanner(false)}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/60 text-sm font-semibold"
            aria-label="Dismiss banner"
            title="Dismiss"
          >
            ×
          </button>
        </div>
      </div>
    </div>
  );
}
