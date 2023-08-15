// pages/blog.js
import Link from 'next/link';
import blogData from '@/data/blogData.json';
import styles from "./blog.module.css"

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1>My Blog</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <h2>{post.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
