import * as React from "react";

type InstagramFeedProps = {
  /**
   * Iframe `src` from an Instagram feed widget provider (e.g. LightWidget/SnapWidget).
   * This is the only stable, auto-updating option without API credentials.
   */
  widgetSrc?: string;
  title?: string;
};

export default function InstagramFeed({
  widgetSrc,
  title = "Instagram",
}: InstagramFeedProps) {
  if (!widgetSrc) {
    return (
      <div className="rounded-[var(--radius)] border border-border bg-background/50 p-4 text-sm text-muted-foreground">
        <p className="font-semibold text-foreground">{title}</p>
        <p className="mt-2">
          To enable the auto-updating Instagram feed, paste your widget iframe <code>src</code> URL into
          <code className="mx-1 rounded bg-muted px-1 py-0.5">widgetSrc</code> where this component is used.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-background/40">
      <iframe
        title={title}
        src={widgetSrc}
        className="block w-full"
        // Most widgets are responsive and handle 3/2/1 columns automatically.
        // Height is intentionally generous; adjust if your widget provider recommends a specific height.
        style={{ height: 720 }}
        loading="lazy"
        referrerPolicy="no-referrer"
        sandbox="allow-scripts allow-same-origin allow-popups"
      />
    </div>
  );
}
