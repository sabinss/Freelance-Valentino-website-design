import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const CoursesPreview = ({ course, key }: any) => {
    return (
        <Link
            href="/courses/fashion-design"
            className="relative block w-72 rounded-2xl overflow-hidden shadow-lg group"
        >
            {/* Background Image */}
            <img
                src={course.image} // Replace with your real image
                alt="Fashion Designing"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 p-6 text-white">
                {/* Badge */}
                <span className="inline-block bg-pink-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
                    12 Months
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold leading-tight mb-2">
                    Fashion Designing
                </h3>

                {/* Learn More */}
                <span className="text-pink-400 flex items-center gap-2 font-medium">
                    Learn More <FaArrowRight className="inline-block" />
                </span>
            </div>
        </Link>
    )
}