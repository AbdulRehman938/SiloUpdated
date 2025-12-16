import { useParams } from 'react-router-dom'
import Hero from '../components/poststudy/Hero'
import TitleWithDescription from '../components/poststudy/TitleWithDescription'
import StatsSection from '../components/poststudy/StatsSection'
import FullScreenImage from '../components/poststudy/FullScreenImage'
import GalleryWithText from '../components/poststudy/GalleryWithText'
import SimpleHeadingText from '../components/poststudy/SimpleHeadingText'
import FourGallery from '../components/poststudy/FourGallery'
import Section from '../components/Home/Section'
import { usePageMeta } from '../hooks/usePageMeta'

const PostCaseStudy = () => {
  const { id } = useParams()

  // Case study data objects - each with unique content
  const caseStudies = {
    1: {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "RetailCo",
      category: "E-commerce",
      titleSection: {
        title: "Transforming online shopping",
        description: [
          "RetailCo approached us with a challenge: their e-commerce platform was outdated, slow, and converting poorly. Users were abandoning carts at an alarming rate, and the mobile experience was practically unusable.",
          "We rebuilt their entire platform from the ground up, focusing on speed, intuitive navigation, and a seamless checkout process. The results exceeded all expectations, with conversion rates jumping 45% and cart abandonment dropping by 32%."
        ]
      },
      stats: {
        title: "The numbers that matter",
        column1: {
          heading: 'Conversion Rate Increase',
          value: '45%',
          description: 'More visitors completing purchases through optimized user flows and streamlined checkout.'
        },
        column2: {
          image: { src: null, alt: 'E-commerce analytics dashboard' },
          stat: {
            heading: 'Cart Abandonment Reduction',
            value: '32%',
            description: 'Fewer abandoned carts thanks to improved mobile experience and faster load times.'
          }
        },
        column3: {
          stat: {
            heading: 'Average Order Value',
            value: '+28%',
            description: 'Increased through better product recommendations and upselling strategies.'
          },
          image: { src: null, alt: 'Revenue growth chart' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "E-commerce platform showcase"
      },
      galleryWithText: {
        heading: "Mobile-first design that converts",
        text: "With 68% of their traffic coming from mobile devices, we prioritized the mobile experience. Every interaction was optimized for touch, every page load was lightning fast, and the checkout process was reduced to just three taps. The desktop experience was equally refined, with large product imagery and intuitive filtering.",
        images: [
          { src: null, alt: "Mobile product page" },
          { src: null, alt: "Checkout flow" },
          { src: null, alt: "Product gallery" }
        ]
      },
      simpleHeadingText: {
        heading: "A platform built for scale and speed",
        text: [
          "Behind the beautiful interface lies a robust technical foundation. We implemented a headless commerce architecture, allowing for blazing-fast page loads and seamless integration with their existing inventory management system.",
          "The platform now handles 10x the traffic during peak sales periods without breaking a sweat. Real-time inventory updates, personalized product recommendations, and a sophisticated search algorithm all work together to create an experience that keeps customers coming back."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Homepage hero" },
          { src: null, alt: "Category page" },
          { src: null, alt: "Product detail" },
          { src: null, alt: "Shopping cart" }
        ]
      }
    },
    2: {
      id: 2,
      title: "Brand Refresh Campaign",
      client: "TechStart Inc",
      category: "Branding",
      titleSection: {
        title: "A bold rebrand that sparked 2.3M impressions in 30 days.",
        description: [
          "TechStart Inc was ready to shed their startup image and position themselves as industry leaders. Their existing brand felt dated and didn't reflect the innovative solutions they were creating.",
          "We developed a comprehensive brand refresh that included a new visual identity, messaging framework, and a multi-channel launch campaign. The response was immediate and overwhelming, generating 2.3 million impressions and a 156% increase in social media engagement."
        ]
      },
      stats: {
        title: "Campaign performance highlights",
        column1: {
          heading: 'Total Impressions',
          value: '2.3M',
          description: 'Reached across social media, digital advertising, and PR placements in first 30 days.'
        },
        column2: {
          image: { src: null, alt: 'Social media engagement metrics' },
          stat: {
            heading: 'Engagement Rate Increase',
            value: '156%',
            description: 'Higher engagement across all social platforms with new brand content and messaging.'
          }
        },
        column3: {
          stat: {
            heading: 'Follower Growth',
            value: '+89%',
            description: 'Organic follower growth driven by compelling brand storytelling and visual identity.'
          },
          image: { src: null, alt: 'Brand awareness graph' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "Brand refresh campaign showcase"
      },
      galleryWithText: {
        heading: "A visual identity that demands attention",
        text: "The new brand system is bold, modern, and unmistakably TechStart. We created a vibrant color palette, custom typography, and a flexible design system that works across every touchpoint. From business cards to billboards, the brand feels cohesive and confident.",
        images: [
          { src: null, alt: "Logo variations" },
          { src: null, alt: "Brand guidelines" },
          { src: null, alt: "Marketing materials" }
        ]
      },
      simpleHeadingText: {
        heading: "More than just a pretty face",
        text: [
          "The rebrand wasn't just about aesthetics. We conducted extensive market research, competitor analysis, and stakeholder interviews to ensure the new brand positioning resonated with their target audience.",
          "The messaging framework we developed gave TechStart a clear, compelling voice that differentiates them in a crowded market. Every piece of content now reinforces their position as innovative problem-solvers who put customers first."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Brand launch event" },
          { src: null, alt: "Social media campaign" },
          { src: null, alt: "Website redesign" },
          { src: null, alt: "Print collateral" }
        ]
      }
    },
    3: {
      id: 3,
      title: "Mobile App Launch",
      client: "FitLife",
      category: "Mobile App",
      titleSection: {
        title: "From concept to 100K downloads in 60 days.",
        description: [
          "FitLife had a vision for a fitness app that would actually keep users motivated. The market was saturated with fitness apps, but most had terrible retention rates. They needed something different.",
          "We designed and developed a gamified fitness experience that makes working out addictive. With personalized workout plans, social challenges, and achievement systems, FitLife hit 100,000 downloads in just 60 days and maintains a 72% 30-day retention rate."
        ]
      },
      stats: {
        title: "Launch metrics that exceeded goals",
        column1: {
          heading: 'Downloads in 60 Days',
          value: '100K',
          description: 'Organic and paid user acquisition through App Store optimization and targeted campaigns.'
        },
        column2: {
          image: { src: null, alt: 'App usage analytics' },
          stat: {
            heading: '30-Day Retention Rate',
            value: '72%',
            description: 'Industry-leading retention through gamification and personalized content.'
          }
        },
        column3: {
          stat: {
            heading: 'Daily Active Users',
            value: '68K',
            description: 'Consistent daily engagement with an average session time of 24 minutes.'
          },
          image: { src: null, alt: 'User engagement chart' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "FitLife mobile app showcase"
      },
      galleryWithText: {
        heading: "Designed for motivation, built for performance",
        text: "Every screen was crafted to encourage action. Bold typography, vibrant colors, and smooth animations create an energetic experience that matches the intensity of a great workout. The interface is intuitive enough for beginners but powerful enough for fitness enthusiasts.",
        images: [
          { src: null, alt: "Workout tracking screen" },
          { src: null, alt: "Social challenges" },
          { src: null, alt: "Achievement system" }
        ]
      },
      simpleHeadingText: {
        heading: "Technology that keeps users coming back",
        text: [
          "The app uses machine learning to personalize workout recommendations based on user behavior, fitness level, and goals. Push notifications are intelligently timed to maximize engagement without being annoying.",
          "We built a robust backend that handles real-time leaderboards, social features, and workout tracking for hundreds of thousands of users. The app syncs seamlessly with popular fitness wearables and integrates with Apple Health and Google Fit."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Onboarding flow" },
          { src: null, alt: "Workout library" },
          { src: null, alt: "Progress tracking" },
          { src: null, alt: "Social features" }
        ]
      }
    },
    4: {
      id: 4,
      title: "Content Marketing Strategy",
      client: "B2B Solutions",
      category: "Content Marketing",
      titleSection: {
        title: "Driving 340% organic traffic growth through strategic content.",
        description: [
          "B2B Solutions had a great product but zero online visibility. Their website was a ghost town, and they were completely dependent on expensive paid advertising to generate leads.",
          "We developed and executed a comprehensive content marketing strategy that positioned them as thought leaders in their industry. Through strategic SEO, high-quality blog content, and targeted lead magnets, we grew their organic traffic by 340% and reduced their cost per lead by 62%."
        ]
      },
      stats: {
        title: "Content performance over 12 months",
        column1: {
          heading: 'Organic Traffic Growth',
          value: '340%',
          description: 'Increased monthly organic visitors through SEO-optimized content and strategic keyword targeting.'
        },
        column2: {
          image: { src: null, alt: 'Traffic growth analytics' },
          stat: {
            heading: 'Lead Conversion Rate',
            value: '8.2%',
            description: 'High-quality leads generated through gated content and strategic CTAs.'
          }
        },
        column3: {
          stat: {
            heading: 'Cost Per Lead Reduction',
            value: '62%',
            description: 'Decreased reliance on paid advertising through organic lead generation.'
          },
          image: { src: null, alt: 'Lead generation metrics' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "Content marketing campaign showcase"
      },
      galleryWithText: {
        heading: "Content that educates and converts",
        text: "We created a content library of in-depth guides, case studies, and industry insights that actually help their target audience solve real problems. Each piece is optimized for search engines and designed to move readers through the buyer's journey, from awareness to decision.",
        images: [
          { src: null, alt: "Blog article layout" },
          { src: null, alt: "Lead magnet design" },
          { src: null, alt: "Email nurture sequence" }
        ]
      },
      simpleHeadingText: {
        heading: "A data-driven approach to content creation",
        text: [
          "Every piece of content was informed by keyword research, competitor analysis, and customer interviews. We identified content gaps in their industry and created comprehensive resources that now rank on page one for dozens of high-value keywords.",
          "The content strategy included blog posts, whitepapers, webinars, and email nurture sequences. We tracked every metric, continuously optimized based on performance data, and doubled down on what worked. The result is a sustainable lead generation engine that keeps delivering."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Content calendar" },
          { src: null, alt: "SEO performance" },
          { src: null, alt: "Lead magnet library" },
          { src: null, alt: "Email campaign results" }
        ]
      }
    },
    5: {
      id: 5,
      title: "UGC Creator Campaign",
      client: "BeautyBrand",
      category: "UGC & Influencer",
      titleSection: {
        title: "Authentic content that drove 4.2M views and 18% sales lift.",
        description: [
          "BeautyBrand was struggling to stand out in an oversaturated market. Their polished, studio-produced content wasn't resonating with their Gen Z and Millennial audience who craved authenticity.",
          "We orchestrated a UGC creator campaign featuring 50 diverse creators who showcased the products in real, relatable scenarios. The authentic content generated 4.2 million views, drove an 18% increase in sales, and built a community of brand advocates."
        ]
      },
      stats: {
        title: "Campaign impact in 90 days",
        column1: {
          heading: 'Total Video Views',
          value: '4.2M',
          description: 'Organic reach across TikTok, Instagram Reels, and YouTube Shorts from creator content.'
        },
        column2: {
          image: { src: null, alt: 'Social media engagement dashboard' },
          stat: {
            heading: 'Engagement Rate',
            value: '12.8%',
            description: 'Significantly higher than industry average through authentic, relatable content.'
          }
        },
        column3: {
          stat: {
            heading: 'Sales Increase',
            value: '+18%',
            description: 'Direct sales lift attributed to UGC campaign through tracked links and promo codes.'
          },
          image: { src: null, alt: 'Sales performance graph' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "UGC creator campaign showcase"
      },
      galleryWithText: {
        heading: "Real people, real results, real impact",
        text: "We carefully selected creators who genuinely loved the products and whose audiences aligned with BeautyBrand's target demographic. Each creator was given creative freedom to showcase the products in their own authentic style, resulting in content that felt genuine rather than like traditional advertising.",
        images: [
          { src: null, alt: "Creator content compilation" },
          { src: null, alt: "Behind the scenes" },
          { src: null, alt: "Community engagement" }
        ]
      },
      simpleHeadingText: {
        heading: "Building a sustainable creator ecosystem",
        text: [
          "This wasn't a one-off campaign. We built a creator program that continues to generate fresh, authentic content month after month. We developed creator briefs that balance brand guidelines with creative freedom, established fair compensation structures, and created a community where creators feel valued.",
          "The content library we built is now being repurposed across all of BeautyBrand's marketing channels—from paid social ads to email campaigns to website product pages. The authentic testimonials and real-world product demonstrations have become their most valuable marketing assets."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Creator partnership kickoff" },
          { src: null, alt: "Content creation process" },
          { src: null, alt: "Top performing videos" },
          { src: null, alt: "Community celebration" }
        ]
      }
    },
    6: {
      id: 6,
      title: "Social Media Strategy",
      client: "GrowthTech",
      category: "Social Media",
      titleSection: {
        title: "Building a social presence that generated 850K followers in 6 months.",
        description: [
          "GrowthTech had an incredible product but virtually no social media presence. Their competitors were dominating the conversation while they sat on the sidelines with a few hundred followers and sporadic posting.",
          "We developed a comprehensive social media strategy that transformed them into an industry thought leader. Through strategic content pillars, consistent posting, community engagement, and data-driven optimization, we grew their following to 850,000 across platforms and generated over $2M in attributed revenue."
        ]
      },
      stats: {
        title: "Social growth in 6 months",
        column1: {
          heading: 'Total Followers Gained',
          value: '850K',
          description: 'Organic growth across Instagram, LinkedIn, TikTok, and Twitter through strategic content.'
        },
        column2: {
          image: { src: null, alt: 'Social media analytics dashboard' },
          stat: {
            heading: 'Average Engagement Rate',
            value: '9.4%',
            description: 'Consistently high engagement through community-focused content and active interaction.'
          }
        },
        column3: {
          stat: {
            heading: 'Attributed Revenue',
            value: '$2M+',
            description: 'Direct revenue tracked from social media traffic through UTM parameters and conversion tracking.'
          },
          image: { src: null, alt: 'Revenue attribution chart' }
        }
      },
      fullScreenImage: {
        src: null,
        alt: "Social media strategy showcase"
      },
      galleryWithText: {
        heading: "Content that educates, entertains, and converts",
        text: "We developed five core content pillars that positioned GrowthTech as the go-to resource in their industry. From educational carousel posts to behind-the-scenes stories to thought leadership articles, every piece of content served a strategic purpose while maintaining an authentic, approachable voice.",
        images: [
          { src: null, alt: "Content calendar overview" },
          { src: null, alt: "Top performing posts" },
          { src: null, alt: "Community engagement" }
        ]
      },
      simpleHeadingText: {
        heading: "Strategy backed by data, powered by creativity",
        text: [
          "Every decision was informed by analytics. We A/B tested content formats, posting times, captions, and hashtag strategies. We monitored competitor activity, tracked trending topics, and jumped on relevant conversations at the perfect moment. The result was a feed that felt spontaneous but was actually meticulously planned.",
          "We didn't just post and ghost. We built a community by responding to every comment, engaging with followers' content, and creating opportunities for user-generated content. The social channels became a two-way conversation that strengthened customer relationships and turned followers into brand advocates."
        ]
      },
      fourGallery: {
        images: [
          { src: null, alt: "Instagram feed design" },
          { src: null, alt: "LinkedIn thought leadership" },
          { src: null, alt: "TikTok viral content" },
          { src: null, alt: "Community highlights" }
        ]
      }
    }
  }

  const caseStudy = caseStudies[id]

  usePageMeta(
    caseStudy ? `${caseStudy.title} - Case Study | Silo Creative` : 'Case Study | Silo Creative',
    caseStudy ? `Discover how Silo Creative helped ${caseStudy.client} achieve amazing results. Read the full case study and see the impact of our UGC strategies.` : 'Explore our case studies and see how we help brands succeed with UGC and content creation.'
  )

  // Handle case where case study is not found
  if (!caseStudy) {
    return (
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-[1280px] px-6 md:px-0 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Case Study Not Found</h1>
            <p className="text-black mb-8">The case study you're looking for doesn't exist.</p>
            <a 
              href="/case-studies" 
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              ← Back to Case Studies
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='w-full h-auto bg-white mb-20'>
      {/* Video Hero */}
      <Hero />
      
      {/* Modular Sections - Can be reordered as needed */}
      <TitleWithDescription 
        title={caseStudy.titleSection.title}
        description={caseStudy.titleSection.description}
      />
      
      <StatsSection 
        title={caseStudy.stats.title}
        column1={caseStudy.stats.column1}
        column2={caseStudy.stats.column2}
        column3={caseStudy.stats.column3}
      />
      
      <FullScreenImage 
        src={caseStudy.fullScreenImage.src}
        alt={caseStudy.fullScreenImage.alt}
      />
      
      <GalleryWithText 
        heading={caseStudy.galleryWithText.heading}
        text={caseStudy.galleryWithText.text}
        images={caseStudy.galleryWithText.images}
      />
      
      <SimpleHeadingText 
        heading={caseStudy.simpleHeadingText.heading}
        text={caseStudy.simpleHeadingText.text}
      />
      
      <FourGallery 
        images={caseStudy.fourGallery.images}
      />
      <Section />
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black mt-10" />
    </div>
  )
}

export default PostCaseStudy