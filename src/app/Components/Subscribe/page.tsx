import Button from "../Button/page";

export default function Subscribe() {

  const handleGetStarted = (event: object) => {
    console.log(event)
  }

  return (
    <div className="text-center">
      <p className="text-md pt-2 pb-4">Ready to watch? Enter your mail to create or restart your membership.</p>
      <div className="max-w-md m-auto flex items-center justify-between gap-2">
        <input type="email" placeholder="Enter your mail address" className="w-full bg-black text-white px-2 py-2 rounded-sm border-1 border-white" required />
        <Button textSize="text-xl" click={handleGetStarted}>Get Started</Button>
      </div>
    </div>
  )
}