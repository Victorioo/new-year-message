"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function ChooseName() {
  const [destinatary, setDestinatary] = useState("");

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
          <h1 className="text-5xl">¿Para quien es el mensaje?</h1>
          <input
            type="text"
            name=""
            id=""
            className="border-2 border-gray-950 pr-16 py-2 rounded-full bg-gray-950 text-xl pl-4 outline-none focus:border-2 focus:border-red-500 transition-all"
            onChange={(event) => setDestinatary(event.target.value)}
          />
          <Link
            className="px-8 py-2 bg-red-500 text-xl font-bold rounded-lg shadow-lg border-b-4 border-red-900"
            href={`/${destinatary}`}
          >
            Continuar
          </Link>
        </article>
      </section>
    </>
  );
}

export default ChooseName;
