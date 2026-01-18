"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, GraduationCap, CheckCircle } from "lucide-react";

const courses = [
  "Fashion Designing",
  "Boutique Management",
  "Draping & Stitching",
  "Fashion Illustration",
  "Pattern Making",
  "Fashion Styling",
  "Interior Designing",
  "Textile Design",
];

const Admissions = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-primary text-primary-foreground text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm mb-6">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Admissions Open
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Start Your Creative Journey
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Join the next batch of aspiring designers. Limited seats available for the upcoming session.
              </p>
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="section-padding bg-white mt-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-32 relative z-10 bg-white rounded-2xl">
              {[
                {
                  icon: Calendar,
                  title: "Next Batch",
                  value: "Dec 7, 2024",
                  subtitle: "Mangsir 21, 2081",
                },
                {
                  icon: Clock,
                  title: "Duration",
                  value: "12-15 Months",
                  subtitle: "Program dependent",
                },
                {
                  icon: GraduationCap,
                  title: "Certification",
                  value: "Diploma",
                  subtitle: "Internationally recognized",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-8 text-center shadow-xl"
                >
                  <div className="w-14 h-14 mx-auto mb-4 bg-accent rounded-xl flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-sm text-muted-foreground mb-1">{item.title}</h3>
                  <div className="font-display text-2xl font-bold">{item.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="section-padding mt-10 mb-10">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                  Apply Now
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-6">
                  Application Form
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and our admissions team will get in touch with you within 24 hours.
                </p>

                {/* Success Message */}
                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Application submitted successfully! We&apos;ll contact you soon.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="98XXXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Select Course *</label>
                    <select
                      required
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Choose a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <textarea
                      placeholder="Tell us about yourself and your interest in design..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </form>
              </div>

              {/* Requirements */}
              <div className="lg:pl-8">
                <div className="bg-secondary rounded-2xl p-8">
                  <h3 className="font-display text-2xl font-bold mb-6">
                    Admission Requirements
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Completed 10+2 or equivalent",
                      "Copy of citizenship/passport",
                      "Recent passport-size photographs",
                      "Academic transcripts",
                      "Personal statement (optional)",
                    ].map((req) => (
                      <li key={req} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-border mt-8 pt-8">
                    <h4 className="font-semibold mb-4">Application Process</h4>
                    <ol className="space-y-3">
                      {[
                        "Submit online application",
                        "Receive confirmation call",
                        "Visit campus for counseling",
                        "Complete enrollment",
                      ].map((step, index) => (
                        <li key={step} className="flex items-center gap-3 text-sm">
                          <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admissions;
