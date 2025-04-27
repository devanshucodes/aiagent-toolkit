import React from 'react';

interface RatingProps {
  value: number;
  maxValue?: number;
}

const Rating: React.FC<RatingProps> = ({ value, maxValue = 5 }) => {
  const bars = Array.from({ length: maxValue }, (_, i) => i < value);
  
  return (
    <div className="flex gap-0.5">
      {bars.map((filled, index) => (
        <div 
          key={index}
          className={`h-3 w-1.5 ${filled ? 'bg-red-600' : 'bg-gray-800'}`}
        />
      ))}
    </div>
  );
};

export default Rating;