import Link from "next/link";

const paths = [
  {
    label: "Bubble Effect",
    path: "bubble-effect",
  },
];

export default function Home() {
  return (
    <div>
      {paths.map((p) => (
        <Link href={p.path} key={p.label}>
          {p.label}
        </Link>
      ))}
    </div>
  );
}
