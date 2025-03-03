"use client";

import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string; // Profile image URL
    quote: string; // The testimonial or quote
    name: string; // Name of the person
    title: string; // Their job or role title
    service: string; // Type of service they offer
  }[]; 
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [items]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 px-8 py-8 md:w-[450px] bg-gradient-to-b from-slate-800 to-slate-900"
            key={idx}
            style={{ minHeight: "350px" }} // Increased card height
          >
            <div className="relative">
              {/* Profile Image */}
              <img
                src={item.image}
                alt={`${item.name} Profile`}
                className="w-20 h-20 rounded-full border-4 border-white absolute top-[-32px] left-4"
              />
            </div>

            {/* Testimonial Content */}
            <div className="text-white mb-4">
              <p className="text-lg italic">"{item.quote}"</p>
            </div>
            <div className="text-white">
              <h3 className="font-semibold text-xl">{item.name}</h3>
              <p className="text-md font-light">{item.title}</p>
              <p className="text-sm text-indigo-400">{item.service}</p> {/* Service type */}
            </div>

            {/* Card Footer */}
            <div className="mt-4 text-white">
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all">
                View Profile
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Mock Data for the Infinite Moving Cards
const mockData = [
  {
    image: "https://randomuser.me/api/portraits/women/72.jpg",
    quote: "GigVerse connected us with amazing talent who helped us scale our startup quickly and efficiently.",
    name: "Sophia Brown",
    title: "CEO & Founder",
    service: "Business Strategy",
  },
  {
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    quote: "The seamless experience with GigVerse allowed us to find skilled data scientists for our AI project.",
    name: "James Taylor",
    title: "Lead Data Scientist",
    service: "Data Science",
  },
  {
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    quote: "As a digital marketing agency, finding the right content writers through GigVerse has been a game-changer.",
    name: "Lily Anderson",
    title: "Marketing Director",
    service: "Content Marketing",
  },
  {
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote: "GigVerse helped us find a UI/UX designer who transformed our website into a modern and user-friendly platform.",
    name: "David Green",
    title: "Product Manager",
    service: "UI/UX Design",
  },
  {
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    quote: "We hired a software developer via GigVerse, and the results exceeded all our expectations. Highly recommended!",
    name: "Samuel White",
    title: "CTO",
    service: "Software Development",
  },
  {
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    quote: "GigVerse helped us find an expert content creator who understood our brand and delivered fantastic results.",
    name: "Emma Harris",
    title: "Creative Director",
    service: "Content Creation",
  },
];

export const ExampleUsage = () => (
  <InfiniteMovingCards
    items={mockData}
    direction="right"
    speed="normal"
    pauseOnHover={true}
  />
);
