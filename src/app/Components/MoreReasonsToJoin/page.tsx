export default function MoreReasonsToJoin() {

  const Reasons = [
    {
      id: 1,
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Bluray players, and more.',
    },
    {
      id: 2,
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
    },
    {
      id: 3,
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    },
    {
      id: 4,
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them - free with your membership.',
    }
  ]

  return (
    <div className="max-w-6xl m-auto my-6">
      <h2 className="text-xl font-semibold py-4">More reasons to join</h2>
      <div className="flex items-top justify-between gap-4">
        {Reasons.map(reason => (
          <div key={reason.id} className="flex-1 p-4 bg-white text-black rounded-xl shadow-2xl">
            <h3 className="text-xl/7 font-semibold">{reason.title}</h3>
            <p className="text-sm py-2 text-gray-500">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}