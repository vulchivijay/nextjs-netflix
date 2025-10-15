import Button from "../Button/page";

export default function HeroSection() {

  const handleGetStarted = (event) => {
    console.log(event.target)
  }

  return (
    <div className="py-35 text-center">
      <div className="relative z-10 text-white">
        <h1 className="max-w-2xl m-auto text-6xl/18 font-bold">Unlimited movies, TV shows, and more</h1>
        <p className="text-md pt-4 pb-6 font-semibold">Starts at $7.99. Cancel anytime</p>
        <p className="text-md pt-2 pb-4">Ready to watch? Enter your mail to create or restart your membership.</p>
        <div className="max-w-sm m-auto flex items-center justify-between gap-2">
          <input type="email" placeholder="Enter your mail address" className=" bg-white px-6 py-1 rounded-xs border border-white" required />
          <Button onClick={handleGetStarted}>Get Started</Button>
        </div>
      </div>
    </div>
  )
}