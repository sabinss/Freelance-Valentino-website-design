import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    title: "Fashion Designing",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=800",
    duration: "12 Months",
    description:
      "Master the art of fashion design from concept to creation. Learn sketching, pattern making, garment construction, and portfolio development.",
  },
  {
    title: "Boutique Management",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800",
    duration: "12 Months",
    description:
      "Comprehensive training in running a successful fashion business. Covers inventory, marketing, customer service, and business operations.",
  },
  {
    title: "Draping & Stitching",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800",
    duration: "6 Months",
    description:
      "Hands-on training in draping techniques and advanced stitching methods. Perfect for those who want to master garment construction.",
  },
  {
    title: "Fashion Illustration",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800",
    duration: "6 Months",
    description:
      "Develop your artistic skills in fashion illustration. Learn to sketch designs, render fabrics, and create stunning fashion plates.",
  },
  {
    title: "Pattern Making",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=800",
    duration: "6 Months",
    description:
      "Learn the technical skills of pattern drafting, grading, and fitting. Essential for anyone serious about garment construction.",
  },
  {
    title: "Fashion Styling",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800",
    duration: "6 Months",
    description:
      "Master the art of styling for fashion shoots, editorial work, and personal clients. Learn about trends, color theory, and image creation.",
  },
  {
    title: "Interior Designing",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
    duration: "15 Months",
    description:
      "Comprehensive diploma in interior design covering space planning, color schemes, materials, lighting, and project management.",
  },
  {
    title: "Textile Design",
    image: "https://images.unsplash.com/photo-1558171814-cc1f23e4e98d?q=80&w=800",
    duration: "12 Months",
    description:
      "Explore the world of textile creation including fabric printing, weaving techniques, and surface design for fashion and interiors.",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Programs
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Diploma Courses
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Industry-focused programs designed to transform your creative passion into professional expertise.
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <div
                  key={course.title}
                  className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>
                    <Button variant="outline" className="w-full group/btn">
                      <Link href="/admissions" className="flex items-center gap-2">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Course is Right for You?
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
              Our counselors are here to help you choose the perfect program based on your interests and career goals.
            </p>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/contact" className="flex items-center gap-2">Get Free Counseling</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
