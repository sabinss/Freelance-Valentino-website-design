import React from 'react'
import { CoursesPreview } from './CoursesPreview'
import { FEATURED_COURSES } from '@/app/constants/featuredCourses'
import { FaArrowRight } from "react-icons/fa";
import { Button } from '../ui/button';
import Link from 'next/link';

export const FeaturedCourses = () => {
    return (
        <div className='mx-34 mt-10'>
            <h2 className='text-primary'>OUR PROGRAMS</h2>
            {/* flex justify-between */}
            <div className='md:flex md:justify-between md:items-center'>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
                    Featured Courses
                </h2>
                <Button variant="outline" className='text-black border border-gray-300 h-12 rounded-lg mt-5 hover:bg-gray-100 hover:text-primary'>
                    <Link href="/courses" className='flex items-center gap-2'>
                        <span className='hover:text-primary'> View All Courses</span>
                        <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
                {
                    FEATURED_COURSES.slice(0, 3).map((course: any) => (
                        <CoursesPreview key={course.id} course={course} />
                    ))
                }
            </div>
        </div>
    )
}