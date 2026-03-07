import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";
import { formatPostDate, getAllPosts } from "../lib/blog";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <PageBanner title="Blog" />
      <main className="main-content">
        <section className="page-blog">
          <div className="container">
            <div className="section-title text-center">
              <h3>Insights</h3>
              <h2>Stories and updates from Hermes Farms</h2>
            </div>

            <div className="row">
              {posts.map((post) => (
                <div className="col-lg-4 col-md-6" key={post.slug}>
                  <article className="post-item">
                    <div className="post-item-box">
                      <div className="post-featured-image">
                        <Link to={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                          <div className="post-media-placeholder">
                            <i className={post.heroIcon || "fa-regular fa-newspaper"} />
                          </div>
                        </Link>
                      </div>
                      <div className="post-item-content">
                        <div className="blog-card-meta">
                          <span>{post.category}</span>
                          <span>{formatPostDate(post.publishedAt)}</span>
                        </div>
                        <h2>
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p>{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="post-item-btn">
                      <Link to={`/blog/${post.slug}`} className="readmore-btn">
                        Read Article
                      </Link>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
