"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { getPosts, Post } from "../lib/client-utils";

interface InfinitePostListProps {
  allPosts: Post[];
  initialPosts: Post[];
  initialHasMore: boolean;
}

export default function InfinitePostList({
  allPosts,
  initialPosts,
  initialHasMore,
}: InfinitePostListProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(2); // Start from page 2 since page 1 is already loaded

  const loadMorePosts = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const result = getPosts(allPosts, page, 5);
      setPosts((prev) => [...prev, ...result.posts]);
      setHasMore(result.hasMore);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Fail", error);
    } finally {
      setLoading(false);
    }
  }, [allPosts, page, loading, hasMore]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      // Load more when user is within 500px of the bottom
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        loadMorePosts();
      }
    };

    // Check if we need to load more immediately (if content is shorter than viewport)
    const checkInitialLoad = () => {
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;

      if (scrollHeight <= clientHeight && hasMore && !loading) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Check after component mounts and DOM updates
    setTimeout(checkInitialLoad, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMorePosts, hasMore, loading]);

  return (
    <>
      {posts.map((post) => (
        <article key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="main-link">
            <div className="basis-2/3">
              <h2 className="font-semibold my-0">{post.title}</h2>
              {post.spoiler && <span className="text-sm">{post.spoiler}</span>}
            </div>
            {post.date && (
              <time className="text-sm" dateTime={post.date.toISOString()}>
                {post.date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
            )}
          </Link>
        </article>
      ))}

      {loading && (
        <div className="flex justify-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 dark:border-gray-100"></div>
        </div>
      )}

      {hasMore && !loading && (
        <div className="flex justify-center py-4">
          <button
            onClick={loadMorePosts}
            className="font-semibold px-4 border-b-2 border-rose-600 dark:border-pink-400 hover:text-rose-600 dark:hover:text-pink-100 dark:hover:border-pink-100 "
          >
            Do you want some more?
          </button>
        </div>
      )}

      {!hasMore && posts.length > 0 && (
        <div className="text-center py-4 text-gray-500 dark:text-gray-400">
          <p>That's all!</p>
        </div>
      )}
    </>
  );
}
