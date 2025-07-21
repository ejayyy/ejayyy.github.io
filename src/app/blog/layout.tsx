import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="prose prose-gray dark:prose-invert max-w-none">
      {children}
    </section>
  );
}
