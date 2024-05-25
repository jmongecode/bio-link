import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide, Simple } from "./icons";
import { IconNextjs, IconTailwind } from './icons/simple';

// TODO : update tags
const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: Simple.IconNextjs,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Simple.IconTailwind,
  },
}

// TODO : update projects
const projects = [
  {
    title: "Platzi Avo eCommerce",
    description: "Tomando ventaja de la API de Next.js, puedes revisar información y descubrir tu aguacate favorito, y sus detalles.",
    icon: Lucide.IconShoppingCart,
    url: "https://github.com/jesusmongedev/platzi-avo-app",
    image: "/projects/platzi-avo.webp",
    tags: [TAGS.NEXT],
  },
  {
    title: "Qik - Dashboard de métricas para tu negocio",
    description: "Dashboard de métricas para tu negocio. Toma decisiones ejecutivas basadas en datos.",
    icon: Lucide.IconDashboard,
    url: "https://dashboard.qikstarts.com/login?demo=true",
    image: "/projects/qik-dashboard.webp",
    tags: [TAGS.NEXT, TAGS.TAILWIND],
  },
];

export default () => {
  return (
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <li
              key={project.title}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="grid grid-cols-2 items-stretch gap-5 pl-2">
                 <div className="w-full">
    <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
      <img alt="Recién llegado vs 5 años en Nueva Zelanda" className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105" loading="lazy" src={project.image} />
    </div>
  </div>
                <div className="">
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-base">{project.title}</h3>
                  <ul className="flex flex-row my-2 gap-x-2">
                    {project.tags.map((tag) => (
                      <li key={tag.name}>
                        <span
                          className={`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `}
                        >
                          <tag.icon className="size-4" />
                          {tag.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-sm">
                    {project.description}
                  </div>
                  <div className="mt-2 flex">
                    <div className="ml-auto bg-black justify-end">
                  <IconButton as="a" role="button" href={project.url} className="group/icon"   target="_blank" aria-label="Open">
                    <Lucide.IconExternalLink
                      aria-label="Open"
                      className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                    />
                  </IconButton>
                    </div>
                  </div>
              </div>

              </div>
            </li>
          );
        })}
      </ul>
  );
};
