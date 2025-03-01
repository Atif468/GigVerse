import NavBar from "./NavBar";
// import { TypewriterEffect  } from "./ui/typewriter-effect";
import { Highlight } from "./ui/hero-highlight";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const LandingPage = () => {
  const testimonials = [
    {
      title: "Web Developer",
    },
    {
      title: "Data Entry",
    },
    {
      title: "Content Wri ter",
    },
    {
      title: "Video Editor",
    },
    {
      title: "Machine Learning",
    },
    {
      title: "Data Science",
    },
    {
      title: "",
    },
  ];

  return (
    <>
      <div className="w-screen">
        <NavBar />
        <div className="features dark py-8 md:py-16 lg:py-24 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex-1 mb-8 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  GigVerse{" "}
                  <em>
                    <span className="font-light">business.</span>
                  </em>
                </h1>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  A solution built for Business
                </h1>
                <p className="mb-4">
                  Upgrade to a curated experience to access vetted talent and
                  exclusive tools
                </p>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Talent matching</span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">
                    Dedicated account management
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">
                    Team collaboration tools
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <img src="/check.png" alt="check" className="w-6 h-6 mr-2" />
                  <span className="font-semibold">
                    Business payment solutions
                  </span>
                </div>
                <button className="inline-flex ring-0 h-12 animate-shimmer items-center justify-center rounded-xl bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
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
        <div className="h-[42rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
