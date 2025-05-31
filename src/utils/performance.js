// Performance optimization utilities
export const lazyLoadComponent = (importFunc) => {
  return React.lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 150); // Small delay to prevent UI jank
    });
  });
};

// Image optimization
export const getOptimizedImageUrl = (url, width) => {
  // If using a CDN or image optimization service, add the logic here
  return url;
};

// Debounce utility
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer utility
export const createIntersectionObserver = (callback, options = {}) => {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    ...options,
  });
};

// Resource hints
export const addResourceHints = () => {
  const hints = [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
  ];

  hints.forEach(({ rel, href, crossOrigin }) => {
    const link = document.createElement('link');
    link.rel = rel;
    link.href = href;
    if (crossOrigin) link.crossOrigin = crossOrigin;
    document.head.appendChild(link);
  });
};

// Performance monitoring
export const measurePerformance = (metricName, value) => {
  if (window.performance && window.performance.mark) {
    window.performance.mark(`${metricName}-start`);
    // Your code here
    window.performance.mark(`${metricName}-end`);
    window.performance.measure(
      metricName,
      `${metricName}-start`,
      `${metricName}-end`
    );
  }
};

// Cache management
export const setupCache = () => {
  if ('caches' in window) {
    caches.open('portfolio-cache-v1').then((cache) => {
      // Add resources to cache
      return cache.addAll([
        '/',
        '/index.html',
        '/static/js/main.chunk.js',
        '/static/css/main.chunk.css',
      ]);
    });
  }
};

// Error tracking
export const trackError = (error, errorInfo) => {
  // Implement your error tracking logic here
  console.error('Error:', error);
  console.error('Error Info:', errorInfo);
};

// Performance metrics
export const trackMetrics = () => {
  if ('performance' in window) {
    // First Contentful Paint
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcp) {
      console.log('FCP:', fcp.startTime);
    }

    // Largest Contentful Paint
    const lcp = performance.getEntriesByName('largest-contentful-paint')[0];
    if (lcp) {
      console.log('LCP:', lcp.startTime);
    }

    // First Input Delay
    const fid = performance.getEntriesByName('first-input-delay')[0];
    if (fid) {
      console.log('FID:', fid.duration);
    }
  }
}; 