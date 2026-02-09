import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold tracking-wide">
            WOW That’s STEM Columbus
          </h3>
          <p className="mt-3 text-sm text-white/70 max-w-sm">
            A youth-led nonprofit empowering students through hands-on STEM
            education, leadership, and innovation.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-white/80">
            Contact
          </h4>
          <p className="mt-3 text-sm text-white/70">
            <a
              href="mailto:columbusOH@wowthatstem.org"
              className="hover:underline"
            >
              columbusOH@wowthatstem.org
            </a>
          </p>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-sm font-semibold tracking-widest uppercase text-white/80">
            Follow
          </h4>
          <div className="mt-4 flex gap-4">
            <a
              href="https://www.instagram.com/wowthatstem.columbus/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-5 w-5 hover:opacity-70" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587270806398"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-5 w-5 hover:opacity-70" />
            </a>
            <a
              href="https://www.linkedin.com/company/wowthatstemcolumbus/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="h-5 w-5 hover:opacity-70" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} WOW That’s STEM Columbus
      </div>
    </footer>
  );
};

export default Footer;
