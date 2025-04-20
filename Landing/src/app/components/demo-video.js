"use client";
import React from "react";

export default function DashboardDemoVideo({ src, poster }) {
  return (
    <section className="w-full bg-transparent py-16 px-4 flex justify-center">
      <div className="max-w-6xl w-full aspect-video relative overflow-hidden rounded-xl shadow-xl">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
