// 1. We define the exact structure of a team member here.
// The "?" makes the social links optional so the page won't crash if someone is missing one!
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  linkedin?: string;
  github?: string;
  instagram?: string; 
}

// 2. We export the actual data using your exact team list.
export const teamBatches: Record<string, TeamMember[]> = {
  "2026-2027": [
    {
      name: "Ramashray Sahu",
      role: "CEO (Chief Executive Officer)",
      image: "/assets/ramashray.jpg", 
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
    {
      name: "Omkar Hembade",
      role: "CFO (Chief Finance Officer)",
      image: "/assets/omkar.jpg",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
    {
      name: "Rohan Dev Yadav",
      role: "CTO (Chief Technical Officer)",
      image: "/assets/team/rohan1.jpg",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
    {
      name: "Khushi Pragya",
      role: "CMO (Chief Marketing Officer)",
      image: "/assets/team/khushi.jpg",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
    {
      name: "Kushagra Gupta",
      role: "Social Media Head",
      image: "/assets/team/kushagra.jpeg",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    },
    {
      name: "Anshika Jain",
      role: "Design Head",
      image: "/assets/anshika.jpg",
      linkedin: "https://linkedin.com/",
      github: "https://github.com/",
      instagram: "https://instagram.com/"
    }
  ]
};