import Head from 'next/head';
import { FaLinkedin, FaGithub, FaTwitter, FaDownload } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Handle contact form submission and save data to Firestore
  async function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      await addDoc(collection(db, 'contacts'), data);
      alert('Message sent successfully!');
      event.target.reset();
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Error sending message. Please try again later.');
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Professional Portfolio</title>
        <meta
          name="description"
          content="Professional portfolio showcasing my work, projects, and passion for tech."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>[YN]</div>
        <nav className={styles.navigation}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <div className={styles.heroContent}>
            <span className={styles.greeting}>Hello, I'm</span>
            <h1 className={styles.heroTitle}>[Your Name]</h1>
            <h2 className={styles.heroSubtitle}>Data Science & Analytics Specialist</h2>
            <p className={styles.heroBio}>
              I leverage data-driven insights to solve complex problems and build innovative solutions.
              My expertise spans analytics, software development, and data visualization with a focus on Firebase and Flutter.
            </p>
            <div className={styles.actionButtons}>
              <a href="#contact" className={styles.primaryButton}>Get In Touch</a>
              <a href="/resume.pdf" download className={styles.secondaryButton}>
                <FaDownload className={styles.buttonIcon} /> Download Resume
              </a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section className={styles.about} id="about">
          <div className={styles.sectionHeader}>
            <h2>About Me</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I've always been driven by the potential of data to transform decision-making processes. 
                With extensive experience in data science, I've developed a holistic approach to problem-solving
                that combines technical expertise with strategic thinking.
              </p>
              <p>
                My journey in tech has allowed me to work on diverse projects, from developing analytics dashboards
                to creating mobile applications that deliver real value to users. I'm particularly passionate about
                the intersection of data science and user experience.
              </p>
            </div>
            <div className={styles.skills}>
              <h3>Technical Expertise</h3>
              <div className={styles.skillTags}>
                <span>Firebase</span>
                <span>Flutter</span>
                <span>Tableau</span>
                <span>Python</span>
                <span>AI/ML</span>
                <span>Financial Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects / Portfolio Section */}
        <section className={styles.projects} id="projects">
          <div className={styles.sectionHeader}>
            <h2>Featured Projects</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}></div>
              <div className={styles.projectContent}>
                <h3>Professional Portfolio Website</h3>
                <p>A clean, responsive portfolio website built with Next.js and modern web technologies.</p>
                <div className={styles.projectTags}>
                  <span>Next.js</span>
                  <span>TailwindCSS</span>
                  <span>Firebase</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>View Demo</a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub</a>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}></div>
              <div className={styles.projectContent}>
                <h3>Stock Watchlist Application</h3>
                <p>A Flutter-based mobile app for tracking stock prices and financial metrics in real-time.</p>
                <div className={styles.projectTags}>
                  <span>Flutter</span>
                  <span>Firebase</span>
                  <span>Yahoo Finance API</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>Coming Soon</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionFooter}>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.moreProjects}>
              View More Projects on GitHub <span className={styles.arrowRight}>→</span>
            </a>
          </div>
        </section>

        {/* Blog Section */}
        <section className={styles.blog} id="blog">
          <div className={styles.sectionHeader}>
            <h2>Latest Insights</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.blogGrid}>
            <div className={styles.blogCard}>
              <div className={styles.blogImagePlaceholder}></div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>February 10, 2025</span>
                <h3>Building a Modern Portfolio Website with Next.js</h3>
                <p>A comprehensive guide to creating a professional online presence using React and Next.js.</p>
                <a href="#" className={styles.readMore}>
                  Read Article <span className={styles.arrowRight}>→</span>
                </a>
              </div>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogImagePlaceholder}></div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>January 25, 2025</span>
                <h3>Data Visualization Techniques for Financial Analysis</h3>
                <p>Exploring effective visualization methods to communicate complex financial data.</p>
                <a href="#" className={styles.readMore}>
                  Read Article <span className={styles.arrowRight}>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.sectionHeader}>
            <h2>Get In Touch</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.contactContent}>
            <div className={styles.contactText}>
              <p>
                I'm always open to discussing new opportunities, creative collaborations, or data science projects.
              </p>
              <p>
                Feel free to reach out through the form or connect with me on social media.
              </p>
              <div className={styles.contactInfo}>
                <p>
                  Based in: <strong>San Francisco, CA</strong>
                </p>
                <p>
                  Email: <strong>your.email@example.com</strong>
                </p>
              </div>
            </div>
            <form className={styles.contactForm} onSubmit={handleContactSubmit}>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Your Name" name="name" required />
              </div>
              <div className={styles.formGroup}>
                <input type="email" placeholder="Your Email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <input type="text" placeholder="Subject" name="subject" />
              </div>
              <div className={styles.formGroup}>
                <textarea placeholder="Your Message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; {new Date().getFullYear()} [Your Name]. All rights reserved.</p>
          <div className={styles.footerSocial}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
