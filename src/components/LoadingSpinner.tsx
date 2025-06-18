
import React from 'react';
import { Plane } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Chargement...', 
  fullScreen = false 
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const spinner = (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative">
        {/* Rotating circle */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 border-t-travel-emerald rounded-full animate-spin`}></div>
        
        {/* Plane icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Plane className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-4 h-4' : 'w-6 h-6'} text-travel-emerald animate-float`} />
        </div>
      </div>
      
      {text && (
        <p className={`text-gray-600 font-medium ${textSizeClasses[size]}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
