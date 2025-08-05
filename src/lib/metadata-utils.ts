// Base keywords that will be merged with page-specific keywords
export const baseKeywords = ["blog", "development", "journal", "개발", "블로그"];

// Utility function to merge base keywords with page-specific keywords
export function mergeKeywords(pageKeywords: string[] = []): string[] {
  return [...new Set([...baseKeywords, ...pageKeywords])];
}