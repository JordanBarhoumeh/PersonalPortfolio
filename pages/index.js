import Head from 'next/head';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import SlideNavbar from '../components/SlideNavbar';
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

  // Navigation items used for both desktop and mobile
  const navItems = [
    { text: 'About', url: '#about' },
    { text: 'Projects', url: '#projects' },
    { text: 'Blog', url: '#blog' },
    { text: 'Contact', url: '#contact' },
  ];

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

        {/* Mobile Slide-Out Navigation (visible only on mobile via CSS media queries in SlideNavbar) */}
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

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} id="home">
          <div className={styles.heroContent}>
            <span className={styles.greeting}>Hello, I'm</span>
            <h1 className={styles.heroTitle}>Jordan Barhoumeh</h1>
            <h2 className={styles.heroSubtitle}>
              Data Science Student &amp; Analytics Enthusiast
            </h2>
            <p className={styles.heroBio}>
              I leverage data-driven insights to solve complex problems and build innovative solutions.
              My expertise spans analytics, software development, and data visualization with a focus on Firebase and Flutter related tools.
            </p>
            <div className={styles.actionButtons}>
              <a href="#contact" className={styles.primaryButton}>
                Get In Touch
              </a>
              <a href="/resume.pdf" download className={styles.secondaryButton}>
                <FaDownload className={styles.buttonIcon} /> Download Resume
              </a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/jordan-barhoumeh/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/JordanBarhoumeh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </section>

        {/* About Me Section */}
        <section className={styles.about} id="about">
          <div className={styles.sectionGapHeader}>
            <h2>About Me</h2>
            <div className={styles.underline}></div>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                I've always been driven by the potential of data to transform decision-making processes.
                With experience in data science, I've developed a holistic approach to problem-solving that combines technical expertise with strategic thinking.
              </p>
              <p>
                My journey in tech has allowed me to work on diverse projects, from developing analytics dashboards to creating mobile applications that deliver real value to users.
                I'm particularly passionate about the intersection of data and user experience.
              </p>
            </div>
            <div className={styles.skills}>
              <h3>Technical Expertise</h3>
              <div className={styles.skillTags}>
                <span>Python</span>
                <span>R</span>
                <span>SQL</span>
                <span>Firebase</span>
                <span>JavaScript</span>
                <span>Flutterflow Development</span>
                <span>Financial Analytics</span>
                <span>Tableau</span>
                <span>AI/ML</span>
              </div>
            </div>
          </div>
          <div className={styles.sectionFooter}>
            <a
              href="/timeline"
              className={styles.moreProjects}
            >
              My Timeline <span className={styles.arrowRight}>→</span>
            </a>
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
                <p>
                  A clean, responsive portfolio website built with Next.js and modern web technologies.
                </p>
                <div className={styles.projectTags}>
                  <span>Next.js</span>
                  <span>TailwindCSS</span>
                  <span>Firebase</span>
                </div>
                <div className={styles.projectLinks}>
                  <a href="#" className={styles.projectLink}>View</a>
                  <a
                    href="https://github.com/JordanBarhoumeh/PersonalPortfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImagePlaceholder}></div>
              <div className={styles.projectContent}>
                <h3>Church Connect Application</h3>
                <p>
                  A Flutter-based mobile app for connecting church communities by facilitating interactive engagement in real time.
                </p>
                <div className={styles.projectTags}>
                  <span>Flutterflow</span>
                  <span>Firebase</span>
                  <span>Google API</span>
                </div>
                <div className={styles.projectLinks}>
                  <a className={styles.projectLink}>Coming Soon</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sectionFooter}>
            <a
              href="https://github.com/JordanBarhoumeh"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.moreProjects}
            >
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
                <h3>Optimising Support Efficiency at Domain Group</h3>
                <p>
                  How I transitioned from a family business to my first corporate role while improving support efficiency at Domain Group.
                </p>
                <a href="/blog/efficiency-at-domain-group" className={styles.readMore}>
                  Read Article <span className={styles.arrowRight}>→</span>
                </a>
              </div>
            </div>
            <div className={styles.blogCard}>
              <div className={styles.blogImagePlaceholder}></div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>February 19, 2025</span>
                <h3>Why I Created a Personal Website</h3>
                <p>
                  How building a personal website gave me control over my online presence and professional identity.
                </p>
                <a href="/blog/why-i-created-a-personal-website" className={styles.readMore}>
                  Read Article <span className={styles.arrowRight}>→</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.sectionFooter}>
            <a href="/blog" className={styles.moreProjects}>
              View More Articles <span className={styles.arrowRight}>→</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.sectionGapHeader}>
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
                  Based in: <strong>Sydney, Australia</strong>
                </p>
                <p>
                  Email: <strong>jordanbarhoumeh@gmail.com</strong>
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
