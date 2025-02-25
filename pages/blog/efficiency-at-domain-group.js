import Head from 'next/head';
import SlideNavbar from '../../components/SlideNavbar';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import styles from '../../styles/Home.module.css';

export default function WhyICreatedAPersonalWebsite() {
  // Define navigation items to be used by both the mobile SlideNavbar and the desktop header.
  const navItems = [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/#about' },
    { text: 'Projects', url: '/#projects' },
    { text: 'Blog', url: '/blog' },
    { text: 'Contact', url: '/#contact' },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Why I Created a Personal Website</title>
        <meta
          name="description"
          content="A behind-the-scenes look at why I built my own personal website and how it has shaped my professional journey."
        />
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

      {/* Main Content: Blog Article */}
      <main className={styles.main}>
        <article className={styles.blogArticle}>
          <div className={styles.sectionHeader}>
            <h1>Why I Created a Personal Website</h1>
            <span className={styles.blogDate}>February 19, 2025</span>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.articleContent}>
            <p>
              In today’s digital age, having an online presence is more important than ever. Whether for professional
              networking, personal branding, or simply as a creative outlet, a personal website serves as a home base
              in an increasingly online world.
            </p>
            <p>
              For me, creating a personal website was a deliberate choice—one that came from a mix of professional 
              aspirations, personal growth, and a desire to have more control over my digital presence. In this post, 
              I’ll share my reasons for building my own website, the challenges I faced, and the many benefits I’ve 
              experienced along the way.
            </p>

            <br />

            <h2>The Digital Age and Personal Branding</h2>
            <p>
              We live in a time where people Google you before they meet you. Whether you're a freelancer, an 
              entrepreneur, or someone who wants to have a presence beyond social media, a personal website allows 
              you to control the narrative.
            </p>
            <p>
              A well-crafted website isn’t just an online resume—it’s a statement. It tells visitors who you are, 
              what you do, and why they should care. Unlike social media, where you're constrained by algorithms 
              and platform rules, a personal website gives you complete control over how you present yourself.
            </p>

            <br />

            <h2>My Motivation for Creating a Personal Website</h2>
            <p>So, why did I take the plunge and build my own site?</p>
            <ul>
              <li>
                <strong>Full Control over My Digital Identity:</strong> Instead of relying solely on platforms 
                like LinkedIn or Twitter, I wanted a space that truly represented me.
              </li>
              <li>
                <strong>A Central Hub for My Work:</strong> From past projects and professional experiences to 
                creative endeavors, my website keeps everything in one place.
              </li>
              <li>
                <strong>A Long-Term Investment:</strong> Unlike social media that can change its rules at any 
                time, my website is something I own and control.
              </li>
              <li>
                <strong>Better Connectivity:</strong> A personal website makes it easier for like-minded 
                individuals to discover my work and reach out.
              </li>
            </ul>

            <br />

            <h2>Showcasing My Work and Achievements</h2>
            <p>
              One of the main reasons for building my website was to display my work in a way that best represents 
              me. It acts as a professional portfolio—far more dynamic than a static resume—where I can share the 
              thought processes and insights behind my projects.
            </p>

            <h2>Expressing My Thoughts and Ideas</h2>
            <p>
              Beyond showcasing achievements, I wanted a space to share my perspectives, insights, and experiences 
              without being confined by the limitations of social media. My blog serves as an outlet for self-expression 
              and thought leadership.
            </p>

            <br />

            <h2>Networking and Career Opportunities</h2>
            <p>
              My website isn’t just a personal statement—it’s also a tool for career growth. Since its launch, 
              it has opened doors to job inquiries, collaboration offers, and meaningful professional connections 
              by presenting a comprehensive and authentic picture of who I am.
            </p>

            <br />

            <h2>Learning and Experimenting with Web Technologies</h2>
            <p>
              An unexpected benefit of building my website was the steep learning curve. I gained valuable skills 
              in web design, user experience, SEO, and content strategy—lessons that extend far beyond just the 
              website itself.
            </p>

            <br />

            <h2>Ownership and Independence vs. Social Media Platforms</h2>
            <p>
              Social media is great, but it comes with limitations: algorithms, platform restrictions, and the 
              risk of sudden policy changes. With my website, I have the freedom to present my content exactly 
              as I choose, ensuring my digital presence remains authentic and under my control.
            </p>

            <br />

            <h2>Enhancing My Online Reputation</h2>
            <p>
              A personal website allows me to shape my narrative. When people search for me online, they find 
              content that accurately reflects my professional identity, skills, and passions—something that is 
              often diluted on social media platforms.
            </p>

            <br />

            <h2>A Space for Future Projects and Ventures</h2>
            <p>
              I see my website as a long-term asset. It currently serves as a portfolio and blog, but it’s also 
              a foundation for future projects—be it launching an online course, starting a newsletter, or offering 
              consulting services.
            </p>

            <br />

            <h2>The Challenges I Faced</h2>
            <p>
              Building a personal website wasn’t without its challenges. I encountered technical difficulties 
              setting up hosting and choosing the right platform, struggled with the discipline of creating 
              consistent content, and had to overcome imposter syndrome to share my thoughts publicly.
            </p>

            <br />

            <h2>The Rewards and Positive Outcomes</h2>
            <p>
              Despite the challenges, the rewards have been immense. My website has increased my visibility, 
              led to unexpected career opportunities, and boosted my confidence in my personal brand.
            </p>

            <br />

            <h2>In Conclusion</h2>
            <p>
              My advice is simple: take the leap and build your own website. It doesn’t have to be perfect—just take the 
              first step and claim your space on the internet.
            </p>
            <p>
              Building my personal website has been an incredibly rewarding experience. It’s given me a platform to 
              showcase my work, share my ideas, and take control of my digital presence. If you’ve ever thought about 
              creating your own website, I encourage you to do it. Your website is your digital home—make it a place that 
              truly represents you.
            </p>
          </div>
        </article>
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
