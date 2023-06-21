import Image from "next/image";
import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume,
  Maximize2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image width={50} height={50} src="/album.jpg" alt="Capa Algum" />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighter</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-3">
          <Shuffle className="text-zinc-200" size={20} />
          <SkipBack className="text-zinc-200" size={20} />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto">
            <Play />
          </button>
          <SkipForward className="text-zinc-200" size={20} />
          <Repeat className="text-zinc-200" size={20} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-500">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-40 rounded"></div>
          </div>
          <span className="text-xs text-zinc-500">2:15</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume size={20} />
          <div className="h-1 rounded-full w-32 bg-zinc-600">
            <div className="bg-zinc-200 h-1 w-10 rounded"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
