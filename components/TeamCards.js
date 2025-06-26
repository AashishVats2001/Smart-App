import Image from 'next/image';
import { faFacebookF, faTwitter, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Team1 from '@/public/team-1.png';
import Team2 from '@/public/team-2.png';
import Team3 from '@/public/team-3.png';


const teamMembers = [
  {
    name: 'Mark Denial',
    title: 'Chief Developer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum',
    image: Team1,
  },
  {
    name: 'Worner Smith',
    title: 'UI Designer',
    description: 'Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum',
    image: Team2,
  },
  {
    name: 'Jhon Due Stive',
    title: 'Founder & CEO',
    description: 'Lorem Ipsum is simply dummy text of the printing and typeseing in dustry Lorem Ipsum',
    image: Team3,
  },
];

const TeamCards = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm text-center transition-all hover:shadow-xl/20 duration-200">
            <div className="w-full h-72 relative">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-8 space-y-0 w-full">
              <h3 className="text-primary font-semibold text-xl">{member.name}</h3>
              <p className="text-sm font-medium mb-3">{member.title}</p>
              <p className="text-sm mb-3">{member.description}</p>

              <div className="flex justify-center items-center gap-4 translate-y-14">
                <div className='p-4 flex bg-white rounded-full inset-ring-1 inset-ring-slate-600 items-center justify-center cursor-pointer team-socials hover:inset-ring-0 transition-all'>
                  <FontAwesomeIcon icon={faFacebookF} className='w-4 h-5' fixedWidth />
                </div>
                <div className='p-4 flex bg-white rounded-full inset-ring-1  inset-ring-slate-600 items-center justify-center cursor-pointer team-socials hover:inset-ring-0 transition-all'>
                  <FontAwesomeIcon icon={faTwitter} className='w-4 h-5' fixedWidth />
                </div>

                <div className='p-4 flex bg-white rounded-full inset-ring-1  inset-ring-slate-600 items-center justify-center cursor-pointer team-socials hover:inset-ring-0 transition-all'>
                  <FontAwesomeIcon icon={faGooglePlusG} className='w-4 h-5' fixedWidth />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamCards
