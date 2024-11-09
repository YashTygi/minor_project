import { Quote } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MagicCard } from "@/components/ui/magic-card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechInnovate",
      quote: "This platform revolutionized our customer engagement strategy. The AI-driven insights are game-changing!",
      avatar: "https://picsum.photos/seed/sarah/200"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GlobalRetail",
      quote: "We've seen a 40% increase in conversion rates since implementing the analytics platform.",
      avatar: "https://picsum.photos/seed/michael/200"
    },
    {
      name: "Elena Rodriguez",
      position: "Head of Customer Success, StartupGrowth",
      quote: "The personalization capabilities are incredible. It feels like we have a dedicated insights team.",
      avatar: "https://picsum.photos/seed/elena/200"
    }
  ];
  

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Trusted by Industry Leaders
        </h2>
        <p className="text-muted-foreground">
          See how companies are transforming their customer engagement
        </p>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem 
              key={index} 
              className="md:basis-1/2 lg:basis-1/3"
            >
              <MagicCard>
                <Card className="bg-black/50 border-white/10">
                  <CardContent className="pt-6">
                    <Quote className="text-primary mb-4 w-10 h-10" />
                    <p className="italic text-lg mb-4">
                      "{testimonial.quote}"
                    </p>
                  </CardContent>
                  <CardFooter className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                      />
                      <AvatarFallback>
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </MagicCard>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}