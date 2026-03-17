import Image from "next/image";

function Footer() {
  return (
    <footer className="px-6 py-12 border-t bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="DentAI Assist Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold text-lg">DentAI Assist</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered dental assistance that actually helps.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#how-it-works"
                  className="hover:text-foreground transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#help-center"
                  className="hover:text-foreground transition-colors">
                  Help center
                </a>
              </li>
              <li>
                <a
                  href="#contact-us"
                  className="hover:text-foreground transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="#status"
                  className="hover:text-foreground transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#security"
                  className="hover:text-foreground transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} DentAI Assist. Helping people make
            smarter dental decisions every day.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
