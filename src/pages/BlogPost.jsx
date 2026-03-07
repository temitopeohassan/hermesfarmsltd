import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import { formatPostDate, getPostBySlug, getRecentPosts } from "../lib/blog";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <Header />
        <PageBanner title="Blog Post Not Found" />
        <main className="main-content">
          <section className="page-single-post">
            <div className="container">
              <div className="blog-not-found">
                <h2>Post not found</h2>
                <p>The article you are looking for does not exist.</p>
                <Link className="btn-default" to="/blog">
                  Back to Blog
                </Link>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const recentPosts = getRecentPosts(3, post.slug);

  return (
    <>
      <Header />
      <PageBanner title={post.title} />

      <main className="main-content">
        <section className="page-single-post">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <article className="post-content">
                  <div className="post-entry">
                    <div className="blog-post-meta">
                      <span>{post.category}</span>
                      <span>{formatPostDate(post.publishedAt)}</span>
                      <span>{post.readTime}</span>
                      <span>By {post.author}</span>
                    </div>

                    <p className="blog-post-lead">{post.excerpt}</p>

                    {post.content.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}

                    {post.highlights?.length > 0 && (
                      <div className="blog-highlight-box">
                        <h4>Key takeaways</h4>
                        <ul>
                          {post.highlights.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              </div>

              <div className="col-lg-4">
                <aside className="page-single-sidebar">
                  <div className="page-category-list">
                    <h3>Recent Articles</h3>
                    <ul>
                      {recentPosts.map((recentPost) => (
                        <li key={recentPost.slug}>
                          <Link to={`/blog/${recentPost.slug}`}>{recentPost.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>

            <div className="blog-post-nav">
              <Link to="/blog" className="btn-default">
                Back to All Posts
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
