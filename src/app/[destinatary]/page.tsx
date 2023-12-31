"use client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { useParams } from "next/navigation";

import Link from "next/link";

import React, { useState } from "react";
function Destinatary() {
  const router = useParams();
  const { destinatary }: Params = router;
  const [message, setMessage] = useState("");
  const parsedDestinatary = decodeURIComponent(destinatary);
  return (
    <>
      <header className="absolute top-0 left-0">
        <Image
          src="/top-items.png"
          alt="omegalul"
          className="w-screen h-full -z-10"
          width={100}
          height={100}
          unoptimized={true}
        />
      </header>
      <section className="flex items-center justify-center min-h-screen bg-gray-900 z-40 backdrop:blur-3xl">
        <article className="flex flex-col items-center gap-9">
          <h1 className="text-5xl text-white">{parsedDestinatary},</h1>
          <p className="text-2xl max-w-2xl text-white">{message}</p>
          <textarea
            className="border-2 border-gray-950 pr-8 py-8 rounded-full bg-gray-950 text-xl pl-8 outline-none focus:border-2 focus:border-red-500 transition-all resize-none"
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
          <Link
            className="px-8 py-2 bg-red-500 text-xl font-bold rounded-lg shadow-lg border-b-4 border-red-900"
            href={`/${destinatary}/${encodeURIComponent(message)}`}
          >
            Continuar
          </Link>
        </article>
      </section>
    </>
  );
}

export default Destinatary;
