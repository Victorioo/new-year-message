import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <>
      <header className="absolute top-0 left-0">
        <Image
          src="/top-items.png"
          alt="omegalul"
          className="w-screen h-full"
          width={100}
          height={100}
          unoptimized={true}
        />
      </header>
      <section className="flex items-center justify-center min-h-screen bg-gray-900">
        <article className="flex flex-col items-center gap-9">
          <h1 className="text-5xl text-white">¡Feliz año nuevo!</h1>
          <p className="text-2xl max-w-3xl text-center leading-normal text-gray-200 md:px-8">
            Mereces saludar a tus{" "}
            <span className="text-indigo-400">seres queridos</span> de la mejor
            manera, por lo que te vamos a dar un espacio para que le dejes un
            mensaje diciendo lo que sientas, lo que mas te gusta de esa o esas
            personas.
          </p>
          <a className="px-8 py-2 bg-red-500 text-xl font-bold rounded-lg shadow-lg border-b-4 border-red-900 text-white" href="choose-name">
            Continuar
          </a>
        </article>
      </section>
    </>
  );
}

export default HomePage;
