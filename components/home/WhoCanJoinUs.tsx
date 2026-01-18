import React from 'react'
import { CheckCircle } from "lucide-react";

const eligibilityCriteria = [
    "High school graduates (10+2 or equivalent)",
    "Working professionals seeking career change",
    "Creative individuals passionate about design",
    "Entrepreneurs planning to start fashion business",
    "Artists looking to expand their skills",
    "Anyone with a passion for fashion & design",
];

export default function WhoCanJoinUs() {
    return (
        <section className='w-full bg-[#1f1f1f] flex flex-col items-center justify-center my-10'>
            <div className='container mx-auto p-10'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='relative'>
                        <div className="aspect-square rounded-2xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800"
                                alt="Fashion student"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Floating Card */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl max-w-[200px] text-white">
                            <div className="text-4xl font-bold">100%</div>
                            <div className="text-sm opacity-90">Practical Training</div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="lg:pl-8">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                            Eligibility
                        </span>
                        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-6 text-white">
                            Who Can Join?
                        </h2>
                        <p className="text-muted-foreground mb-8 leading-relaxed text-white">
                            Our programs are designed to accommodate students from diverse backgrounds. Whether you're a fresh graduate or a seasoned professional, there's a place for you at Valentino.
                        </p>

                        <ul className="space-y-4">
                            {eligibilityCriteria.map((criteria) => (
                                <li key={criteria} className="flex items-start gap-3 text-white">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-background/90">{criteria}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>

        </section>
    )
}
