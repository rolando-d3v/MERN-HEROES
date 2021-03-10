import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";

export const homeObjOne = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Marketing Agency",
  headline: "Lead Generation Specialist for Online Businesses",
  description:
    "We help business owners increase their revenue. Our team of unique specialist can help you achieve your business goals.",
  buttonLabel: "Get Started",
  imgStart: "",
  img: "/images/svg-1.svg",
  alt: "Credit Card",
  start: "",
};

export const homeObjTwo = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Instant Setup",
  headline: "Extremely quick onboarding process",
  description:
    "Once you've joined, our team of specialist will reach out to you and get you set up in minutes.",
  buttonLabel: "Learn More",
  imgStart: "",
  img: "/images/svg-2.svg",
  alt: "Vault",
  start: "",
};

export const homeObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Sarah Jeni",
  headline:
    "Ultra helped me increase my revenue by over 3X in less than 3 months!",
  description:
    "Their team is wonderful! I can't believe I didn't start working with them earlier.",
  buttonLabel: "View Case Study",
  imgStart: "start",
  img: "/images/profile.jpg",
  alt: "Vault",
  start: "true",
};

export const homeObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Secure Database",
  headline: "All your data is stored on our secure server",
  description:
    "You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",
  buttonLabel: "Sign Up Now",
  imgStart: "x",
  img: "/images/svg-3.svg",
  alt: "Vault",
  start: "true",
};

export let footerData = [
  {
    title: "About Us",
    links: [
      { link1: "Testimonio" },
      { link1: "Carres" },
      { link1: "Inversion" },
      { link1: "Services" },
    ],
  },
  {
    title: "Contact Us",
    links: [
      { link1: "Testimonio" },
      { link1: "Carres" },
      { link1: "Inversion" },
      { link1: "Services" },
    ],
  },
  {
    title: "Videos",
    links: [
      { link1: "Testimonio" },
      { link1: "Carres" },
      { link1: "Inversion" },
      { link1: "Services" },
    ],
  },
  {
    title: "Social Media",
    links: [
      { link1: "Testimonio" },
      { link1: "Carres" },
      { link1: "Inversion" },
      { link1: "Services" },
    ],
  },
];

export let PriceData = [
  {
    icon: <GiCrystalBars />,
    plan: "Starter Pack",
    price: "99.9",
    mes: "per month",
    new: "100 New Users",
    budget: "10,000 Budget",
    feature: "Retargeting analytics",
    button: "Comprar Plan",
  },
  {
    icon: <GiCutDiamond />,
    plan: "Starter lux",
    price: "299.9",
    mes: "per month",
    new: "100 New Users",
    budget: "10,000 Budget",
    feature: "Retargeting analytics",
    button: "Comprar Plan",
  },
  {
    icon: <GiRock />,
    plan: "Starter Premiun",
    price: "999.9",
    mes: "per month",
    new: "100 New Users",
    budget: "10,000 Budget",
    feature: "Retargeting analytics",
    button: "Comprar Plan",
  },
];
