import { Header } from "@/components/layout/Header";
import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Shaping the Future of Design
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, Valentino Intl. College has been nurturing creative talent and transforming passionate individuals into industry-leading designers.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Nepal's Premier Fashion & Design Institute
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Valentino Intl. College of Fashion & Interior Designing stands as a beacon of creative excellence in Nepal. Founded with the vision of providing world-class design education, we have consistently delivered industry-relevant curriculum that prepares students for successful careers in fashion and interior design.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our state-of-the-art facilities, experienced faculty, and hands-on approach to learning ensure that every student receives personalized attention and practical skills needed to thrive in the competitive design industry.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=600"
                  alt="Fashion studio"
                  className="rounded-2xl h-64 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600"
                  alt="Interior design"
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-foreground text-background">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To provide exceptional design education that empowers students with creativity, technical skills, and entrepreneurial spirit to excel in the global fashion and interior design industry.",
                },
                {
                  icon: Eye,
                  title: "Our Vision",
                  description:
                    "To be the leading center of design excellence in South Asia, producing innovative designers who shape trends and contribute to the creative economy.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  description:
                    "Creativity, Excellence, Innovation, Integrity, and Student-Centered Learning form the core of everything we do at Valentino.",
                },
              ].map((item) => (
                <div key={item.title} className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Campus */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Campus
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">
                World-Class Facilities
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600",
                  title: "Design Studios",
                },
                {
                  image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600",
                  title: "Computer Labs",
                },
                {
                  image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600",
                  title: "Fabric Library",
                },
              ].map((facility) => (
                <div key={facility.title} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-display text-xl font-bold text-white">{facility.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
