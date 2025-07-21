import { getPosts } from "./actions";
import LaptopCatLight from "/public/laptop-cat-light.svg";
import LaptopCatNight from "/public/laptop-cat-night.svg";
import InfinitePostList from "../components/InfinitePostList";
import Header from "@/components/Header";

export default async function Home() {
  const { posts: initialPosts, hasMore: initialHasMore } = await getPosts(1, 5);

  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="sm:w-90 sm:mr-3 sm:float-left sm:mb-0">
          <LaptopCatLight
            className="w-full h-full fill-slate-600 dark:hidden"
            aria-label="Laptop Cat Logo"
          />
          <LaptopCatNight
            className="w-full h-full fill-rose-200 hidden dark:block"
            aria-label="Laptop Cat Logo"
          />
        </div>
        <InfinitePostList
          initialPosts={initialPosts}
          initialHasMore={initialHasMore}
        />
      </div>
    </>
  );
}
