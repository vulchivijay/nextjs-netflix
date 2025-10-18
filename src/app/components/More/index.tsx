import Image from 'next/image';
import style from '../../page.module.css';

export default function MoreReasonsToJoin() {
  const reasons = [
    {
      id: 1,
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Bluray players, and more.',
      image: '/assets/desktop.svg',
    },
    {
      id: 2,
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      image: '/assets/download.svg',
    },
    {
      id: 3,
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      image: '/assets/telescope.svg',
    },
    {
      id: 4,
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
      image: '/assets/users.svg',
    },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl font-semibold py-5">More reasons to join</h2>
        <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ id, title, description, image }) => (
            <div key={id} className={`${style.reasonscard} text-white px-6 pt-6 pb-3 rounded-xl shadow-lg transition hover:shadow-2xl`}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
              <div className="flex justify-end mt-10">
                <Image src={image} width={60} height={60} alt={title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
