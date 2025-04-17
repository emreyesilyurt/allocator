"use client"; // This is a client component 👈🏽

import React from 'react';

export default function WhoItsFor({ title, description, people }) {
    return (
        <div className="container md:mt-24 mt-16">
            <div className="grid grid-cols-1 text-center">
                <h3 className="mb-4 md:text-3xl text-2xl md:leading-snug leading-snug font-semibold">
                    {title}
                </h3>
                <p className="text-slate-400 max-w-xl mx-auto">{description}</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-center">
                {people.map((person, index) => (
                    <div
                        key={index}
                        className="p-5 bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 rounded-lg shadow-sm dark:shadow-gray-800 text-slate-800 dark:text-white font-medium text-base"
                    >
                        {person}
                    </div>
                ))}
            </div>
        </div>
    );
}
