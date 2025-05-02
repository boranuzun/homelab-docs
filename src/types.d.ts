// src/types.d.ts or src/aliases.d.ts

declare module "@theme/*";
declare module "@docusaurus/*";
declare module "@site/*";
declare module "@theme-original/*";

// src/style.d.ts
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  