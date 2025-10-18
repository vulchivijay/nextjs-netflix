"use client"

import { useState } from "react";
import AccordionItem from "../Accordion";

type FAQItem = { title: string; content: string };

const faqItems: FAQItem[] = [
  { title: "What is Netflix?", content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more. Watch anywhere on many devices." },
  { title: "How much does Netflix cost?", content: "Plans range from $7.99 to $24.99 a month (pre-tax). No contracts." },
  { title: "Where can I watch?", content: "Watch anywhere, anytime on web and apps; downloads available on mobile." },
  { title: "How do I cancel?", content: "Cancel anytime online. No cancellation fees." },
  { title: "What can I watch on Netflix?", content: "Feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more." },
  { title: "Is Netflix good for kids?", content: "Kids profiles and parental controls available." },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClick = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold py-5">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} isOpen={openIndex === index} onClick={() => handleClick(index)} />
        ))}
      </div>
    </section>
  );
}

