import { SignUpButton } from "@clerk/nextjs";
import {
  ArrowRightIcon,
  ZapIcon,
  MicIcon,
  BrainIcon,
  CalendarIcon,
} from "lucide-react";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative pt-25 pb-12 outline-hidden z-10 max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10 backdrop-blur-sm mb-6">
          <ZapIcon className="size-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            Simple Process
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          <span className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Get Better Dental Care
          </span>
          <br />
          <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            in 3 Simple Steps
          </span>
        </h2>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experience smarter dental care with our AI-powered assistant — instant
          answers, expert guidance, and seamless appointment booking.
        </p>
      </div>

      {/* STEPS */}
      <div className="relative">
        {/* CONNECTION LINE */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2 hidden lg:block"></div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
          {/* STEP 1 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] group-hover:-translate-y-1">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              {/* ICON */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <MicIcon className="size-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Ask Dental Questions
              </h3>

              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Talk to our AI assistant about any dental concerns. Get instant
                answers about symptoms, treatments, and oral care tips.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  24/7 Available
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] group-hover:-translate-y-1">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>

              {/* ICON */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <BrainIcon className="size-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Get Expert Advice
              </h3>

              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Receive personalized recommendations based on dental cases. Our
                AI provides professional-grade insights.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  AI-Powered
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="relative group">
            <div className="relative bg-linear-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.02] group-hover:-translate-y-1">
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>

              {/* ICON */}
              <div className="w-20 h-20 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-6">
                <CalendarIcon className="size-10 text-primary" />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-center">
                Book & Get Care
              </h3>

              <p className="text-muted-foreground text-center leading-relaxed mb-6">
                Schedule appointments with verified dentists and receive
                continuous follow-up care with progress tracking.
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Verified Doctors
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Follow-up Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <SignUpButton mode="modal">
          <Button size="lg" className="text-base px-8 py-6 hover:scale-[1.02]">
            <ArrowRightIcon className="mr-2 size-5" />
            Start Your AI Dental Consultation
          </Button>
        </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
