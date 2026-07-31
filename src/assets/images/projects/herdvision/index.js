const modules = import.meta.glob("./_*.webp", { eager: true });

export const projectImages = Object.keys(modules)
  .map((key) => modules[key].default);

export { default as thumbnail } from "./thumbnail.webp";