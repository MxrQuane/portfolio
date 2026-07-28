import zirox from "../assets/images/projects/zirox/thumbnail.webp";
import herdVision from "../assets/images/projects/herdvision/thumbnail.webp";
import autoLed from "../assets/images/projects/autoled/thumbnail.webp";
import fireGuard from "../assets/images/projects/fireguard/thumbnail.webp";
import stockify from "../assets/images/projects/stockify/thumbnail.webp";

export const projects = [
  {
    title: "Zirox",
    description: "Task manager built for developers",
    image: zirox,
    x: "md:top-80",
    y: "md:left-20 lg:left-35 xl:left-50",
  },
  {
    title: "Herd Vision",
    description: "Estrus prediction, powered by AI",
    image: herdVision,
    x: "md:top-120",
    y: "md:right-20 xl:right-50",
  },
  {
    title: "AutoLed",
    description: "Headlight art that actually glows",
    image: autoLed,
    x: "md:top-170",
    y: "md:left-25 lg:left-40 xl:left-55",
    display: "P"
  },
  {
    title: "Fire Guard",
    description: "Wildfire risk, predicted and mapped",
    image: fireGuard,
    x: "md:top-200",
    y: "md:right-28 lg:right-45 xl:right-90",
  },
  {
    title: "Stockify",
    description: "Sell, track, restock — seamlessly",
    image: stockify,
    x: "md:top-300",
    y: "md:left-1/2 md:-translate-x-1/2",
  },
];