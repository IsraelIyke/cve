import Link from "next/link";

export default function Category(props) {
  return (
    <div className="number">
      <Link href={`/541/#${props.id}`}>{props.id}</Link>
    </div>
  );
}
