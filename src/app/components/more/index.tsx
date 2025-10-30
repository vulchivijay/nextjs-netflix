import style from '../../page.module.css';
import DesktopIcon from '../icons/Desktop';
import DownloadIcon from '../icons/Download';
import TelescopeIcon from '../icons/Telescope';
import UsersIcon from '../icons/Users';

export default function MoreReasonsToJoin() {
  const reasons = [
    {
      id: 1,
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Bluray players, and more.',
      icon: "DeskIcon",
    },
    {
      id: 2,
      title: 'Download your shows to watch offline',
      description: 'Save your favorites easily and always have something to watch.',
      icon: "DownIcon",
    },
    {
      id: 3,
      title: 'Watch everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      icon: "TeleIcon",
    },
    {
      id: 4,
      title: 'Create profiles for kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them — free with your membership.',
      icon: "UserIcon",
    },
  ];

  return (
    <section className="bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-semibold py-5">More reasons to join</h2>
        <div className="grid grid-cols-1 pb-5 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ id, title, description, icon }) => (
            <div key={id} className={`${style.reasonscard} text-white px-6 pt-6 pb-3 rounded-xl shadow-lg transition hover:shadow-2xl`}>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-300">{description}</p>
              <div className="flex justify-end mt-10">
                {icon === "DeskIcon" ? <DesktopIcon /> : ''}
                {icon === "DownIcon" ? <DownloadIcon /> : ''}
                {icon === "TeleIcon" ? <TelescopeIcon /> : ''}
                {icon === "UserIcon" ? <UsersIcon /> : ''}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
