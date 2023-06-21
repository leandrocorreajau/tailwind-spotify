import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="mt-10 mb-8 font-semibold text-3xl">Good Aftertnoon</h1>
          <div className="grid grid-cols-3 gap-6">
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="group bg-white/5 rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <Image
                width={104}
                height={104}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong>Album</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h1 className="front-semibold text-2xl mt-10 mb-6">
            Made for Leandro Corrêa
          </h1>
          <div className="grid grid-cols-8 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md hover:bg-white/10 flex flex-col gap-1"
            >
              <Image
                className="w-full"
                width={120}
                height={120}
                src="/album.jpg"
                alt="Capa Algum"
              />
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-xs text-zinc-500">Artista</span>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
