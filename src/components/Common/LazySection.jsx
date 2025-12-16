import { useInView } from 'react-intersection-observer';

const LazySection = ({ children, className, threshold = 0.1, rootMargin = '50px' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
    rootMargin
  });

  return (
    <div ref={ref} className={className}>
      {inView && children}
    </div>
  );
};

export default LazySection;
