import React from 'react';

export default function PageName() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <PageShell
      title="Donate"
      description={
        <>
          WOW That’s STEM Columbus is a community-based nonprofit dedicated to expanding access to STEM education,
          artificial intelligence, business, coding, and chess for K–12 students across Central Ohio.
        </>
      }
      maxWidthClassName="max-w-3xl"
    >
      <div className="space-y-6">
        <div className="space-y-4 text-sm md:text-base text-muted-foreground font-medium">
          <p>
            We provide free, hands-on learning experiences that help students develop technical skills, critical
            thinking, and confidence. Our programs include STEM workshops, AI and coding activities, business and
            entrepreneurship learning, and scholastic chess programs and tournaments. All WOW That’s STEM Columbus
            events are offered at no cost to students and families.
          </p>
          <p>Funds raised through this campaign will be used to support:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>STEM, AI, business, coding, and chess education programs</li>
            <li>Chess tournaments and scholastic competitive events</li>
            <li>Equipment, software, and educational materials</li>
            <li>Program operations and community outreach</li>
          </ul>
          <p>Every contribution directly supports free educational opportunities for students in our community.</p>
          <p>Thank you for supporting WOW That’s STEM Columbus and the students we serve.</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="https://gofund.me/192761194"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex flex-1 items-center justify-between rounded-full border border-border bg-primary text-primary-foreground px-6 py-3 text-sm md:text-base font-semibold shadow-[var(--shadow-soft)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="tracking-wide">Donate</span>
            <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/60 text-xs md:text-sm font-bold">
              →
            </span>
          </a>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/2MXOKM3V9RENI?type=wishlist&filter=persistent_all&sort=priority&viewType=list"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex flex-1 items-center justify-between rounded-full border border-border bg-secondary text-secondary-foreground px-6 py-3 text-sm md:text-base font-semibold shadow-[var(--shadow-soft)] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="tracking-wide">Amazon Wishlist</span>
            <span className="ml-3 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/60 text-xs md:text-sm font-bold">
              →
            </span>
          </a>
        </div>
      </div>
    </PageShell>
  );
}

