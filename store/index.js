import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "< Projects Portfolio />",
  projectsDescription: "Some of the projects I have successfully completed",
  projects: [
    {
      id: "canvassing2022",
      title: "National Canvassing of Elections",
      category: "Web Application",
      img: "images/canvass/index.webp",
      publishDate: "May, 2022",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "",
      objectivesDetails: "",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "National Canvassing of Elections UI 1",
          img: "../images/canvass/1.webp",
        },
        {
          id: uuidv4(),
          title: "National Canvassing of Elections UI 2",
          img: "../images/canvass/2.webp",
        },
        {
          id: uuidv4(),
          title: "National Canvassing of Elections UI 3",
          img: "../images/canvass/3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "Vue 3",
        "TailwindCSS",
        "Laravel",
        "AWS Services",
        "PUSHER",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Application Developed to speed up the canvassing of votes and showcase transparency during the National Election of 2022 in the Philippines",
        },
        {
          id: uuidv4(),
          details:
            "Roles: Lead Developer, SCRUM Master, Frontend UI Developer, Backend API Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "halalan2022-public-site",
      title: "Halalan 2022 - Infosite",
      category: "Web Application",
      img: "images/halalan-public-site/index.webp",
      publishDate: "May, 2022",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://halalan2022.info",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "Canvassing - Public Site UI 1",
          img: "../images/halalan-public-site/1.webp",
        },
        {
          id: uuidv4(),
          title: "Canvassing - Public Site UI 2",
          img: "../images/halalan-public-site/2.webp",
        },
        {
          id: uuidv4(),
          title: "Canvassing - Public Site UI 3",
          img: "../images/halalan-public-site/3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "Vue 3",
        "TailwindCSS",
        "Laravel",
        "AWS Services",
        "PUSHER",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Application Developed to showcase transparency during the National Election of 2022 in the Philippines",
        },
        {
          id: uuidv4(),
          details: "Roles: SCRUM Master, Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "sona2022",
      title: "SONA 2022 Website",
      category: "Website",
      img: "images/sona2022/index.webp",
      publishDate: "July, 2022",
      tag: "Website",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://sona2022.ph",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "SONA 2022 Website UI 1",
          img: "../images/sona2022/1.webp",
        },
        {
          id: uuidv4(),
          title: "SONA 2022 Website UI 2",
          img: "../images/sona2022/2.webp",
        },
        {
          id: uuidv4(),
          title: "SONA 2022 Website UI 3",
          img: "../images/sona2022/3.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "Vue 3",
        "TailwindCSS",
        "Laravel",
        "AWS Services - S3 & CloudFront",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "An informative static website for the SONA 2022 and historical information on the previous SONAs.",
        },
        {
          id: uuidv4(),
          details:
            "Roles: Lead Developer, SCRUM Master, Frontend UI Developer, Backend API Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "housepass",
      title: "HousePass - Health Monitoring & Access Control System",
      category: "Web Application",
      img: "images/housepass/index.webp",
      publishDate: "July, 2022",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "http://housepass.hrep.online/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "HousePass UI 1",
          img: "../images/housepass/1.webp",
        },
        {
          id: uuidv4(),
          title: "HousePass UI 2",
          img: "../images/housepass/2.webp",
        },
        {
          id: uuidv4(),
          title: "HousePass UI 3",
          img: "../images/housepass/index.webp",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "House of Representatives of the Philippines",
        },
        // {
        //   id: uuidv4(),
        //   title: "Services",
        //   details: "UI Design & Frontend Development",
        // },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://www.congress.gov.ph",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "Vue 3",
        "TailwindCSS",
        "Laravel",
        "AWS Services",
        "PUSHER",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "A web application used to check employee’s access control and covid-19 symptoms in the House of Representatives of the Philippines.",
        },
        {
          id: uuidv4(),
          details:
            "Roles: SCRUM Master, Frontend UI Developer, Backend API Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "q2",
      title: "Q2 Software Platform",
      category: "Software Platform",
      img: "images/q2/index.png",
      publishDate: "2019",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Demo Link",
      objectivesDetails: "https://vostronet.com/software-platform/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "Q2 Software Platform UI 1",
          img: "../images/q2/1.png",
        },
        {
          id: uuidv4(),
          title: "Q2 Software Platform UI 2",
          img: "../images/q2/2.png",
        },
        {
          id: uuidv4(),
          title: "Q2 Software Platform UI 3",
          img: "../images/q2/index.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "Bootstrap",
        "Apollo GraphQL",
        "NodeJS - express",
        "PostgreSQL & Sequelize",
        "Docker",
        "REDIS",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "VostroNet's Q2 Platform is a cloud-based Wi-Fi management system that centralises and automates the management of a wireless environment. Smarter Internet.",
        },
        {
          id: uuidv4(),
          details:
            "Roles: Fullstack Engineer (FrontEnd Developer and Backend Developer)",
        },
      ],
      socialSharings: [],
    },
    {
      id: "vostronet-website",
      title: "VostroNet Website",
      category: "Website",
      img: "images/vostronet/index.png",
      publishDate: "2020",
      tag: "Website",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://vostronet.com/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "vostronet UI 1",
          img: "../images/vostronet/1.png",
        },
        {
          id: uuidv4(),
          title: "vostronet UI 2",
          img: "../images/vostronet/2.png",
        },
        {
          id: uuidv4(),
          title: "vostronet UI 3",
          img: "../images/vostronet/3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: ["HTML", "SCSS", "React", "Bootstrap", "GatsbyJS"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Website for leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          details: "Roles: Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "zolt",
      title: "Zolt Portal",
      category: "Web Application",
      img: "images/zolt/index.png",
      publishDate: "2020",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://www.zolt.com.au/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "zolt UI 1",
          img: "../images/zolt/1.png",
        },
        {
          id: uuidv4(),
          title: "zolt UI 2",
          img: "../images/zolt/2.png",
        },
        {
          id: uuidv4(),
          title: "zolt UI 3",
          img: "../images/zolt/3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "Bootstrap",
        "GatsbyJS",
        "Apollo GraphQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Portal for Zolt Internet Users - to manage account and internet plans",
        },
        {
          id: uuidv4(),
          details: "Roles: Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "getgud",
      title: "GetGud Portal",
      category: "Web Application",
      img: "images/getgud/index.png",
      publishDate: "2021",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://getgud.gg/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "getgud UI 1",
          img: "../images/getgud/1.png",
        },
        {
          id: uuidv4(),
          title: "getgud UI 2",
          img: "../images/getgud/2.png",
        },
        {
          id: uuidv4(),
          title: "getgud UI 3",
          img: "../images/getgud/index.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "Bootstrap",
        "GatsbyJS",
        "Apollo GraphQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Portal for GetGud Internet Users - to manage account and internet plans",
        },
        {
          id: uuidv4(),
          details: "Roles: Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "evergy",
      title: "Evergy Internet Portal",
      category: "Web Application",
      img: "images/evergy/index.png",
      publishDate: "2021",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://evergy.vostro.live/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "evergy UI 1",
          img: "../images/evergy/1.png",
        },
        {
          id: uuidv4(),
          title: "evergy UI 2",
          img: "../images/evergy/index.png",
        },
        // {
        //   id: uuidv4(),
        //   title: "evergy UI 3",
        //   img: "../images/evergy/index.png",
        // },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "Bootstrap",
        "GatsbyJS",
        "Apollo GraphQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Portal for Evergy Internet Users - to manage account and internet plans",
        },
        {
          id: uuidv4(),
          details: "Roles: Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
    {
      id: "speedytel",
      title: "SpeedyTel Internet Portal",
      category: "Web Application",
      img: "images/speedytel/index.png",
      publishDate: "2021",
      tag: "Web Application",
      clientTitle: "About Client",
      objectivesTitle: "Live Link",
      objectivesDetails: "https://speedy.tel/",
      techTitle: "Tools & Technologies",
      detailsTitle: "Description",
      socialTitle: "",
      projectImages: [
        {
          id: uuidv4(),
          title: "speedytel UI 1",
          img: "../images/speedytel/1.png",
        },
        {
          id: uuidv4(),
          title: "speedytel UI 2",
          img: "../images/speedytel/2.png",
        },
        {
          id: uuidv4(),
          title: "speedytel UI 3",
          img: "../images/speedytel/index.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "VostroNet",
        },
        {
          id: uuidv4(),
          title: "Services",
          details:
            "VostroNet is a leading network owner and internet provider in the Asia-Pacific region",
        },
        {
          id: uuidv4(),
          title: "Website",
          details: "https://vostronet.com/",
        },
      ],
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "Bootstrap",
        "GatsbyJS",
        "Apollo GraphQL",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Portal for SpeedyTel Internet Users - to manage account and internet plans",
        },
        {
          id: uuidv4(),
          details: "Roles: Frontend UI Developer",
        },
      ],
      socialSharings: [],
    },
  ],
  clientsHeading: "",
  clients: [
    // {
    //   id: uuidv4(),
    //   title: "Amazon",
    //   img: "../brands/amazon_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "Sony",
    //   img: "../brands/sony_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "Adidas",
    //   img: "../brands/adidas_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "FILA",
    //   img: "../brands/fila_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "NB",
    //   img: "../brands/nb_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "SAMSUNG",
    //   img: "../brands/samsung_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "CANON",
    //   img: "../brands/canon_gray.png",
    // },
    // {
    //   id: uuidv4(),
    //   title: "PUMA",
    //   img: "../brands/puma_gray.png",
    // },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "I'm Karl Baldelomar a senior full-stack developer. I've been working with react, vue, laravel, and nodejs for 5 yrs. I used to work for the house of representatives(lead software developer) and the office of the president(IT officer) in the Philippines and worked on national projects(system for the canvassing of elections), also before that I've been working for Australian companies as a software developer.",
    },
    {
      id: uuidv4(),
      bio: "as a passionate software developer, I am willing to work long hours in order to build and achieve the project's goals.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/aerborne",
    },
    {
      id: uuidv4(),
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/karl-baldelomar-04b8b0162/",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Web Application",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
