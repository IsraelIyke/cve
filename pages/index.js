import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/541">
        <div>Cve 541</div>
      </Link>
      <Link href="/populate">
        <div>Populate Cve 541</div>
      </Link>
      <Link href="/521">
        <div>Cve 521</div>
      </Link>
      <Link href="/populate521">
        <div>Populate Cve 521</div>
      </Link>
    </div>
  );
}
