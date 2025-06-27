'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faPinterestP,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const socials = [
  { icon: faFacebookF, href: '#' },
  { icon: faTwitter, href: '#' },
  { icon: faGooglePlusG, href: '#' },
  { icon: faPinterestP, href: '#' },
  { icon: faYoutube, href: '#' },
];

const SocialIcons = () => {
  return (
    <div className="flex gap-4 items-center justify-center">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center bg-[#404653] text-white! transition-all duration-300 team-socials"
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
