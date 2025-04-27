import React from 'react';
import heroImage from '../../assets/images/ea4a31389d4a5701e70735cf16c0c5bf5de76482.png';

const HeroImage: React.FC = () => (
  <img
    src={heroImage}
    alt="AI Agent Toolkit Hero"
    className="hidden lg:block absolute -scale-x-100 w-2/3 md:w-1/2 lg:w-1/3 h-auto top-[-20%] right-8 object-contain rounded-none shadow-lg"
  />
);

export default HeroImage; 