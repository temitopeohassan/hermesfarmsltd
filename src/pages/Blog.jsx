import React from "react";
import Header from "../components/Header";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

const posts = [
  {
    title: "Improving Soil Health Before Planting Season",
    excerpt:
      "Simple pre-season practices that improve fertility, moisture retention, and long-term crop performance.",
  },
  {
    title: "How We Maintain Freshness in Produce Distribution",
    excerpt:
      "From harvest windows to packaging controls, our process keeps produce fresh through delivery.",
  },
  {
    title: "Organic Farming: What Buyers Should Know",
    excerpt:
      "A practical guide for households and retailers on what to look for in responsibly grown produce.",
  },
];

export default function Blog() {
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
                <div className="col-lg-4 col-md-6" key={post.title}>
                  <article className="post-item">
                    <div className="post-item-box">
                      <div className="post-featured-image">
                        <div className="post-media-placeholder">
                          <i className="fa-regular fa-newspaper" />
                        </div>
                      </div>
                      <div className="post-item-content">
                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>
                      </div>
                    </div>
                    <div className="post-item-btn">
                      <span className="readmore-btn">Read More Soon</span>
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
