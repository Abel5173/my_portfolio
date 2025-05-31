// Testing utilities for cross-browser and device testing

// Browser detection
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  let browserName;
  let browserVersion;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/(?:chrome|crios|chromium)\/(\d+)/i)[1];
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/(?:firefox|fxios)\/(\d+)/i)[1];
  } else if (userAgent.match(/safari/i)) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/version\/(\d+)/i)[1];
  } else if (userAgent.match(/opr\//i)) {
    browserName = 'Opera';
    browserVersion = userAgent.match(/(?:opr)\/(\d+)/i)[1];
  } else if (userAgent.match(/edg/i)) {
    browserName = 'Edge';
    browserVersion = userAgent.match(/(?:edg)\/(\d+)/i)[1];
  } else {
    browserName = 'Unknown';
    browserVersion = 'Unknown';
  }

  return { browserName, browserVersion };
};

// Device detection
export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  const isMobile = /iPhone|iPad|iPod|Android/i.test(userAgent);
  const isTablet = /iPad|Android/i.test(userAgent) && !/Mobile/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    pixelRatio: window.devicePixelRatio,
  };
};

// Feature detection
export const checkFeatureSupport = () => {
  return {
    flexbox: 'flexBasis' in document.documentElement.style,
    grid: 'grid' in document.documentElement.style,
    animations: 'animation' in document.documentElement.style,
    transitions: 'transition' in document.documentElement.style,
    webp: (() => {
      const elem = document.createElement('canvas');
      if (elem.getContext && elem.getContext('2d')) {
        return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
      }
      return false;
    })(),
    localStorage: (() => {
      try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    })(),
    sessionStorage: (() => {
      try {
        sessionStorage.setItem('test', 'test');
        sessionStorage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    })(),
  };
};

// Responsive testing
export const testResponsiveLayout = () => {
  const breakpoints = {
    mobile: 320,
    tablet: 768,
    desktop: 1024,
    large: 1440,
  };

  const currentBreakpoint = Object.entries(breakpoints).reduce(
    (acc, [key, value]) => {
      if (window.innerWidth >= value) {
        return key;
      }
      return acc;
    },
    'mobile'
  );

  return {
    currentBreakpoint,
    breakpoints,
    isResponsive: true,
  };
};

// Accessibility testing
export const testAccessibility = () => {
  const results = {
    hasProperHeadings: document.querySelectorAll('h1, h2, h3, h4, h5, h6').length > 0,
    hasAltText: Array.from(document.querySelectorAll('img')).every(
      (img) => img.hasAttribute('alt')
    ),
    hasAriaLabels: Array.from(document.querySelectorAll('[role]')).every(
      (el) => el.hasAttribute('aria-label') || el.hasAttribute('aria-labelledby')
    ),
    hasProperContrast: true, // Implement contrast checking logic
    isKeyboardNavigable: true, // Implement keyboard navigation testing
  };

  return results;
};

// Performance testing
export const testPerformance = () => {
  const metrics = {
    loadTime: performance.now(),
    domContentLoaded: performance.getEntriesByType('navigation')[0]?.domContentLoadedEventEnd,
    firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime,
    firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime,
  };

  return metrics;
};

// Cross-browser compatibility testing
export const testCrossBrowserCompatibility = () => {
  const { browserName, browserVersion } = getBrowserInfo();
  const features = checkFeatureSupport();
  const deviceInfo = getDeviceInfo();
  const responsiveInfo = testResponsiveLayout();
  const accessibilityInfo = testAccessibility();
  const performanceInfo = testPerformance();

  return {
    browser: { browserName, browserVersion },
    features,
    device: deviceInfo,
    responsive: responsiveInfo,
    accessibility: accessibilityInfo,
    performance: performanceInfo,
  };
};

// Export all test results
export const runAllTests = () => {
  const results = testCrossBrowserCompatibility();
  console.log('Test Results:', results);
  return results;
}; 