export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  logo: { src: string; alt: string; fallback: string };
  gpa?: string;
  coursework: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "George Mason University",
    location: "Fairfax, VA",
    date: "Aug 2024 – May 2026",
    logo: { src: "/Assets/gmu-logo.png", alt: "George Mason University", fallback: "GMU" },
    gpa: "3.7 / 4.0",
    coursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "Cloud Computing",
      "Big Data Analytics",
      "Algorithms",
    ],
  },
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "University of Mumbai",
    location: "Mumbai, India",
    date: "Aug 2018 – May 2022",
    logo: { src: "/Assets/mumbai-university-logo.png", alt: "University of Mumbai", fallback: "MU" },
    coursework: [
      "Data Structures & Algorithms",
      "Database Management",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
    ],
  },
];
