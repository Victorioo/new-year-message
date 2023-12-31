"use client";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";
import Link from "next/link";
function Destinatary({}) {
  const router = useParams();
  const { destinatary, message }: Params = router;
  console.log(destinatary);
  const parsedDestinatary = decodeURIComponent(destinatary);
  const parsedMessage = decodeURIComponent(message);

  const shareText = () => {
    const actualURL = window.location.href;
    console.log(actualURL);
    var textToShare = `¡Te hice un mensaje! Puedes verlo aquí: ${actualURL}`; // Tu mensaje aquí

    if (navigator.share) {
      navigator
        .share({
          text: textToShare,
        })
        .then(() => console.log("Compartido con éxito"))
        .catch((error) => console.error("Error al compartir", error));
    } else {
      // En caso de que el navegador no admita la API de compartir
      // Puedes proporcionar un enlace de respaldo o mostrar un mensaje
      alert("Tu navegador no admite la función de compartir.");
    }
  };

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
          <h1 className="text-5xl">{parsedDestinatary},</h1>
          <p className="text-2xl max-w-xl px-8">{parsedMessage}</p>
          <div className="flex items-center gap-8">
            <Link
              className="px-8 py-2 bg-slate-950 text-xl font-bold shadow-lg rounded-lg border-b-4 border-black"
              href="/"
            >
              Volver
            </Link>
            <button
              className="px-8 py-2 bg-red-500 text-xl font-bold rounded-lg shadow-lg border-b-4 border-red-900 cursor-pointer"
              onClick={shareText}
            >
              Compartir
            </button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Destinatary;
