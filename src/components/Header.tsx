import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-14">
      <Link
        href="/"
        className="inline-block before:content-none text-inherit hover:underline text-slate-600 dark:text-slate-400"
      >
        <h1 className="text-2xl font-semibold font-(family-name:--font-source-code-pro) tracking-tight">
          My
          <small className="text-base font-normal">
            &nbsp;sweet little&nbsp;
          </small>
          Blog
        </h1>
      </Link>
    </header>
  );
}
