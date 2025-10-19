"use client"

import { useState } from "react";
import AccordionItem from "../accordion";

type FAQItem = { title: string; content: string };

const faqItems: FAQItem[] = [
  { title: "What is Netflix?", content: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!" },
  { title: "How much does Netflix cost?", content: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts." },
  { title: "Where can I watch?", content: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere." },
  { title: "How do I cancel?", content: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime." },
  { title: "What can I watch on Netflix?", content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want." },
  { title: "Is Netflix good for kids?", content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see." },
];

export default function FrequentlyAskedQuestions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleClick = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold py-5">Frequently Asked Questions</h2>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} title={item.title} content={item.content} isOpen={openIndex === index} onClick={() => handleClick(index)} />
        ))}
      </div>
    </section>
  );
}

