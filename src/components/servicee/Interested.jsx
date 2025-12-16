import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Interested = () => {
  return (
    <section className="w-full bg-white text-black pt-16">
      <div className="max-w-[1280px] mx-auto px-4 md:px-0">
        {/* Three column layout on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-black mx-3">
          {/* Column 1 */}
          <div className="md:pr-8 md:border-r md:border-black border-b-black border-b py-10">
            <div className="bg-white w-full h-60 mb-6 flex overflow-hidden items-start justify-center text-black">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717232/first_dyyzet.png"
                alt="first"
                className="object-cover object-top w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-4xl font-bold mb-3">
              Social Strategy & Management
            </h3>
            <p className="text-base text-black mb-4">
              We don't just post, we plan, manage, and grow your brand's
              presence.
            </p>
            <ul className="space-y-3 text-sm text-black">
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Strategy & planning that aligns with your goals
              </li>
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Consistent content creation that gets attention
              </li>
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Publishing and management across platforms
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="md:px-8 md:border-r md:border-black py-10 border-b-black border-b">
            <div className="bg-white w-full h-60 mb-6 flex items-center justify-center text-black">
              <img
                src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717288/second_wt2ss3.png"
                alt="second"
                className="object-fill w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-4xl font-bold mb-3">
              A silo load of UGC Creators
            </h3>
            <p className="text-base text-black mb-4">
              We connect brands with real people. Real content. Scaled with
              strategy.
            </p>
            <ul className="space-y-3 text-sm text-black">
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Campaign ideation & creative briefs
              </li>
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Access to vetted creators worldwide
              </li>
              <li className="flex items-start">
                <span
                  className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                  style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                ></span>
                Usage rights managed & ready-to-post assets
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="md:col-span-2 lg:col-span-1 md:flex md:justify-center md:pl-8 py-10 border-b-black border-b">
            <div className="w-full md:w-[85%] lg:w-full">
              <div className="bg-white w-full h-60 mb-6 flex items-center justify-center text-black">
                <img
                  src="https://res.cloudinary.com/di9tb45rl/image/upload/v1762717293/third_gwfnbk.png"
                  alt="third"
                  className="object-cover object-xcenter w-full h-full"
                  loading="lazy"
                />
              </div>
              <h3 className="text-4xl font-bold mb-3">
                Building Modern Design & Motion
              </h3>
              <p className="text-base text-black mb-4">
                Building intricate designs that move fast and look sharp.
              </p>
              <ul className="space-y-3 text-sm text-black">
                <li className="flex items-start">
                  <span
                    className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  ></span>
                  Branding and identity that sets you apart
                </li>
                <li className="flex items-start">
                  <span
                    className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  ></span>
                  Websites and digital design built for impact
                </li>
                <li className="flex items-start">
                  <span
                    className="inline-block w-3 h-3 mt-1 mr-3 bg-[#FF322E] rotate-[270deg]"
                    style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                  ></span>
                  Animation and motion that stop the scroll
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="optional"
        className="max-w-[1280px] h-auto mx-auto px-4 md:px-0 py-16"
      >
        <div className="mx-3">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Optional add-ons
          </h2>
          <p className="text-base md:text-lg text-black font-semibold mb-8">
            These services support your core campaign and can be added when
            needed.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <span
                className="inline-block w-3 h-3 mt-1.5 mr-4 bg-[#FF322E] rotate-[270deg] flex-shrink-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></span>
              <p className="text-base md:text-lg">Email Marketing</p>
            </div>

            <div className="flex items-start">
              <span
                className="inline-block w-3 h-3 mt-1.5 mr-4 bg-[#FF322E] rotate-[270deg] flex-shrink-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></span>
              <p className="text-base md:text-lg">
                Paid Advertising (Meta, Google, TikTok, Bing)
              </p>
            </div>

            <div className="flex items-start">
              <span
                className="inline-block w-3 h-3 mt-1.5 mr-4 bg-[#FF322E] rotate-[270deg] flex-shrink-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
              ></span>
              <p className="text-base md:text-lg">
                Influencer Campaign Management (talent sourcing, rate
                negotiation, deliverables)
              </p>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="mt-12 ml-5 md:ml-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-transparent border-[1px] border-brand h-[55px] px-8 py-3 text-xs font-semibold  tracking-wide text-brand relative overflow-hidden group"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
              <FaChevronRight className="block text-brand w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-20 group-hover:scale-[140%]" />
            </div>
            <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-60">
              Interested in chat?
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Interested;
