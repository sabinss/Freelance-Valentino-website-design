import { Button } from "@/components/ui/button";
import { Scissors, PenTool, Ruler, ShoppingBag, Palette, Camera } from "lucide-react";
import Link from "next/link";
const careers = [
    { icon: Scissors, title: "Fashion Designer" },
    { icon: PenTool, title: "Fashion Illustrator" },
    { icon: Ruler, title: "Pattern Maker" },
    { icon: ShoppingBag, title: "Boutique Owner" },
    { icon: Palette, title: "Interior Designer" },
    { icon: Camera, title: "Fashion Stylist" },
];

export const Careers = () => {
    return (
        <section className="section-padding">
            <div className="container mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                        Career Paths
                    </span>
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-4">
                        Endless Opportunities
                    </h2>
                    <p className="text-muted-foreground">
                        Our graduates work with leading fashion houses, start their own labels, and shape the future of design.
                    </p>
                </div>
                {/* hover:border-primary hover:shadow-lg */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {careers.map((career, index) => (
                        <div
                            key={career.title}
                            className="group bg-card border border-border rounded-2xl p-6 text-center  transition-all duration-300"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center  transition-colors bg-[#feeff7] hover:bg-primary">
                                <career.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors hover:text-white" />
                            </div>
                            <h3 className="font-semibold text-sm">{career.title}</h3>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    {/* <Button asChild size="lg" className="btn-primary">
                        <Link to="/admissions">Start Your Journey</Link>
                    </Button> */}
                </div>
            </div>
        </section>
    );
};
