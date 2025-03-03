"use client";

import NavBar from "./NavBar";
import BottomBar from "./BottomBar"; // Import the BottomBar component
import { TypewriterEffect  } from "./ui/typewriter-effect";
import { Highlight } from "./ui/hero-highlight";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const LandingPage = () => {
  const testimonials = [
    {
      title: "Web Developer",
      text: "GigVerse helped me find the perfect talent for my startup. The process was seamless and professional.",
      author: "John Doe, Founder at TechVibes"
    },
    {
      title: "Data Entry",
      text: "I hired a highly skilled data entry professional who delivered results faster than expected.",
      author: "Jane Smith, CEO of DataFlow"
    },
    {
      title: "Content Writer",
      text: "Finding the right content writer was easy, and the quality exceeded our expectations.",
      author: "Alice Green, Marketing Manager at GreenTech"
    },
    {
      title: "Video Editor",
      text: "The platform made it simple to find a video editor who understood our vision and delivered quickly.",
      author: "Mike Miller, Founder of VideoBoost"
    },
    {
      title: "Machine Learning",
      text: "GigVerse connected us with top machine learning experts, delivering insightful and actionable solutions.",
      author: "Emily White, CTO at ML Innovations"
    },
    {
      title: "Data Science",
      text: "We found exceptional data scientists through GigVerse, who helped us drive our business forward.",
      author: "David Black, Director of Data Science at DataFusion"
    }
  ];

  return (
    <>
      <div className="w-screen">
        <NavBar />

        {/* Features Section */}
        <div className="features dark py-8 md:py-16 lg:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-8 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  GigVerse{" "}
                  <em>
                    <span className="font-light">Business</span>
                  </em>
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-6">
                  Empower Your Business with Top Talent & Exclusive Tools
                </h2>
                <p className="mb-4">
                  Get access to a curated experience designed for growth with dedicated account management, expert talent matching, and team collaboration tools.
                </p>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Talent Matching</span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Dedicated Account Management</span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Team Collaboration Tools</span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Business Payment Solutions</span>
                </div>
                <button
                  className="inline-flex ring-0 h-12 animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105"
                  onClick={() => window.location.href = "/explore-business"}
                >
                  <Highlight className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
                    Explore GigVerse Business
                  </Highlight>
                </button>
              </div>
              <div className="flex-1">
                <img
                  src="images/business-desktop-870-x1.webp"
                  alt="business"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works py-8 md:py-16 lg:py-24 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="step">
                <h3 className="font-semibold text-xl mb-2">Sign Up</h3>
                <p>Create your account quickly and securely to start your journey with GigVerse.</p>
              </div>
              <div className="step">
                <h3 className="font-semibold text-xl mb-2">Find Talent</h3>
                <p>Browse through a curated list of top professionals to find the perfect fit for your business.</p>
              </div>
              <div className="step">
                <h3 className="font-semibold text-xl mb-2">Hire & Collaborate</h3>
                <p>Start collaborating with your new team member and manage your projects efficiently.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="h-[42rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        
        {/* Bottom Bar Section */}
        <BottomBar />  {/* Add the BottomBar here at the bottom of the page */}
      </div>
    </>
  );
};

export default LandingPage;
