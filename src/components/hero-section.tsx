import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.8}
          maxSize={2}
          particleDensity={100}
          particleColor="#ffffff"
        />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Unlock Customer Insights with{" "}
          <FlipWords 
            words={["AI", "Analytics", "Personalization"]} 
            className="text-primary" 
          />
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Transform customer data into actionable insights with our 
          AI-powered analytics platform
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href="/login">
            <Button size="lg" variant="default">
              Get Started
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
}