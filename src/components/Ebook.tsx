import { Simple } from "~/components/icons/index.ts";
import { Button } from "~/components/ui/index.ts";

function Ebook() {

    /** submit form to /api/ebook */

    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     const form = e.target as HTMLFormElement;
    //     const formData = new FormData(form);
    //     const data = Object.fromEntries(formData.entries());
    //     const response = await fetch('/api/ebook', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     if (response.ok) {
    //        // Property 'reset' does not exist on type 'EventTarget'
    //         form.reset();
    //         alert('Gracias por suscribirte a nuestro boletín');
    //     }
    // }

  return (
<section className="">
  <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
      <div className="mx-auto max-w-screen-md sm:text-center">
      <div className="w-full relative">
            </div>

            <div className="w-full relative">
      <div className="grid grid-cols-1 gap-8">
        <picture className="w-full relative mx-auto h-auto overflow-hidden rounded-lg " >
                <source srcSet="/ebook.webp" type="image/webp"  />
                <source srcSet="/ebook.jpg" type="image/jpeg"  />
                {/* <p className="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Bienvenido a 'Los Fundamentos de la Creación Personal'. Este ebook es tu guía para entender y aplicar los tres principios esenciales para transformar tu vida: Espíritu, Mente y Cuerpo.</p> */}
        <img src="/ebook.jpg" alt="Ebook" className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"/>
        </picture>
      </div>
      </div>
          <p className="mx-auto my-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">Ingresa a nuestro Canal de Telegram para Descargar el Ebook <span className="font-bold text-primary" >"Los Fundamentos de la Creación Personal"</span> y comienza a transformar tu vida hoy mismo.</p>
          {/* <form onSubmit={handleSubmit} className=""> */}
              {/* <div className="flex-col gap-2 items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className=" relative w-full">
                      <label htmlFor="name" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-5 h-5 text-black" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="user"><path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Nombre" type="name" id="name" required/>
                  </div>
                  <div className="relative w-full">
                      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
                      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300  sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Tú mejor correo" type="email" id="email" required/>
                  </div>
              </div> */}
                <div className="mb-2 md:mb-4">
                  {/* <button type="submit" className="transition duration-500 hover:scale-105 py-3 px-5 w-full text-sm font-black text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600  dark:focus:ring-primary-800">¡Obtener Ahora!</button> */}
                  {/* <button  className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40">
      <a href="https://t.me/+VrBS4Z4tJRc3ZWQ5" target="_blank" rel="noreferer noopener" className="relative z-10"> ¡DESCARGAR PDF! </a>
    </button> */}
                </div>
                <Button as="a" href="https://t.me/+VrBS4Z4tJRc3ZWQ5" target="_blank" aria-label="Unete al grupo de telegram" title="¡DESCARGAR PDF!">
          <Simple.IconTelegram />
          ¡DESCARGAR PDF!
        </Button>
              {/* <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">Nos comprometemos a proteger tu privacidad. Nunca compartiremos tu información.. <a href="#" className="font-medium text-primary-600 dark:text-primary-500 hover:underline">Lee nuestra política de privacidad</a>.</div> */}
          {/* </form> */}
      </div>
  </div>
</section>
);
};

export default Ebook;
