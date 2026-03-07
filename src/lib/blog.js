import blogPosts from "../data/blogPosts.json";

function sortByPublishedDate(posts) {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllPosts() {
  return sortByPublishedDate(blogPosts);
}

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getRecentPosts(limit = 3, excludeSlug) {
  return sortByPublishedDate(blogPosts)
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit);
}

export function formatPostDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
