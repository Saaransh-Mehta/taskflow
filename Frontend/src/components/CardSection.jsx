import React,{ useState } from "react";
import laptopImg from '../assets/laptopImg.png'


const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Designer",
    designation: "Lead UI/UX Designer",
    image: {laptopImg},
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Developer",
    designation: "Senior Frontend Engineer",
    image: "/placeholder.png",
  },
  {
    id: 3,
    name: "Aisha Patel",
    profession: "Marketing",
    designation: "Growth Marketing Manager",
    image: "/placeholder.png",
  },
  
];

export default function TeamSection() {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({ member }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative  bg-gray-200" style={{ width: "350px", height: "350px" }}>
        <img
          src={member.image || {laptopImg}}
          alt={member.name}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3
          className="text-xl font-semibold transition-transform duration-300"
          style={{ transform: isHovered ? "translateY(-1rem)" : "translateY(0)" }}
        >
          {member.name}
        </h3>

        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            maxHeight: isHovered ? "100px" : "0",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <p className="text-gray-300 font-medium mt-1">{member.profession}</p>
          <p className="text-white/80 text-sm mt-1">{member.designation}</p>
          <div className="w-10 h-0.5 bg-blue-500 mt-3 mb-2" />
          <p className="text-sm text-white/70 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

