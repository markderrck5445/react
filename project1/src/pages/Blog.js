import React from 'react';
import { Link } from 'react-router-dom';


function Blog({ post }) {
  return (
    <div className="blog-card">
      <div className="blog-card-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="blog-card-content">
        <div className="blog-card-category">{post.category}</div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-meta">
          <span className="blog-card-date">{post.date}</span>
          <span className="blog-card-author">By {post.author}</span>
        </div>
        <Link to={`/blog/${post.slug}`} className="blog-card-link">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Blog;