import Subscribe from "../Subscribe/page";

export default function HeroSection() {
  return (
    <div className="py-35 text-center">
      <h1 className="max-w-2xl m-auto text-6xl/18 font-bold">Unlimited movies, TV shows, and more</h1>
      <p className="text-md pt-4 pb-6 font-semibold">Starts at $7.99. Cancel anytime</p>
      <Subscribe />
    </div>
  )
}