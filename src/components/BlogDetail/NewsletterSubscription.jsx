import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function NewsletterSubscription({
  onSubmit,
  isSubmitting,
  message,
  messageType,
  containerRef,
}) {
  const newsletterRef = useRef(null);
  const wrapperRef = useRef(null);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Handle form submission here
      console.log("Newsletter subscription:", values.email);

      // Get existing data from localStorage
      const existingData = JSON.parse(
        localStorage.getItem("newsletterSubscriptions") || "[]"
      );

      // Add new subscription with timestamp
      const newSubscription = {
        email: values.email,
        submittedAt: new Date().toISOString(),
      };

      // Add to array and store in localStorage
      const updatedData = [...existingData, newSubscription];
      localStorage.setItem(
        "newsletterSubscriptions",
        JSON.stringify(updatedData)
      );

      // Log all stored data
      console.log("All newsletter subscriptions:", updatedData);

      // Show success toast
      toast.success("Successfully subscribed to newsletter!");

      // Reset form
      resetForm();
      setSubmitting(false);

      // Reload page after successful submit
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  });

  useEffect(() => {
    // Check if mobile
    if (window.innerWidth < 640) return;

    const newsletterEl = newsletterRef.current;
    const containerEl = containerRef.current;

    gsap.set(newsletterEl, { y: 0 });

    const buffer = -8; // Adjust this value as needed for perfect alignment
    const st = ScrollTrigger.create({
      trigger: containerEl,
      start: "top 86px",
      end: () =>
        containerEl.offsetHeight - newsletterEl.offsetHeight + buffer <= 0
          ? "+=0"
          : `+=${
              containerEl.offsetHeight - newsletterEl.offsetHeight + buffer
            }`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxY =
          containerEl.offsetHeight - newsletterEl.offsetHeight + buffer;
        gsap.to(newsletterEl, {
          y: progress * maxY,
          ease: "none",
          duration: 0,
        });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.refresh();
    };
  }, [containerRef]);

  return (
    <div ref={wrapperRef} className="relative" style={{ minHeight: "320px" }}>
      <div
        ref={newsletterRef}
        className="bg-white border-[1px] mt-10 border-black p-6 relative sm:absolute"
      >
        <h3 className="text-xl font-bold text-black mb-3">
          Subscribe to newsletter
        </h3>
        <p className="text-base font-normal text-black mb-5 leading-relaxed">
          Subscribe to receive the latest blog posts to your inbox every week.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
              className={`w-full border px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-black"
              }`}
              disabled={formik.isSubmitting}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="w-full bg-red-500 text-white px-4 py-3 font-medium hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {formik.isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
        <p className="text-xs text-black mt-3">
          By subscribing you agree to with our{" "}
          <a href="/privacy-policy" className="underline hover:text-black">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
