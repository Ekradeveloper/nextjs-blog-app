
// pages/index.js
import Link from 'next/link';
import styles from './index.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Blog</h1>
      <p>Check out our latest blog posts:</p>
      <Link href="/blog">
        <h3>Go to Blog</h3>
      </Link>
    </div>
  );
}

export default Home;

