import { useEffect, useState } from 'react';

const ScreenSizeCheck = ({ children }: { children: React.ReactNode }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1100);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isSmallScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Please open this website on a laptop or PC
          </h1>
          <p className="text-gray-600">
            This website is optimized for larger screens with a minimum width of 1100px.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ScreenSizeCheck; 