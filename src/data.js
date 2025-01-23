const data = [
  {
    id: 1,
    category: "Fitness & Wellness",
    services: [
      {
        id: 10,
        name: "Yoga Class",
        price: "$50",
        description:
          "A 1-hour yoga session focusing on flexibility and relaxation.",
        imgLink: "/assets/images/Fitness/yoga.jpg",
      },
      {
        id: "11",
        name: "Personal Training Session",
        price: "$100",
        description: "One-on-one training tailored to your fitness goals.",
        imgLink: "/assets/images/Fitness/trainer.webp",
      },
      {
        id: "12",
        name: "Meditation Class",
        price: "$30",
        description: "Guided mindfulness meditation for stress relief.",
        imgLink: "/assets/images/Fitness/mediation.webp",
      },
    ],
  },
  {
    id: 2,
    category: "Therapy & Counseling",
    services: [
      {
        id: "20",
        name: "Individual Therapy Session",
        price: "$150",
        description: "A 1-hour session with a licensed therapist.",
        imgLink: "/assets/images/Therapy/therapy.jpg",
      },
      {
        id: "21",
        name: "Couples Counseling",
        price: "$100",
        description: "Relationship counseling for couples.",
        imgLink: "/assets/images/Therapy/couples.webp",
      },
      {
        id: "22",
        name: "Career Counseling",
        price: "$200",
        description: "Professional guidance to help plan your career path.",
        imgLink: "/assets/images/Therapy/career.jpg",
      },
    ],
  },
  {
    id: 3,
    category: "Workshops",
    services: [
      {
        id: "30",
        name: "Digital Marketing Workshop",
        price: "$75",
        description:
          "Learn the fundamentals of SEO, PPC, and social media marketing.",
        imgLink: "/assets/images/Workshops/digital.jpg",
      },
      {
        id: "31",
        name: "Photography Workshop",
        price: "$50",
        description: "Hands-on training in photography basics and editing.",
        imgLink: "/assets/images/Workshops/Photography.jpg",
      },
      {
        id: "32",
        name: "Cooking Class",
        price: "$200",
        description:
          "Master the art of Italian cuisine in this interactive workshop.",
        imgLink: "/assets/images/Workshops/cooking.jpg",
      },
    ],
  },
  {
    id: 4,
    category: "Educational Services",
    services: [
      {
        id: "40",
        name: "Coding Bootcamp",
        price: "$75",
        description: "A 4-week intensive bootcamp to learn web development.",
        imgLink: "/assets/images/Educational/coding.jpg",
      },
      {
        id: "41",
        name: "Language Learning Class",
        price: "$50",
        description: "Beginner-level classes in French, Spanish, or Mandarin.",
        imgLink: "/assets/images/Educational/learning.jpg",
      },
      {
        id: "42",
        name: "Art Class",
        price: "$100",
        description:
          "Explore your creativity with watercolor painting techniques.",
        imgLink: "/assets/images/Educational/art.jpg",
      },
    ],
  },
  {
    id: 5,
    category: "Health & Beauty",
    services: [
      {
        id: "50",
        name: "Nutrition Consultation",
        price: "$100",
        description: "Personalized dietary advice to meet your health goals.",
        imgLink: "assets/images/Health/nutrition.jpg",
      },
      {
        id: "51",
        name: "Skincare Workshop",
        price: "$50",
        description: " Learn about proper skincare routines and products.",
        imgLink: "/assets/images/Health/skincare.jpg",
      },
    ],
  },
  {
    id: 6,
    category: "Miscellaneous",
    services: [
      {
        id: "60",
        name: "Pet Training Session",
        price: "$150",
        description: "A basic training session for your furry friend.",
        imgLink: "/assets/images/Miscellaneous/pet.jpg",
      },
    ],
  }
];

export default data;
