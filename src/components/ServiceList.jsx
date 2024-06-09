// src/components/ServiceList.js
import React from 'react';
import ServiceCard from './ServiceCard';
import './ServiceList.css';

const services = [
  { icon: '📊', title: 'Presentation Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: '🎬', title: 'Audio - Visual Production', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: '🈂️', title: 'Translation Services', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: '🎨', title: 'Graphic Design', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: '🔍', title: 'Research & Analytics', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' },
  { icon: '💻', title: 'Data Processing', description: 'Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet' }
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          icon={service.icon}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServiceList;
