import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <span className="footer-brand-title">Mayuresh Nilesh Wankhade</span>
          <p className="footer-brand-sub">
            Computer Engineering • PCCOE Pune • Python &amp; Django Developer
          </p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/mayurwan207"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/mayuresh-wankhade"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://leetcode.com/u/Mayu_coder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
          </a>
          <a href="#home" onClick={scrollToTop} className="back-to-top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
