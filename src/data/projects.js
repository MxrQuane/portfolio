import { thumbnail as zirox, projectImages as ziroxImages } from "../assets/images/projects/zirox";
import { thumbnail as herdVision, projectImages as herdVisionImages } from "../assets/images/projects/herdvision";
import { thumbnail as autoLed, projectImages as autoLedImages } from "../assets/images/projects/autoled";
import { thumbnail as fireGuard, projectImages as fireGuardImages } from "../assets/images/projects/fireguard";
import { thumbnail as stockify, projectImages as stockifyImages } from "../assets/images/projects/stockify";

export const projects = [
  {
    title: "zirox",
    subTitle: "Task manager built for developers",
    description: "A task manager that speaks GitHub's language — two-way sync between your workflow and your repos, built with React, Electron, and a local-first architecture.",
    thumbnail: zirox,
    images: ziroxImages,
    tags: ["react", "electron", "postgre", "SQLite"],
    githubRepo: "MxrQuane/Zirox",
    x: "md:top-80",
    y: "md:left-20 lg:left-35 xl:left-50",
  },
  {
    title: "herd vision",
    subTitle: "Estrus prediction, powered by AI",
    description: "A web platform that predicts cow estrus using an LSTM model, helping farmers catch fertility windows before they're missed.",
    thumbnail: herdVision,
    images: herdVisionImages,
    tags: ["react", "express", "mongoDB", "python", "flask"],
    githubRepo: "MxrQuane/CMS",
    x: "md:top-120",
    y: "md:right-20 xl:right-50",
  },
  {
    title: "autoLed",
    subTitle: "Headlight art that actually glows",
    description: "An e-commerce platform selling illuminated canvas art made from car light photography — each piece built with real LED lighting, not just printed on canvas.",
    thumbnail: autoLed,
    images: autoLedImages,
    tags: ["react"],
    x: "md:top-170",
    y: "md:left-25 lg:left-40 xl:left-55",
    display: "P"
  },
  {
    title: "fireGuard",
    subTitle: "Wildfire risk, predicted and mapped",
    description: "A GIS-based platform that maps wildfire risk across Guelma's forests, turning environmental data into early warnings before conditions turn dangerous.",
    tags: ["Next.Js", "express", "mongoDB", "python", "flask"],
    thumbnail: fireGuard,
    images: fireGuardImages,
    x: "md:top-200",
    y: "md:right-28 lg:right-45 xl:right-90",
  },
  {
    title: "stockify",
    subTitle: "Sell, track, restock — seamlessly",
    description: "A point-of-sale and inventory system built for wholesale and retail sellers — tracks stock, sales, and low-inventory alerts without needing a constant internet connection.",
    thumbnail: stockify,
    images: stockifyImages,
    tags: ["react", "express", "mongoDB"],
    x: "md:top-300",
    y: "md:left-1/2 md:-translate-x-1/2",
  },
];