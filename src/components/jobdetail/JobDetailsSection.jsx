import { LuTriangleRight } from "react-icons/lu"
import { TiTick } from "react-icons/ti"

const JobDetailsSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 md:px-10 lg:px-10 py-12 lg:py-20">
    

      {/* Job Details Grid Section */}
      <div className="relative">
        {/* Vertical Line - Spans full height of both sections */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black transform -translate-x-1/2 z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-10 border-t-[1px] border-t-black">
          
          {/* What you'll do */}
          <div className="pr-0 md:pr-8 lg:pr-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              What you'll do
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Build and maintain strong relationships with creators across the UK, South Africa and US.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Work directly with clients to understand their goals and translate them into creative briefs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Match brands with the right creators based on style, reach, and audience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Oversee campaigns from ideation through delivery, ensuring quality and timeliness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Manage content rights, usage, and ready-to-post delivery formats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Provide insight on performance, pulling insights that shape future campaigns.
                </span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="pl-0 md:pl-8 lg:pl-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Competitive salary with performance-based bonuses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Hybrid working setup with flexibility built in.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Access to a growing international creator network.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Opportunity to work on campaigns with Revolut, Ignition, food, and tech brands.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  A team that values creativity, clarity, and bold ideas.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-16 pt-10 border-t-[1px] border-t-black">
          
          {/* Who you are */}
          <div className="pr-0 md:pr-8 lg:pr-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Who you are
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  A strong communicator who can manage both client expectations and creator needs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Organised, detail-oriented, and comfortable running multiple projects at once.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Confident in social platforms, trends, and content formats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Experienced in influencer/UGC management, brand partnerships, or campaign delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Comfortable in a fast-paced, no-fluff environment.
                </span>
              </li>
            </ul>
          </div>

          {/* Who you'll be */}
          <div className="pl-0 md:pl-8 lg:pl-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Who you'll be
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  The go-to person for making brand—creator partnerships run smoothly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  A trusted voice with both clients and creators.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  A driver of campaigns that feel fresh, intentional, and effective.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  Part of a team that pushes brands to stop playing safe and start getting noticed.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsSection
