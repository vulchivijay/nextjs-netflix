import Subscribe from '../Subscribe';

export default function Hero() {
  return (
    <section className="bg-transparent text-center text-white py-30">   
      <h1 className="max-w-2xl mx-auto text-4xl md:text-6xl font-bold leading-tight">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="text-base md:text-lg pt-2 font-semibold">
        Starts at $7.99. Cancel anytime.
      </p>
      <Subscribe />
    </section>
  );
}
