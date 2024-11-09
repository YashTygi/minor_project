import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SparklesCore } from "@/components/ui/sparkles";
import Meteors from "@/components/ui/meteors";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={50}
          particleColor="#ffffff"
        />
        <Meteors number={30} />
      </div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Unlock Your Customer Insights?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your journey towards data-driven customer engagement. 
            No credit card required, instant setup.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/login">
              <Button 
                size="lg" 
                variant="default" 
                className="bg-primary hover:bg-primary/90"
              >
                Start Free Trial
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              Book a Demo
            </Button>
          </div>
          
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required • Instant setup • 14-day free trial
          </p>
        
        </div>
      </div>
    </section>
  )
}