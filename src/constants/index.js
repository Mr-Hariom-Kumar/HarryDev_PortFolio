 import foodfile from '../assets/Project/foodfile.png'
 import treat from '../assets/Project/treat.png'
 import jobportal from '../assets/Project/jobportal.png'
 import weather from '../assets/Project/weather.png'
 import tictatoe from '../assets/Project/tictactoe.png'
export const myProjects = [
  {
    id: 1,
    title: "FoodFile – MERN Food Ordering App",
    description:
      "A full-stack food ordering application deployed with automated payments and secure access control.",
    subDescription: [
      "JWT authentication & role-based authorization",
      "Stripe payment integration + Multer image uploads",
      "MVC structured backend with controllers & models",
      "Deployed frontend on Vercel for smooth user experience"
    ],
    href: "https://food-file-4wl3.vercel.app/",
    logo: "",
    image: `${foodfile}`,
    tags: [
  { id: 1, name: "React", path: "/logo/react.svg" },
  { id: 2, name: "Node.js", path: "/logo/node.png" },
  { id: 3, name: "Express.js", path: "/logo/Express.png" },
  { id: 4, name: "MongoDB", path: "/logo/mongo.png" },
  { id: 5, name: "Stripe", path: "/logo/stripe.svg" },
  { id: 6, name: "TailwindCSS", path: "/logo/tailwindcss.svg" }
]
  },

  {
    id: 2,
    title: "Treat-DocApp – Online Doctor Appointment System",
    description:
      "A medical appointment booking application supporting doctors, patients, schedules, and payments.",
    subDescription: [
      "Implemented secure JWT + bcrypt authentication",
      "Cloudinary & Multer for doctor profile photo upload",
      "Stripe payment integration for paid appointment booking",
      "Admin panel for user & schedule management"
    ],
    href: "https://treat-doc-app.vercel.app/",
    logo: "",
    image: `${treat}`,
    tags: [
  { id: 1, name: "React", path: "/logo/react.svg" },
  { id: 2, name: "Node.js", path: "/logo/node.png" },
  { id: 3, name: "Express.js", path: "/logo/Express.png" },
  { id: 4, name: "MongoDB", path: "/logo/mongo.png" },
  { id: 5, name: "razorpay", path: "/logo/razor.png" },
  { id: 6, name: "TailwindCSS", path: "/logo/tailwindcss.svg" }
]
  },

  {
    id: 3,
    title: "Job Portal Platform",
    description:
      "A simple job-seeking website prototype with role-based features for recruiters and applicants.",
    subDescription: [
      "Nodejs ,Express and React-based project with CRUD job listing operations using mySQL Database",
      "Candidate login to upload resume & apply for jobs",
      "Admin dashboard to review applicants",
      "Responsive interface designed using TailwindCSS"
    ],
    // underconsideration
    href: "https://github.com/Mr-Hariom-Kumar/ONLINE-JOB-PORTAL",
    logo: "",
    image: `${jobportal}`,
    tags: [
  { id: 1, name: "React", path: "/logo/react.svg" },
  { id: 2, name: "Node.js", path: "/logo/node.png" },
  { id: 3, name: "Express.js", path: "/logo/Express.png" },
  { id: 4, name: "Cloudinary", path: "/logo/cloudinary.svg" },
  { id: 5, name: "MySQL", path: "/logo/mysql.png" },
  { id: 6, name: "TailwindCSS", path: "/logo/tailwindcss.svg" }
]
  },

  {
    id: 4,
    title: "TicTacToe Game",
    description:
      "A simple and interactive TicTacToe browser game built to strengthen JavaScript logic.",
    subDescription: [
      "Game state handling with win/draw detection",
      "Restart and turn management features",
      "Lightweight and mobile-friendly UI"
    ],
    href: "https://mr-hariom-kumar.github.io/TicTacToe/",
    logo: "",
    image: `${tictatoe}`,
    tags: [
      { id: 1, name: "JavaScript", path: "/logo/javascript.svg" },
      { id: 2, name: "HTML5", path: "/logo/html5.svg" },
      { id: 3, name: "CSS3", path: "/logo/css3.svg" }
    ]
  },

  {
    id: 5,
    title: "WeatherMania – Live Weather App",
    description:
      "A weather forecasting app that displays real-time climate data using open weather APIs.",
    subDescription: [
      "Integrated weather API to fetch live temperature, humidity, etc.",
      "Responsive UI built with modern CSS styles",
      "Improved performance using async API calls"
    ],
    href: "https://weather-mania-mu.vercel.app/",
    logo: "",
    image: `${weather}`,
    tags: [
      { id: 1, name: "JavaScript", path: "/logo/javascript.svg" },
      { id: 2, name: "React", path: "/logo/html5.svg" },
      { id: 3, name: "CSS3", path: "/logo/css3.svg" }
    ]
  }
];


export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "BlueStock Fintech",
    job: "Software Developer Intern",
    date: "April 2025-July 2025",
   contents: [
  "Built interactive and real-time stock visualization dashboards using React.js integrated with backend REST APIs.",
  "Implemented secure JWT-based authentication and session management to protect user access and data integrity.",
  "Improved API performance and frontend responsiveness through optimized data fetching and state management.",
  "Worked closely with cross-functional teams using Git and Agile practices, contributing to feature integration and timely delivery.",
],

  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];