import { useNavigate } from "react-router-dom";
import {
  MdOutlineAccessTime,
  MdOutlineKeyboardArrowRight,
  MdOutlineLocationOn,
} from "react-icons/md";
import Section2 from "../components/About/Section2";
import { usePageMeta } from "../hooks/usePageMeta";

const CareerIndex = () => {
  usePageMeta(
    'Careers | Silo Creative - Build Your Future With Us',
    'Join the Silo Creative team and work on exciting UGC projects with leading brands. Explore career opportunities in content creation, strategy, and more.'
  )

  const navigate = useNavigate();

  // Toggle this to true when client wants to show job listings via CMS
  const showJobs = false;

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const handleApplyClick = (e, jobId) => {
    e.stopPropagation(); // Prevent card click when Apply button is clicked
    console.log(`Apply clicked for job ${jobId}`);
    // Add apply logic here
  };

  return (
    <div className="h-auto max-w-[1280px] mt-24 mx-auto px-4 md:px-10 lg:px-10">
      <div className="h-[80vh] md:min-h-screen max-w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 mx-auto mb-0 md:mb-0">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Work at the Silo
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-normal text-black leading-relaxed">
                Want to make ideas happen? Join The Silo - a team of creators
                <br className="hidden sm:block" />
                strategists, and storytellers shaping brands that stand out
                online
              </p>
            </div>

            {/* Empty State - Show when showJobs is false */}
            {!showJobs && (
              <div className="space-y-6 sm:space-y-4 order-2 lg:order-2">
                <div className="bg-white border border-black p-8 sm:p-10 md:p-12 lg:p-16">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">
                    No roles live right now.
                  </h2>
                  <p className="text-base sm:text-lg text-black text-center mb-6">
                    Drop your CV anyway, we like ambitious people.
                  </p>
                  <p className="text-center">
                    <a
                      href="mailto:hello@thesilocreative.com"
                      className="text-brand font-bold text-base sm:text-lg hover:underline"
                    >
                      hello@thesilocreative.com
                    </a>
                  </p>
                </div>
              </div>
            )}

            {/* Job Listings - Hidden by default, ready for CMS */}
            {showJobs && (
              <div className="space-y-6 sm:space-y-4 order-2 lg:order-2">
                {/* Job Card 1 */}
                <div
                  onClick={() => handleJobClick(1)}
                  className="bg-white border border-black p-4 py-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
                >
                  <div className="flex flex-row sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3
                        style={{
                          fontFamily: "Epilogue",
                          fontWeight: 700,
                          fontSize: window.innerWidth < 640 ? "20px" : "24px",
                          lineHeight: "140%",
                          letterSpacing: "0%",
                        }}
                        className="text-black group-hover:text-brand transition-colors duration-200"
                      >
                        Job Title
                      </h3>
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="bg-[#FFDBDB] text-black px-2 py-1 self-start"
                      >
                        Department
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleApplyClick(e, 1)}
                      className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group flex-shrink-0"
                    >
                      <span>Apply Now</span>
                      <span
                        aria-hidden
                        className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      >
                        <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                      </span>
                    </button>
                  </div>

                  <p
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 400,
                      fontSize: window.innerWidth < 640 ? "14px" : "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                    }}
                    className="text-black mb-3 sm:mb-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <MdOutlineLocationOn className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Location
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineAccessTime className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Contract Type
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Card 2 */}
                <div
                  onClick={() => handleJobClick(2)}
                  className="bg-white border border-black p-4 py-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
                >
                  <div className="flex flex-row sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3
                        style={{
                          fontFamily: "Epilogue",
                          fontWeight: 700,
                          fontSize: window.innerWidth < 640 ? "20px" : "24px",
                          lineHeight: "140%",
                          letterSpacing: "0%",
                        }}
                        className="text-black group-hover:text-brand transition-colors duration-200"
                      >
                        Job Title
                      </h3>
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="bg-[#FFDBDB] text-black px-2 py-1 self-start"
                      >
                        Department
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleApplyClick(e, 2)}
                      className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group flex-shrink-0"
                    >
                      <span>Apply Now</span>
                      <span
                        aria-hidden
                        className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      >
                        <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                      </span>
                    </button>
                  </div>

                  <p
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 400,
                      fontSize: window.innerWidth < 640 ? "14px" : "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                    }}
                    className="text-black mb-3 sm:mb-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <MdOutlineLocationOn className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Location
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineAccessTime className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Contract Type
                      </span>
                    </div>
                  </div>
                </div>

                {/* Job Card 3 */}
                <div
                  onClick={() => handleJobClick(3)}
                  className="bg-white border border-black p-4 py-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
                >
                  <div className="flex flex-row sm:flex-row items-start justify-between mb-3 sm:mb-4 gap-3">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                      <h3
                        style={{
                          fontFamily: "Epilogue",
                          fontWeight: 700,
                          fontSize: window.innerWidth < 640 ? "20px" : "24px",
                          lineHeight: "140%",
                          letterSpacing: "0%",
                        }}
                        className="text-black group-hover:text-brand transition-colors duration-200"
                      >
                        Job Title
                      </h3>
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 600,
                          fontSize: "14px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="bg-[#FFDBDB] text-black px-2 py-1 self-start"
                      >
                        Department
                      </span>
                    </div>
                    <button
                      onClick={(e) => handleApplyClick(e, 3)}
                      className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group flex-shrink-0"
                    >
                      <span>Apply Now</span>
                      <span
                        aria-hidden
                        className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                      >
                        <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                      </span>
                    </button>
                  </div>

                  <p
                    style={{
                      fontFamily: "DM Sans",
                      fontWeight: 400,
                      fontSize: window.innerWidth < 640 ? "14px" : "16px",
                      lineHeight: "150%",
                      letterSpacing: "0%",
                    }}
                    className="text-black mb-3 sm:mb-4"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <MdOutlineLocationOn className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Location
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MdOutlineAccessTime className="w-6 h-6 text-black font-thin flex-shrink-0" />
                      <span
                        style={{
                          fontFamily: "DM Sans",
                          fontWeight: 400,
                          fontSize: window.innerWidth < 640 ? "16px" : "18px",
                          lineHeight: "150%",
                          letterSpacing: "0%",
                        }}
                        className="text-black"
                      >
                        Contract Type
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Section2 />
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black mt-20" />
    </div>
  );
};

export default CareerIndex;
