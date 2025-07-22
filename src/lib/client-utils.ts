export interface Post {
  slug: string;
  filename: string;
  title: string;
  date: Date;
  spoiler?: string;
  draft: boolean;
}

// 클라이언트 사이드에서 사용할 페이지네이션 함수
export function getPosts(allPosts: Post[], page: number = 1, limit: number = 5): {
  posts: Post[];
  hasMore: boolean;
  total: number;
} {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = allPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    hasMore: endIndex < allPosts.length,
    total: allPosts.length,
  };
} 