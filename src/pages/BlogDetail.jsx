import { useParams } from 'react-router-dom';
import { useState, useRef } from 'react';
import Hero from '../components/BlogDetail/Hero';
import NewsletterSubscription from '../components/BlogDetail/NewsletterSubscription';
import { LuTriangleRight } from 'react-icons/lu';
import { blogDetailsData } from '../data/blogDetailsData';
import { usePageMeta } from '../hooks/usePageMeta';

export default function BlogDetail() {
  const { id } = useParams();
  const contentContainerRef = useRef(null);
  const [subscriptionState, setSubscriptionState] = useState({
    email: '',
    isSubmitting: false,
    message: '',
    messageType: ''
  });

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Please enter a valid email address.',
        messageType: 'error'
      });
      return;
    }

    setSubscriptionState(prev => ({
      ...prev,
      isSubmitting: true,
      message: '',
      messageType: ''
    }));

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', email);
      
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Successfully subscribed to newsletter!',
        messageType: 'success'
      });
    } catch (error) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Failed to subscribe. Please try again.',
        messageType: 'error'
      });
    }
  };

  // Blog data matching the structure from Ramblings page
  const blogPosts = blogDetailsData;

  const blogPost = blogPosts[id];

  usePageMeta(
    blogPost ? `${blogPost.title || 'Blog Post'} | Silo Creative Ramblings` : 'Blog Post | Silo Creative',
    blogPost ? (blogPost.metaDescription || blogPost.excerpt || 'Read the latest insights and ideas from Silo Creative on UGC, content strategy, and digital marketing.') : 'Read the latest insights and ideas from Silo Creative.'
  )

  // Handle case where blog post is not found
  if (!blogPost) {
    return (
      <div className="bg-white min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
            <p className="text-black mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/blog" 
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              ← Back to Ramblings
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white mt-20 min-h-[20vh]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-0 py-4">
        {/* Breadcrumb Navigation */}

        {/* Hero Section */}
        <Hero blogPost={blogPost} />

        {/* Content Container - wraps all scrollable content */}
        <div ref={contentContainerRef}>
        {/* Introduction and Newsletter Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Left Column - Introduction Content (2/3 width) */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {blogPost.content?.introduction?.title || 'Introduction'}
            </h2>
            <div className="space-y-4 text-black leading-relaxed">
              {blogPost.content?.introduction?.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              )) || (
                <>
                  <p>
                    Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.
                  </p>
                  <p>
                    Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right Column - Newsletter Subscription (1/3 width) */}
          <div className="lg:col-span-1">
            <NewsletterSubscription 
              onSubmit={handleNewsletterSubmit}
              isSubmitting={subscriptionState.isSubmitting}
              message={subscriptionState.message}
              messageType={subscriptionState.messageType}
              containerRef={contentContainerRef}
            />
          </div>
        </div>

        {/* Content Image Section - Matches left column width */}
        {blogPost.content?.contentImage && (
          <div className="mt-12 lg:max-w-[66.666%]">
            <div className="bg-white aspect-video overflow-hidden flex items-center justify-center">
              <img
                src={blogPost.content.contentImage.src}
                alt={blogPost.content.contentImage.alt}
                className="w-full h-full object-cover" loading="lazy" />
            </div>
            {blogPost.content.contentImage.caption && (
              <p className="text-sm text-black mt-2 flex items-center gap-1">
                <span className="mx-1" style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 0,16 16,16" fill="black" stroke="black" strokeWidth="1" />
                  </svg>
                </span> {blogPost.content.contentImage.caption}
              </p>
            )}
          </div>
        )}

        {/* Additional Content Paragraphs */}
        <div className="mt-12 lg:max-w-[66.666%]">
          <div className="space-y-4 text-black leading-relaxed">
            <p>
              Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.
            </p>
            <p>
              Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
            </p>
          </div>
        </div>

        {/* Quote Section */}
        {blogPost.content?.quote && (
          <div className="mt-12 border border-black p-8 lg:max-w-[66.666%]">
            <blockquote className="text-lg md:text-xl text-black leading-relaxed mb-4">
              "{blogPost.content.quote.text}"
            </blockquote>
            {blogPost.content.quote.author && (
              <p className="text-sm text-black flex items-center gap-1">
                <span><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="0,0 0,16 16,16" fill="black" stroke="black" strokeWidth="1" />
                  </svg></span> {blogPost.content.quote.author}
              </p>
            )}
          </div>
        )}

        {/* Conclusion Section */}
        {blogPost.content?.conclusion && (
          <div className="mt-16 lg:max-w-[66.666%]">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {blogPost.content.conclusion.title}
            </h2>
            <div className="space-y-4 text-black leading-relaxed">
              {blogPost.content.conclusion.paragraphs?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        )}
        </div>
        {/* End Content Container */}
      </div>
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black mt-10" />
    </div>
  );
}