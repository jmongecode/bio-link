// TODO : update about

import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="https://i.postimg.cc/5tgDCZR4/jm.jpg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">Jesús Andrés Monge Loor</h1>
          <h2 className="font-medium text-2xl lg:text-3xl">Desarrollador web / Negocios Digitales</h2>
        </div>
      </div>

      <div>
        Soy un developer con experiencia en el desarrollo de aplicaciones web y móviles. Me apasiona la tecnología, la programación, y disfruto creando soluciones digitales que ayuden a las personas a mejorar su calidad de vida.
      </div>

      <div className="flex self-stretch justify-end">
        <Button as="a" href="https://github.com/jesusmongedev" target="_blank" aria-label="GitHub" title="GitHub">
          <Simple.IconGitHub />
          GitHub
        </Button>
      </div>
    </div>
  );
};
