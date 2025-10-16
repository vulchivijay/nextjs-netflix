'use client'

import { useState } from 'react';
import AccordionItem from '../Accordian/page';

type FAQItem = {
  title: string;
  content: string;
};

const faqItems: FAQItem[] = [
  {
    title: 'What is Netflix?',
    content:
      'Netflix is a streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more.',
  },
  {
    title: 'How much does Netflix cost?',
    content:
      'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.',
  },
  {
    title: 'Where can I watch?',
    content:
      'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com.',
  },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold py-5">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </section>
  );
}