// components/SlideNavbar.js
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const SlideNavbar = ({ navItems = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent page scrolling when open
  };

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  // Close sidebar when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeSidebar();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <>
      {/* Toggle Button: Only render if sidebar is closed */}
      {!isOpen && (
        <button 
          className="navbar-toggle" 
          onClick={openSidebar}
          aria-expanded={isOpen}
          aria-controls="sidebar"
        >
          <FaBars />
        </button>
      )}

      {/* Overlay */}
      <div 
        className={`overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'active' : ''}`} id="sidebar">
        <div className="sidebar-header">
          <h3>Navigation Menu</h3>
          <button className="close-btn" onClick={closeSidebar} aria-label="Close navigation">
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-nav">
          {navItems.length > 0 ? (
            navItems.map((item, index) => (
              <li key={index}>
                <a href={item.url || '#'} onClick={closeSidebar}>
                  {item.text}
                </a>
              </li>
            ))
          ) : (
            <>
              <li><a href="/" onClick={closeSidebar}>Home</a></li>
              <li><a href="/about" onClick={closeSidebar}>About</a></li>
              <li><a href="/services" onClick={closeSidebar}>Services</a></li>
              <li><a href="/contact" onClick={closeSidebar}>Contact</a></li>
            </>
          )}
        </ul>
      </div>

      <style jsx>{`
        .navbar-toggle {
          position: fixed;
          top: 20px;
          right: 20px;
          background: transparent;  /* No background */
          color: #333;             /* Icon color */
          border: none;
          padding: 10px;
          cursor: pointer;
          z-index: 2000;
          font-size: 1.8rem;       /* Increase icon size if desired */
        }

        .sidebar {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100%;
          background: #2c3e50;
          transition: all 0.3s ease-in-out;
          z-index: 1999;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
          overflow-y: auto;
        }

        .sidebar.active {
          right: 0;
        }

        .sidebar-header {
          padding: 20px;
          color: white;
          border-bottom: 1px solid #34495e;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .sidebar-nav {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .sidebar-nav li {
          padding: 0;
        }

        .sidebar-nav a {
          display: block;
          padding: 15px 20px;
          color: #ecf0f1;
          text-decoration: none;
          transition: background 0.3s;
          border-bottom: 1px solid #34495e;
        }

        .sidebar-nav a:hover {
          background: #34495e;
        }

        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s;
          z-index: 1500;
        }

        .overlay.active {
          opacity: 1;
          visibility: visible;
        }

        /* Hide mobile navigation on desktop screens */
        @media (min-width: 769px) {
          .navbar-toggle,
          .sidebar,
          .overlay {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default SlideNavbar;
