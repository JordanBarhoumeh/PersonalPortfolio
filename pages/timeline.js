import Head from 'next/head';
import SlideNavbar from '../components/SlideNavbar'; // Adjust path if needed
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function Timeline() {
  // Navigation items used by both mobile SlideNavbar and desktop header
  const navItems = [
    { text: 'Home', url: '/' },
    { text: 'Blog', url: '/blog' },
    { text: 'Contact', url: '/#contact' },
  ];

  // timeline data
  const timelineEvents = [
    {
      year: '2020',
      heading: 'Finishing High School',
      text: 'Graduated high school without a clear direction, exploring different career possibilities.'
    },
    {
      year: '2021',
      heading: 'Starting University & Work',
      text: 'Granted early entry to Macquarie University for a Bachelor of Arts. Spent the year exploring computer science, engineering, and accounting courses to determine my path. Started working in the family retail business, gaining leadership and customer service experience.'
    },
    {
      year: '2022',
      heading: 'Committing to Data Science',
      text: 'Transferred within Macquarie University to a Bachelor of Information Technology, majoring in Data Science. Began focusing on programming, analytics, and technical problem-solving.'
    },
    {
      year: '2023',
      heading: 'Continuing IT & Data Science Studies',
      text: 'Further developed expertise in data science, machine learning, and software development. Continued balancing university with responsibilities in the family business.'
    },
    {
      year: '2024',
      heading: 'Entering the Corporate World',
      text: 'Began a contracted role at Domain Group, focusing on support efficiency and process optimization. Gained experience in a corporate environment, improving response times and issue resolution efficiency. Completed the contract by the end of 2024.'
    },
    {
      year: '2025',
      heading: 'Return to Full-Time Study',
      text: 'Returned to full-time study to complete my Information Technology degree.'
    },
  ];
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Career Timeline - Jordan Barhoumeh</title>
        <meta
          name="description"
          content="A visual timeline of my career milestones and professional journey."
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

      <main className={styles.main}>
        <section className={`${styles.timelineSection} timelineSpacing`}>
          <div className={styles.sectionHeader}>
            <h2>Career Timeline</h2>
            <div className={styles.underline}></div>
          </div>

          {/* Timeline Container */}
          <div className="timelineContainer">
            {timelineEvents.map((event, i) => (
              <div className="timelineItem" key={i}>
                <div className="timelineYear">
                  <h3>{event.year}</h3>
                </div>
                <div className="timelineLine"></div>
                <div className="timelineContent">
                  <h3 className="timelineHeading">{event.heading}</h3>
                  <p className="timelineText">{event.text}</p>
                </div>
              </div>
            ))}
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
              href="https://github.com/JordanBarhoumeh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>

      {/* Inline Styling for the Timeline */}
      <style jsx>{`
  /* Add extra top margin so the timeline heading is not clipped by the fixed header */
  .timelineSpacing {
    margin-top: 6rem; /* Adjust as needed */
  }

  .timelineContainer {
    position: relative;
    max-width: 800px;
    margin: 2rem auto;
  }

  .timelineItem {
    display: flex;
    align-items: flex-start; /* Align year and heading at the top */
    position: relative;
    margin-bottom: 3rem;
  }

  /* Vertical line on the left side */
  .timelineItem::before {
    content: '';
    position: absolute;
    left: 40px; /* Adjust if needed */
    top: 0;
    bottom: 0;
    width: 2px;
    background: #cbd5e0;
  }

  /* Blue dot */
  .timelineLine {
    position: absolute;
    left: 36px;
    top: 34px; /* Dot near the top; adjust if you want it centered, etc. */
    width: 10px;
    height: 10px;
    background: #3182ce;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 0 2px #3182ce;
  }

  /* Timeline Year Container */
  .timelineYear {
    width: 90px;
    text-align: right;
    margin-right: 2.5rem;
    transform: translateX(20px); /* Shift the entire container to the right */
  }

  .timelineYear h3 {
    margin: 0; /* Removes default top & bottom margin */
    margin-top: 28px; /* Customize this value to adjust top spacing */
    font-size: 1.2rem;
    color: #2d3748;
  }

  /* Right side content */
  .timelineContent {
    background: #fff;
    padding: 1.5rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
    margin-left: 2rem;
    flex: 1;
  }

  /* Ensure the heading is flush at the top of .timelineContent */
  .timelineHeading {
    margin-top: 0;
    font-size: 1.2rem;
    color: #2d3748;
  }

  .timelineText {
    font-size: 1rem;
    line-height: 1.8;
    color: #4a5568;
  }

  @media (max-width: 768px) {
    .timelineContainer {
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .timelineItem::before {
      left: 30px;
    }

    .timelineLine {
      left: 22px;
    }

    .timelineYear {
      width: 70px;
      margin-right: 1rem;
      transform: translateX(15px);
    }
  }
`}</style>

    </div>
  );
}
