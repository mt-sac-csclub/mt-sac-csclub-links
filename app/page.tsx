import Image from 'next/image';
import { FaDiscord, FaInstagram } from 'react-icons/fa6';
import { HiOutlineArrowUpRight, HiOutlineEnvelope } from 'react-icons/hi2';
import { SiGoogleforms } from 'react-icons/si';

const links = [
  {
    label: 'Join our Discord',
    description: 'Meet the club and chat with members',
    href: 'https://discord.gg/QwaV2EY2CB',
    Icon: FaDiscord,
    className: 'discord',
  },
  {
    label: 'Club Interest Form',
    description: 'Tell us what you want to learn',
    href: 'https://forms.gle/odS1nMzKg7xvBEd57',
    Icon: SiGoogleforms,
    className: 'form',
  },
  {
    label: 'Instagram',
    description: '@cs.mtsac',
    href: 'https://www.instagram.com/cs.mtsac/',
    Icon: FaInstagram,
    className: 'instagram',
  },
  {
    label: 'Email us',
    description: 'mtsac.csclub@gmail.com',
    href: 'mailto:mtsac.csclub@gmail.com',
    Icon: HiOutlineEnvelope,
    className: 'email',
  },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cs.mtsac/',
    Icon: FaInstagram,
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/QwaV2EY2CB',
    Icon: FaDiscord,
  },
  {
    label: 'Email',
    href: 'mailto:mtsac.csclub@gmail.com',
    Icon: HiOutlineEnvelope,
  },
];

export default function Home() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  return (
    <main className="page-shell">
      <section className="profile-card" aria-labelledby="club-name">
        <header className="profile-header">
          <div className="logo-wrap">
            <Image
              className="club-logo"
              src={`${basePath}/avatar.jpg`}
              alt="Mt. SAC Computer Science Club duck logo"
              width={112}
              height={112}
              priority
            />
          </div>

          <p className="eyebrow">Mt. San Antonio College</p>
          <h1 id="club-name">Computer Science Club</h1>
          <a
            className="handle"
            href="https://www.instagram.com/cs.mtsac/"
            rel="noreferrer"
            target="_blank"
          >
            @cs.mtsac
          </a>

          <div className="bio">
            <p>💻 Interested in Computer Science? Join us!</p>
            <p>👥 101 Workshops | Game Nights | Events</p>
            <p>🤝 All experience is welcomed — beginner to expert</p>
          </div>
        </header>

        <nav className="link-list" aria-label="Mt. SAC Computer Science Club links">
          {links.map(({ Icon, ...link }) => {
            const external = link.href.startsWith('http');

            return (
              <a
                className={`link-card ${link.className}`}
                href={link.href}
                key={link.label}
                rel={external ? 'noreferrer' : undefined}
                target={external ? '_blank' : undefined}
              >
                <span className="link-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="link-copy">
                  <strong>{link.label}</strong>
                  <small>{link.description}</small>
                </span>
                <HiOutlineArrowUpRight className="link-arrow" aria-hidden="true" />
              </a>
            );
          })}
        </nav>

        <footer>
          <p>Social apps</p>
          <nav className="social-row" aria-label="Social apps">
            {socialLinks.map(({ Icon, ...social }) => {
              const external = social.href.startsWith('http');

              return (
                <a
                  aria-label={social.label}
                  href={social.href}
                  key={social.label}
                  rel={external ? 'noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                  title={social.label}
                >
                  <Icon aria-hidden="true" />
                </a>
              );
            })}
          </nav>
        </footer>
      </section>
    </main>
  );
}
