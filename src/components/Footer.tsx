import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="mt-30 text-center space-y-4">
      <ThemeToggle />
      <p className="text-sm select-none">
        ⓒ {new Date().getFullYear()}{" "}
        <Link href="https://github.com/ejayyy" target="_blank">
          Ejayyy
        </Link>{" "}
        All rights reserved.
      </p>
    </footer>
  );
}
