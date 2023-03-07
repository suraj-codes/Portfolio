/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: "Suraj Deshmane",
  title: "Hi, I'm Suraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of designing and building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    // "https://drive.google.com/file/d/1lJTZJskkKbCoCiiMdFGq2sHmShx73tib/view",
    "https://drive.google.com/file/d/1FpHo06Hc4X5QQ9aSnGRre6CRN9ZEiyx_/view?usp=share_link",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/suraj-codes",
  // linkedin: "https://www.linkedin.com/in/",
  gmail: "surajdeshmane02@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  //medium: "https://medium.com/@davidrakosi",
  stackoverflow: "https://stackoverflow.com/users/15059185/suraj-deshmane",
  // instagram: "https://www.instagram.com/__suraj-codes__",
  // twitter: "https://twitter.com/SurajDeshmane13",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass",
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },

    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm",
    // },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database",
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire",
    // },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "JSPM's Jayawantrao Sawant Polytechnic, Hadapsar, Pune-411028",
      logo: require("./assets/images/jspm.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "August 2018 - August 2021",
      //desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
    {
      schoolName:
        "VOGCE, Aghai, Shahapur, Mumbai",
      logo: require("./assets/images/vogce.png"),
      subHeader: "Bachelor of engineering in Computer Engineering",
      duration: "August 2021 - August 2022  (Drop-out)",
      //desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "85%",
    },
  ],
  displayCodersrank: true, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer",
      company: "Pivotchain Solutions",
      companylogo: require("./assets/images/pivotchain.png"),
      date: "September 2021 – Present",
      desc: "Developing & Maintaining Dashboard UI's for AI products.",
      descBullets: [
        "Frontend development",
        "Backend Development using NodeJS & MongoDB",
        "Mobile App development using React Native (Android)",
      ],
    },
    {
      role: "Freelancer Javascript developer",
      company: "Upwork / Fiverr / Freelancer",
      companylogo: require("./assets/images/freelancer.png"),
      date: "March 2022 – Present",
      desc:
        "Part time freelancing (after job hours) to face different challenges for every client",
      descBullets: [
        "Worked with international clients (UAE, USA) on developing websites using ReactJS & TailwindCSS",
        " Build android apps using React Native from Figma designs",
        "Improved SEO of websites for higher ranking on search engins"
      ]
    },
    // {
    //   role: "Junior Information Security & Systems Representative",
    //   company: "Vodafone",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR.",
    // },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "suraj-codes", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects from my collection",
  projects: [
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png",
      projectName: "Netflix Clone",
      projectDesc: "Netflix clone using react.js",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-6f8d9.web.app/ ",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image:
        "https://thediplomat.com/wp-content/uploads/2020/04/sizes/td-story-s-1/thediplomat-2020-04-01.png",
      projectName: "Covid Tracker",
      projectDesc: "Real time covid tracker",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://covid19-a2327.web.app/",
        },
      ],
    },

    {
      image:
        "https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-icone.png",
      projectName: "Whatsapp-clone",
      projectDesc: "Real time Messaging Whatsapp-clone",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://whatsapp-clone-4a11e.web.app/",
        },
      ],
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png",
      projectName: "Amazon-clone",
      projectDesc: "Amazon-clone with cart functionality",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://fir-8a6df.web.app/",
        },
      ],
    },
    {
      image: "https://hybrid.chat/wp-content/uploads/2020/07/slack.png",
      projectName: "Slack-clone",
      projectDesc: "Slack-clone with room adding functionality",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://slack-456da.web.app/",
        },
      ],
    },
    {
      image:
        "https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-2-1.png",
      projectName: "Twitter-clone",
      projectDesc: "Twitter-clone with embeded twitter",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://twitter-38988.web.app/",
        },
      ],
    },
    {
      image:
        "https://assets.stickpng.com/images/5b06c1a5fad1cae04539afe1.png",
      projectName: "Notes Using API",
      projectDesc: "Notes App with Node.js,Express.js,MongoDB",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://noteapisuraj.herokuapp.com/",
        },
      ],
    },
    {
      image:
        "https://pngimg.com/uploads/cv/cv_PNG18.png",
      projectName: "Resume Builder",
      projectDesc: "Resume Builder With 9 Templates with React Redux",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://surajcodesresumebuilder.netlify.app/",
        },
      ],
    },{
      image:
        "https://play-lh.googleusercontent.com/FXOx2cmqcNdjcm5f008oI9Q9y2GWa4VRqqw-RoKEC_-4q7YjtyV5-_crqdPFe_-LU61U",
      projectName: "Crypto Tracker",
      projectDesc: "React Native Crypto Tracker using Class Components, Redux and Coinmarketcap API",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/suraj-codes/RN-Crypto-Tracker",
        },
      ],
    },{
      image:
        "https://play-lh.googleusercontent.com/8t6U6HGuMnP1DAJYpb4U_fEwVA7fgaOBJYRyfPHM5OLZllGj-8tsmJhu6Y4ikMrGpZg",
      projectName: "Web Scraper",
      projectDesc: "Python Internshala web scrapper, Scrapped Over 11000+ Internships and stored in MongoDB",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/suraj-codes/Internshala-Scrapper",
        },
      ],
    },{
      image:
        "https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png",
      projectName: "Spotify Clone",
      projectDesc: "React Native Spotify Clone with MockData",
      footerLink: [
        {
          name: "Source Code",
          url: "https://github.com/suraj-codes/RN-Spotify",
        },
      ],
    },{
      image:
        "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      projectName: "See More Projects",
      projectDesc: "30 + more projects from my collection. Click to see more.",
      footerLink: [
        {
          name: "Github",
          url: "https://github.com/suraj-codes",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const freelancingProjects = {
  title: "Freelancing Projects",
  subtitle: "Some projects i worked on as a freelance developer",
  projects: [
    {
      image:
        "https://play-lh.googleusercontent.com/5wNQCD0XEdRbXXCSw8sib3TDB8bsG2Se6AvpntFVh8T8uaHgD8iPk6ySVoONGGNTrm0=w240-h480-rw",
      projectName: "CoalMantra app",
      projectDesc: "CoalMantra app using React Native",
      footerLink: [
        {
          name: "Go to Playstore",
          url: "https://play.google.com/store/apps/details?id=com.coalmantra.coalmantra&hl=en_IN&gl=US",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image:
        "https://www.mipa.mu/assets/images/mipa-logo.jpg",
      projectName: "MIPA app",
      projectDesc: "Mipa app using React Native. (In development)",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.mipa.mu/",
        },
      ],
    },

    {
      image:
        "https://houseofwisdom.ae/static/media/logo.26fdaa2136d1b51e5e9b60346a0f6be4.svg",
      projectName: "House Of Wisdom",
      projectDesc: "Sharjah’s new iconic cultural hub website build using ReactJS & TailwindCSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://houseofwisdom.ae/",
        },
      ],
    },
    {
      image:
        "https://houseofwisdom.ae/static/media/logo.26fdaa2136d1b51e5e9b60346a0f6be4.svg",
      projectName: "House Of Wisdom Ticket Verify App",
      projectDesc: "House Of Wisdom Ticket Verify App using React Native with QR code scanning functionality",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://houseofwisdom.ae/",
        },
      ],
    },
    {
      image: "https://discovershurooq.ae/static/media/logo2.aae2568b.png",
      projectName: "Discover Shurooq website",
      projectDesc: "Builded Discover Shurooq website using ReactJS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://discovershurooq.ae/",
        },
      ],
    },
    {
      image:
        "https://marketplace.kunstmatrix.com/themes/kunstmatrix/images/logo_kunstmatrix_white.svg",
      projectName: "Kunstmatrix - Marketplace",
      projectDesc: "Explore digital 3D Interior spaces for KUNSTMATRIX tools.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://marketplace.kunstmatrix.com/3d-spaces",
        },
      ],
    },
     {
      image:
        "https://static.wixstatic.com/media/28cd39_122e8004fb8546b394aedec6daae53dd~mv2.png/v1/fill/w_196,h_110,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/DR%20C%20on%20White.png",
      projectName: "Dialed Resistance mobile app",
      projectDesc: "Builded Dialed Resistance mobile app using React Native",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.dialedresistance.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "",
        },
        {
          name: "Award Letter",
          url: "",
        },
        {
          name: "Google Code-in Blog",
          url: "",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "",
        },
      ],
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "(+91)9325834829",
  email_address: "surajdeshmane02@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "SurajDeshmane13", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  freelancingProjects
};
