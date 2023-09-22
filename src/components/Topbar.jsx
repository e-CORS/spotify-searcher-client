import Image from "next/image";
export default function Topbar() {
  return (
    <div className="flex h-fit items-center justify-start px-24 py-4">
      <Image
        src="/spotify-logo.png"
        alt="spotify logo"
        width={300}
        height={90}
      />
      <span className="text-6xl font-semibold tracking-tighter ml-1">
        Searcher
      </span>
    </div>
  );
}
