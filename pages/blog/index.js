import Head from 'next/head';
import SlideNavbar from '../../components/SlideNavbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

export default function Blogs() {
  // Example list of blog posts
  const blogPosts = [
    {
      slug: 'efficiency-at-domain-group',
      title: 'Optimising Support Efficiency at Domain Group',
      date: 'February 19, 2025',
      excerpt:
        'How I transitioned from a family business to my first corporate role while improving support efficiency at Domain Group.',
    },
    {
      slug: 'why-i-created-a-personal-website',
      title: 'Why I Created a Personal Website',
      date: 'February 19, 2025',
      excerpt:
        'How building a personal website gave me control over my online presence and professional identity.',
    },
  ];

  // Navigation items used for both SlideNavbar (mobile) and desktop header
  const navItems = [
    { text: 'Home', url: '/' },
    { text: 'Timeline', url: '/timeline' },
    { text: 'Contact', url: '/#contact' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>All Blogs - Jordan Barhoumeh</title>
        <meta name="description" content="Read all blog posts by Jordan Barhoumeh." />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Mobile Slide-Out Navigation */}
      <SlideNavbar navItems={navItems} />

      {/* Desktop Header */}
      <header className={styles.header}>
        <div className={styles.logo}>Jordan Barhoumeh</div>
        <nav className={styles.navigation}>
          {navItems.map((item, index) => (
            <a key={index} href={item.url}>
              {item.text}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.blog}>
          <div className={styles.sectionHeader}>
            <h2>All Blog Posts</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.blogGrid}>
            {blogPosts.map((post) => (
              <div key={post.slug} className={styles.blogCard}>
                <div className={styles.blogImagePlaceholder}>
                  {/* Optionally add an image here */}
                </div>
                <div className={styles.blogContent}>
                  <span className={styles.blogDate}>{post.date}</span>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <a href={`/blog/${post.slug}`} className={styles.readMore}>
                    Read Article <span className={styles.arrowRight}>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} Jordan Barhoumeh. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a
              href="https://www.linkedin.com/in/jordan-barhoumeh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JordanBarhoumeh/PersonalPortfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
