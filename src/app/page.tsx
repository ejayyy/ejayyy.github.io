import { getAllPosts } from "@/lib/posts";
import { getPosts } from "@/lib/client-utils";
import InfinitePostList from "@/components/InfinitePostList";
import Header from "@/components/Header";
import Image from "next/image";

export default async function Home() {
  const allPosts = getAllPosts();
  const { posts: initialPosts, hasMore: initialHasMore } = getPosts(
    allPosts,
    1,
    5
  );

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="sm:w-90 sm:mr-3 sm:float-left sm:mb-0">
          <Image
            className="w-full h-full fill-slate-600 dark:hidden"
            aria-label="Laptop Cat Logo"
            src={"/laptop-cat-light.svg"}
            alt="Laptop Cat Logo"
            width={300}
            height={115}
          />
          <Image
            className="w-full h-full fill-rose-200 hidden dark:block"
            aria-label="Laptop Cat Logo"
            src={"/laptop-cat-night.svg"}
            alt="Laptop Cat Logo"
            width={300}
            height={115}
          />
        </div>
        <InfinitePostList
          allPosts={allPosts}
          initialPosts={initialPosts}
          initialHasMore={initialHasMore}
        />
      </div>
    </>
  );
}
