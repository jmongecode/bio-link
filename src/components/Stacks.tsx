import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "JavaScript",
    category: "Desarrollo",
    icon: Simple.IconJavaScript,
    url: "https://www.javascript.com",
  },
  {
    name: "Astro JS",
    category: "Desarrollo",
    icon: Simple.IconFramer,
    url: "https://www.astro.build",
  },
  {
    name: "React",
    category: "Desarrollo",
    icon: Simple.IconReact,
    url: "https://www.reactjs.org",
  },
  {
    name: "Nextjs",
    category: "Desarrollo",
    icon: Simple.IconNextjs,
    url: "https://nextjs.org",
  },
  {
    name: "Tailwind CSS",
    category: "Desarrollo",
    icon: Simple.IconTailwind,
    url: "https://tailwindcss.com",
  },
  {
    name: "TypeScript",
    category: "Desarrollo",
    icon: Simple.IconTypescript,
    url: "https://typescriptlang.org",
  },
  {
    name: "Figma",
    category: "Diseño",
    icon: Simple.IconFigma,
    url: "https://www.figma.com",
  },
  {
    name: "Notion",
    category: "Productividad",
    icon: Simple.IconNotion,
    url: "https://www.notion.so",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Tecnologías</h2>
      <ul className="grid sm:grid-cols-2 gap-3 p-1">
        {stacks.map((stack) => {
          return (
            <li
              key={stack.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <stack.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{stack.name}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {stack.category}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={stack.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
