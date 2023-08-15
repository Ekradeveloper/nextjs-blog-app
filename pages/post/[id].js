// pages/post/[id].js
import { useRouter } from 'next/router';
import blogData from '@/../data/blogData.json';
import styles from "./post.module.css"

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the blog post with the matching id
  const post = blogData.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}

export default Post;
