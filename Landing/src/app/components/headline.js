"use client"; // This is a client component 👈🏽
import React from 'react';

export default function HeadLine({ title, description, size = "default" }) {
    // Size variants for the heading
    const sizeClasses = {
        default: "mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold",
        large: "mb-6 md:text-4xl text-3xl lg:text-5xl md:leading-tight leading-tight font-bold",
        xl: "mb-6 md:text-5xl text-4xl lg:text-6xl md:leading-tight leading-tight font-extrabold",
        hero: "mb-8 md:text-6xl text-5xl lg:text-7xl md:leading-none leading-none font-black"
    };

    // Description size variants
    const descriptionClasses = {
        default: "text-slate-400 max-w-xl mx-auto",
        large: "text-slate-400 text-lg max-w-2xl mx-auto",
        xl: "text-slate-400 text-xl max-w-2xl mx-auto",
        hero: "text-slate-400 text-xl md:text-2xl max-w-3xl mx-auto mt-4"
    };

    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h1 className={sizeClasses[size]}>
                    {title}
                </h1>
                {description && (
                    <p className={descriptionClasses[size]}>{description}</p>
                )}
            </div>
        </div>
    );
}