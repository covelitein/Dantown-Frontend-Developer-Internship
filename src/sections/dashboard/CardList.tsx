'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react';

const cardData = [
  {
    title: 'Real Wild Cyclist',
    description: 'We are the wildest cyclist.',
    imgSrc: '/imgs/1.png',
    imgWidth: 'w-[9.8rem]',
  },
  {
    title: 'Yoga Forces',
    description: 'Welcome to the biggest...',
    imgSrc: '/imgs/2.png',
    imgWidth: 'w-[7rem]',
  },
  {
    title: 'Skater Boys',
    description: 'The best states of skaters.',
    imgSrc: '/imgs/3.png',
    imgWidth: 'w-[9rem]',
  },
];

const CardItem = ({ title, description, imgSrc, imgWidth }: { 
  title: string; 
  description: string; 
  imgSrc: string; 
  imgWidth: string; 
}) => (
  <Card className="border-none rounded-xl overflow-hidden">
    <CardHeader className="bg-[#E0F3F3] flex items-center justify-center">
      <img src={imgSrc} className={`${imgWidth} object-cover`} alt={title} />
    </CardHeader>
    <CardContent className="pt-3">
      <h2 className="text-base text-center text-[#0F3F62]">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
    </CardContent>
  </Card>
);

export default function CardList() {
  return (
    <section className="grid sm:grid-cols-3 sm:pr-5 pr-2 pl-2 gap-4">
      {cardData.map((card, index) => (
        <CardItem 
          key={index} 
          title={card.title} 
          description={card.description} 
          imgSrc={card.imgSrc} 
          imgWidth={card.imgWidth} 
        />
      ))}
    </section>
  );
}
