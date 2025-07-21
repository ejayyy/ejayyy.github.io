import Header from "@/components/Header";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className="prose prose-gray dark:prose-invert max-w-none">
        {children}
      </section>
    </>
  );
}
