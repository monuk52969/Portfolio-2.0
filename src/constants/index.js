// index.js
export const servicesData = [
  {
    title: "Frontend Development",
    description:
      "I build fast, responsive, and visually engaging web interfaces. Every project is crafted with attention to detail, ensuring seamless user experiences and clean, maintainable code.",
    items: [
      {
        title: "React & Modern JS",
        description: "Component-based architecture, hooks, state management, and modern JavaScript best practices.",
      },
      {
        title: "UI/UX Design Integration",
        description: "Pixel-perfect designs, smooth animations, and interactive elements for intuitive interfaces.",
      },
      {
        title: "Responsive & Adaptive Layouts",
        description: "Mobile-first design, cross-browser compatibility, and accessibility-focused layouts.",
      },
    ],
  },
  {
    title: "Performance & Optimization",
    description:
      "I ensure your web applications run efficiently on any device. Optimized assets, fast load times, and smooth interactions are standard in every project.",
    items: [
      {
        title: "Code Splitting & Lazy Loading",
        description: "Load only what’s needed to improve page speed and reduce bundle size.",
      },
      {
        title: "Caching & Asset Optimization",
        description: "Optimized images, fonts, and scripts for better performance and SEO.",
      },
      {
        title: "SEO-Friendly Frontend",
        description: "Proper meta tags, semantic HTML, and structured content for search engines.",
      },
    ],
  },
  {
    title: "Interactive & Dynamic Interfaces",
    description:
      "I create web pages that feel alive. From micro-interactions to full-page animations, users enjoy smooth and engaging experiences.",
    items: [
      {
        title: "Animations & Transitions",
        description: "GSAP, Framer Motion, CSS animations for captivating UI effects.",
      },
      {
        title: "Real-time Updates",
        description: "WebSockets, React Query, or custom solutions for live data and dynamic content.",
      },
      {
        title: "Forms & Validations",
        description: "User-friendly forms with instant feedback, validation, and error handling.",
      },
    ],
  },
  {
    title: "Reusable & Scalable Code",
    description:
      "I focus on clean, reusable components and modular architecture so your web app can grow without headaches.",
    items: [
      {
        title: "Component Libraries",
        description: "Reusable UI components for consistent branding and faster development cycles.",
      },
      {
        title: "State Management",
        description: "Efficient handling of application state with Context API, Redux, or Zustand.",
      },
      {
        title: "Maintainable Architecture",
        description: "Organized code structure for easier updates and collaboration.",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Personal Portfolio Website",
    description:
      "A fully responsive personal portfolio showcasing my projects, skills, and expertise in modern web development, complete with smooth animations and interactive UI elements.",
    href: "https://folio-monu-kumars-projects-65ea3107.vercel.app/",
    image: "/assets/projects/bg3.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
    ],
  },
  {
    id: 2,
    name: "Interactive Frontend Project",
    description:
      "A frontend-focused project demonstrating advanced React skills, modern CSS animations, and dynamic user interactions to create an engaging web experience.",
    href: "/projects/port-folio",
    image: "/assets/projects/bg1.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
    ],
  },
  {
    id: 3,
    name: "GTA-IV Themed Web Interface",
    description:
      "An immersive gaming website project inspired by GTA-IV, featuring interactive UI components, dynamic backgrounds, and engaging visual effects using modern web technologies.",
    href: "/projects/gta-iv",
    image: "/assets/projects/drink.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "Framer Motion" },
    ],
  },
  {
    id: 4,
    name: "Askhub Developer Community Platform",
    description:
      "A community web platform designed for developers to share knowledge, collaborate on projects, and discuss coding challenges in a clean and user-friendly interface.",
    href: "/projects/askhub-community",
    image: "/assets/projects/elements.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
    ],
  },
  {
    id: 5,
    name: "UPVC Window & Doors Company Website",
    description:
      "A modern, professional website for a UPVC window and door business, showcasing products, services, and company information with responsive design and smooth animations.",
    href: "https://precise-website-weld.vercel.app/#portfolio",
    image: "/assets/projects/port.png",
    bgImage: "public/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Tailwind CSS" },
      { id: 3, name: "GSAP" },
    ],
    github: "https://github.com/yourusername/portfolio",
  },
];

export const testimonials = [
  {
    name: "John Doe",
    position: "CEO, TechCorp",
    comment: "Monu’s web development skills are top-notch. Our project was delivered on time with amazing quality.",
    image: "/images/hero.png",
  },
  {
    name: "Jane Smith",
    position: "Product Manager, Webify",
    comment: "Working with Monu was a pleasure. His front-end expertise elevated our product design.",
    image: "/images/hero.png",
  },
  {
    name: "Alex Johnson",
    position: "CTO, StartupX",
    comment: "Highly recommend Monu for any web project. Clean code, fast delivery, and creative solutions.",
    image: "/images/hero.png",
  },
];



export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/monucodex.io/" },
  
  { name: "LinkedIn", href: "https://www.linkedin.com/in/monu-kumar-a2b257220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BhCWwuw8HTau%2Fh15LmWgjPQ%3D%3D" },
  { name: "GitHub", href: "https://github.com/monuk52969" },
];
