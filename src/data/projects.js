export const projects = [
    {
    id: 0,
    linkImage: "/images/happy-property-homepage.png",
    title: "Happy Property",
    description:
      "Happy Property is a full-stack property management platform designed to support property owners and customers through a clear, modern, and user-friendly dashboard experience. The project includes authentication, separate owner and customer dashboard views, structured workflows for managing property-related data, and automated email communication using Resend.",

    miniDescription: "Full-stack property management platform",
    url: "https://happyproperty.co.nz",

    nameOfTechnologies: [
      "Typescript",
      "NextJS",
      "CSS",
      "Tailwind CSS",
      "Javascript",
      "Node.js",
      "Express",
      "Supabase",
      "Context API"
    ],

    imageOfTechnologies: [
      "/images/typescript.svg",
      "/images/nextjs.svg",
      "/images/css.svg",
      "/images/tailwind-css.png",
      "/images/javascript.svg",
      "/images/node_js.svg",
      "/images/express-js.svg",
      "/images/supabase.png",
      "/images/context-api.PNG"
    ],
    integrations: ["Resend", "Google reCAPTCHA"],
    // NEW (for details page separation)
    frontendTechnologies: ["Typescript", "NextJS","Tailwind CSS" ,"CSS", "Javascript",  "Context API"],
    backendTechnologies: ["Node.js", "Express", "Supabase", "Javascript"],

    imageOfFrontendTechnologies: [
      "/images/typescript.svg",
      "/images/nextjs.svg",
      "/images/tailwind-css.png",
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/context-api.PNG"
    ],

    imageOfBackendTechnologies: [
      "/images/node_js.svg",
      "/images/express-js.svg",
      "/images/supabase.png",
      "/images/javascript.svg"
    ],
    integrationImages: [
      "/images/resend.png",
      "/images/recaptcha.svg"
    ],
    challenges:
      "A key challenge was designing the project as a complete full-stack system rather than only focusing on frontend UI. This included structuring backend routes, managing authentication, and ensuring the correct data was delivered to different user roles such as property owners and customers. Another challenge was maintaining a clean and responsive UI while integrating backend services reliably.",

    projectImages: [
      "/images/happy-property-homepage.png",
      "/images/happy-property-auth-page.png",
      "/images/happy-property-service-page.png",
      "/images/happy-property-owner-dashboard.png",
      "/images/happy-property-customer-dashboard.png"
    ],
  },
  {
    id: 1,
    linkImage: "/images/portfolio-home-page.PNG",
    title: "Portfolio",
    description:
      "This portfolio was created to present my projects in a more professional and accessible way alongside my CV. The goal was to give employers a clear view of my work, technical skills, project screenshots, and the challenges I solved while developing each application.",
    miniDescription: "Personal developer portfolio",
    url: "https://kt-portfolio-vuejs.vercel.app",
    nameOfTechnologies: ["VUEJS", "CSS", "Javascript"],
    imageOfTechnologies: [
      "/images/vue.svg",
      "/images/css.svg",
      "/images/javascript.svg",
    ],
    challenges:
      "The main challenge was learning Vue syntax and understanding how to structure reusable pages, route between project details, and render project data dynamically. This project helped me improve my confidence with component-based development and data-driven UI rendering.",
    projectImages: [
      "/images/portfolio-home-page.PNG",
      "/images/portfolio-projects-page.PNG",
      "/images/portfolio-projects-details.PNG",
      "/images/portfolio-projects-details-whole.PNG",
    ],
  },

  {
    id: 2,
    linkImage: "/images/apportioning.PNG",
    title: "Ezy Apportioning",
    url: "https://ez-apportioning.vercel.app/",
    description:
      "Ezy Apportioning was developed to help a colleague complete apportioning calculations more efficiently. The application turns a repetitive manual process into a faster digital workflow, reducing calculation effort and making the task easier for the team.",
    miniDescription: "Apportioning calculation tool",
    nameOfTechnologies: [
      "NextJS",
      "Javascript",
      "Typescript",
      "React",
      "Tailwind CSS",
    ],
    imageOfTechnologies: [
      "/images/nextjs.svg",
      "/images/javascript.svg",
      "/images/typescript.svg",
      "/images/react.svg",
      "/images/tailwind-css.png",
    ],
    projectImages: [
      "/images/apportioning.PNG",
      "/images/apportioning_errors.PNG",
      "/images/apportioning_calculations_done.PNG",
      "/images/backpay.png",
    ],
    challenges:
      "The biggest challenge was building the calculation logic correctly while still learning TypeScript. I had to break the problem down into smaller functions, test different values carefully, and use debugging to understand how the calculations were flowing through the application.",
  },

  {
    id: 3,
    linkImage: "/images/twitt-er.png",
    title: "Twitt-er",
    description:
      "Twitt-er is a social media style application inspired by Twitter. It includes core CRUD functionality such as creating posts, reading posts, deleting posts, editing posts, and updating user profiles. The project was built to practise full application flow, user interaction, and dynamic content updates.",
    miniDescription: "Twitter-inspired social media app",
    url: "https://twitt-er.vercel.app/",
    nameOfTechnologies: [
      "NextJS",
      "CSS",
      "Javascript",
      "Sanity",
      "React",
      "Context API",
    ],
    imageOfTechnologies: [
      "/images/nextjs.svg",
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/sanity-red-on-white.svg",
      "/images/react.svg",
      "/images/context-api.PNG",
    ],
    challenges:
      "A major challenge was learning how NextJS, Sanity, and Context API worked together. I had difficulty retrieving the latest data from Sanity and spent time reading documentation, checking forums, and asking for help through the Sanity community. The breakthrough came when I adjusted the fetch approach and used encodeURIComponent with a standard async fetch request, which allowed the latest data to load correctly.",
    projectImages: [
      "/images/home_page_twitter.PNG",
      "/images/user_profile_page.PNG",
      "/images/other_user_profile_page.PNG",
    ],
    testAccounts: "username:test@test.com pw:111111",
  },

  {
    id: 4,
    linkImage: "/images/jb-hi-kho.png",
    title: "JB-Hi-Kho",
    description:
      "JB-Hi-Kho is an e-commerce store built to improve on my first online store project while learning NextJS. It includes product pages, cart functionality, Sanity content management, and Stripe payment integration to simulate a real online shopping experience.",
    miniDescription: "E-commerce store with Stripe payments",
    url: "https://jb-hi-kho.vercel.app/",
    nameOfTechnologies: [
      "NextJS",
      "CSS",
      "Javascript",
      "Stripe",
      "React",
      "Context API",
      "Sanity",
    ],
    imageOfTechnologies: [
      "/images/nextjs.svg",
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/stripe-logo.png",
      "/images/react.svg",
      "/images/context-api.PNG",
      "/images/sanity-red-on-white.svg",
    ],
    projectImages: [
      "/images/jb-hi-kho_home_page.PNG",
      "/images/jb-hi-kho_product_details_page.PNG",
      "/images/jb-hi-kho_cart.PNG",
      "/images/jb-hi-kho_stripe_completed_payments.PNG",
      "/images/jb-hi-kho_stripe_payment.PNG",
    ],
    challenges:
      "This project introduced several new concepts, including NextJS, Sanity schemas, product data retrieval, cart state management, and Stripe checkout. A key challenge was understanding when to use server-side rendering and static generation, while also keeping the product and checkout flow smooth for users.",
    furtherInstructions:
      "You can repeat 42... for all credit card numbers for testing payments. This includes expire dates and CVV number.",
  },

  {
    id: 5,
    linkImage: "/images/nft-landing-page.PNG",
    title: "NFT landing page",
    url: "https://nft-market-place-landing-page.netlify.app/",
    description:
      "This NFT landing page was created to support and promote an NFT marketplace concept. The focus was on building a visually engaging landing page with clear sections, modern styling, and a strong first impression for users.",
    miniDescription: "Responsive NFT landing page",
    nameOfTechnologies: ["CSS", "Javascript", "React"],
    imageOfTechnologies: [
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/react.svg",
    ],
    projectImages: [
      "/images/nft-landing-page.PNG",
      "/images/nft-landing-page-technologies.PNG",
      "/images/nft-landing-page-source-code.PNG",
    ],
    challenges:
      "The main challenge was creating a strong visual design and finding suitable images that matched the NFT theme. I also experimented with custom hooks and improved my understanding of how React can be used to organise reusable UI behaviour.",
  },

  {
    id: 6,
    linkImage: "/images/nft-home-page.png",
    title: "React-Native NFT",
    url: "https://expo.dev/@khothach/nft-market-place?serviceType=classic&distribution=expo-go",
    description:
      "This project was built to practise React Native and understand how mobile interfaces are structured differently from web applications. The project focuses on UI layout, mobile-friendly components, filtering, read-more interactions, and displaying NFT-style content in a clean mobile experience.",
    miniDescription: "React Native NFT marketplace UI",
    nameOfTechnologies: ["CSS", "Javascript", "React Native"],
    imageOfTechnologies: [
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/react.svg",
    ],
    projectImages: [
      "/images/nft-home-page.png",
      "/images/nft-filter.png",
      "/images/nft-readmore.png",
      "/images/nft-show-more.png",
    ],
    challenges:
      "A key challenge was adjusting from web-based React to React Native. I had to learn mobile-specific components such as FlatList, understand different styling patterns, and test the project through Expo on a physical phone after having difficulty setting up a simulator.",
    expoURL:
      "https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US",
    expoMsg: "Please download the expo app below to see it live on mobile.",
  },

  {
    id: 7,
    linkImage: "/images/vanilla-todos-no-todos.PNG",
    title: "React Class components Todos",
    url: "https://class-base-todos.netlify.app/",
    description:
      "This project is a React class component version of an earlier vanilla JavaScript todo application. It includes todo management, signup and login behaviour, localStorage usage, and animated todo deletion to practise older React patterns and component lifecycle concepts.",
    miniDescription: "Todo app built with React class components",
    nameOfTechnologies: ["CSS", "Javascript", "React"],
    imageOfTechnologies: [
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/react.svg",
    ],
    projectImages: [
      "/images/classbase-todos-login.PNG",
      "/images/classbase-todos-signup.PNG",
      "/images/classbase-todos-checklist.PNG",
    ],
    challenges:
      "The main challenge was learning how class components manage state and events compared with functional components. I also learned that localStorage values must be stored as strings, and I used onTransitionEnd to complete delete animations after the CSS transition finished.",
  },

  {
    id: 8,
    linkImage: "/images/vanilla-todos-no-todos.PNG",
    title: "Vanilla Todos",
    url: "https://todos-vanilla.netlify.app/",
    description:
      "Vanilla Todos was one of my early JavaScript projects, created to strengthen my understanding of core DOM manipulation without relying on a framework. The app allows users to add, complete, uncomplete, and remove todo items.",
    miniDescription: "Todo app built with vanilla JavaScript",
    nameOfTechnologies: ["CSS", "Javascript"],
    imageOfTechnologies: ["/images/css.svg", "/images/javascript.svg"],
    imageOfTechnologiesDetails: ["/images/css.svg", "src/assets/javascript.svg"],
    projectImages: [
      "/images/vanilla-todos-no-todos.PNG",
      "/images/vanilla-todos-checklist.PNG",
      "/images/vanilla-todos-completed.PNG",
      "/images/vanilla-todos-uncompleted.PNG",
    ],
    challenges:
      "The main challenge was working directly with the DOM, including creating elements, updating classes, and managing application state manually. This project helped me understand how frameworks simplify tasks that are much more manual in vanilla JavaScript.",
  },

  {
    id: 9,
    linkImage: "/images/bfa.PNG",
    title: "My BestFriend App",
    url: "https://bestfriend-app.netlify.app/",
    description:
      "My BestFriend App was created to put my course learning into practice by combining React, Redux, and the Google Maps API. The application uses geolocation and map-based functionality to create a more interactive user experience.",
    miniDescription: "Map-based React application",
    nameOfTechnologies: [
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Google maps API",
    ],
    imageOfTechnologies: [
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/react.svg",
      "/images/redux-icon.svg",
      "/images/Google_Maps_Logo.svg",
    ],
    projectImages: [
      "/images/bfa.PNG",
      "/images/bff-mobile-map-icons.PNG",
      "/images/bff-mobile.PNG",
    ],
    challenges:
      "The biggest challenge was learning how to work with the Google Maps API and geolocation permissions. I also discovered that resizing the page repeatedly during responsive testing could trigger additional API requests, which taught me to be more careful with API usage and request limits.",
    allow: "Please allow Geolocation for this webpage to work.",
  },

  {
    id: 10,
    linkImage: "/images/amazon-login.PNG",
    title: "My Amazon",
    url: "https://khos-17ce8.web.app/",
    description:
      "My Amazon is an e-commerce application built after completing my course to apply what I had learned in React, Redux, Firebase, and payment-style checkout flows. The project includes authentication, product browsing, cart functionality, checkout, and order history.",
    miniDescription: "Amazon-inspired e-commerce app",
    nameOfTechnologies: ["CSS", "Javascript", "React", "Redux", "Firebase"],
    imageOfTechnologies: [
      "/images/css.svg",
      "/images/javascript.svg",
      "/images/react.svg",
      "/images/redux-icon.svg",
      "/images/firebase-svg.svg",
    ],
    projectImages: [
      "/images/amazon-home-page.PNG",
      "/images/amazon-login.PNG",
      "/images/amazon-cart.PNG",
      "/images/amazon-checkout.PNG",
      "/images/amazon-order-history.PNG",
    ],
    challenges:
      "This project helped me learn Firebase authentication, NoSQL-style data storage, Redux state management, and how to structure an e-commerce checkout flow. The Firebase setup was challenging at first, but it gave me valuable experience working with authentication and hosted backend services.",
    furtherInstructions:
      "You can repeat 42... for all credit card numbers for testing payments. This includes expire dates and CVV number.",
  },
];