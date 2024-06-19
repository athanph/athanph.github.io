import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="text-xl font-semibold">
        jonathanmanas<span className="text-accent">.</span>dev
      </h1>
    </Link>
  );
};

export default Logo;
