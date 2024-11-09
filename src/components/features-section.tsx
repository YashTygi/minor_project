import { BentoGrid } from "@/components/ui/bento-grid";
import { BarChart, Users, Bell, Target, UploadCloud } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function FeaturesSection() {
    const features = [
        {
            title: "Customer Analytics Dashboard",
            description: "Analyze customer data with real-time metrics and insights.",
            icon: <BarChart className="h-6 w-6 text-blue-600" />,
            className: "md:col-span-2",
            tooltip: "Gain deep insights with real-time metrics for data-driven decisions."
        },
        {
            title: "Data Upload and Management",
            description: "Easily upload customer data to generate insights and manage profiles.",
            icon: <UploadCloud className="h-6 w-6 text-green-600" />,
            className: "md:col-span-1",
            tooltip: "Seamlessly upload data and manage all customer profiles in one place."
        },
        {
            title: "AI Recommendations",
            description: "Receive tailored product recommendations for your customers.",
            icon: <Target className="h-6 w-6 text-purple-600" />,
            className: "md:col-span-1",
            tooltip: "AI-driven recommendations to boost customer engagement and sales."
        },
        {
            title: "Automated Notifications",
            description: "Send personalized AI-driven notifications via web and email.",
            icon: <Bell className="h-6 w-6 text-yellow-600" />,
            className: "md:col-span-1",
            tooltip: "Engage customers with automated, AI-powered notifications."
        },
        {
            title: "Customer Segmentation",
            description: "Organize customers into meaningful segments for targeted engagement.",
            icon: <Users className="h-6 w-6 text-red-600" />,
            className: "md:col-span-1",
            tooltip: "Segment customers to tailor communication and improve relevance."
        }
    ];

    return (
        <section className="container mx-auto py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    Powerful Features for Smart Insights
                </h2>
                <p className="text-muted-foreground">
                    Everything you need to understand and engage your customers
                </p>
            </div>

            <BentoGrid>
                {features.map((feature, idx) => (
                    <Card key={idx} className={`transition-all transform hover:scale-105 ${feature.className}`}>
                        <CardHeader>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex items-center justify-center bg-gray-100 rounded-full p-4">
                                            {feature.icon}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>{feature.tooltip}</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </CardHeader>
                        <CardContent className="text-center p-4">
                            <CardTitle className="text-lg font-semibold mb-2">
                                {feature.title}
                            </CardTitle>
                            <CardDescription className="text-sm text-muted-foreground mb-4">
                                {feature.description}
                            </CardDescription>
                            <Button variant="secondary" size="sm" className="mx-auto">
                                Learn More
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </BentoGrid>
        </section>
    );
}
