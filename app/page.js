import Link from "next/link";
import paths from "./paths.json";

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-5">
      {paths.map((p) => (
        <Link
          href={p.path}
          key={p.label}
          className="self-center justify-self-center"
        >
          {p.label}
        </Link>
      ))}
    </div>
  );
}
