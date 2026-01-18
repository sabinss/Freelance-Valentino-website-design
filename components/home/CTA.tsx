import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
export const CTA = () => {
    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070')`,
                }}
            >
                <div className="absolute inset-0 bg-primary/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Ready to Begin Your Fashion Journey?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
                    Join the next batch of creative leaders. Limited seats available for the upcoming session.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        size="lg"
                        className="text-lg px-8 py-2 bg-white text-primary hover:bg-white/90"
                    >
                        <Link href="/admissions" className="flex items-center gap-2">
                            Apply Now
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="text-lg px-8 py-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                    >
                        <a href="tel:9102012633" className="flex items-center gap-2">
                            <Phone className="mr-2 w-5 h-5" />
                            Call Us
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};
