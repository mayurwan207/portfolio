import React, { useState } from 'react';
import { Mail, MapPin, Code, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'software-engineer-role',
    message: '',
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, topic, message } = formData;

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name} [${topic}]`);
    const body = encodeURIComponent(
      `Hi Mayuresh,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\nMessage:\n${message}\n\nSent from your portfolio website.`
    );

    window.location.href = `mailto:mayureshwankhade968@gmail.com?subject=${subject}&body=${body}`;

    setFeedback(`Thank you, ${name}! Your email client is opening with pre-filled details to send directly to mayureshwankhade968@gmail.com.`);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <div className="contact-card glass-panel">
          <div className="contact-header">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="section-title">Let's Discuss Systems, Data &amp; Opportunities</h2>
            <p className="section-subtitle">
              Whether you are looking to hire a backend developer, collaborate on hackathons, or talk database architecture—my inbox is always open.
            </p>
          </div>

          <div className="contact-layout-split">
            {/* Contact Info Column */}
            <div className="contact-details-col">
              <div className="info-block">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Direct Email</span>
                  <a href="mailto:mayureshwankhade968@gmail.com" className="info-val info-link">
                    mayureshwankhade968@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">Pune, Maharashtra, India</span>
                </div>
              </div>

              <div className="info-block">
                <div className="info-icon">
                  <Code size={20} />
                </div>
                <div>
                  <span className="info-label">LeetCode Profile</span>
                  <a
                    href="https://leetcode.com/u/Mayu_coder/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="info-val info-link"
                  >
                    leetcode.com/u/Mayu_coder
                  </a>
                </div>
              </div>

              <div className="social-channels-box">
                <span className="channels-title">Developer &amp; Professional Profiles:</span>
                <div className="channels-grid">
                  <a
                    href="https://github.com/mayurwan207"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                  >
                    <Github size={20} />
                    <span>github.com/mayurwan207</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/mayuresh-wankhade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="channel-card"
                  >
                    <Linkedin size={20} />
                    <span>linkedin.com/in/mayuresh-wankhade</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="contact-form-col">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="userName">Your Name</label>
                    <input
                      type="text"
                      id="userName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="userEmail">Email Address</label>
                    <input
                      type="email"
                      id="userEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="projectType">Discussion Topic</label>
                  <select
                    id="projectType"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                  >
                    <option value="software-engineer-role">Backend / Software Engineering Role</option>
                    <option value="hackathon-collab">Hackathon Collaboration / Project Partnership</option>
                    <option value="database-api">Database Architecture &amp; REST API Design</option>
                    <option value="ml-geospatial">Machine Learning &amp; Geospatial Pipelines</option>
                    <option value="other">General Inquiries / Mentorship</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="userMessage">Message Details</label>
                  <textarea
                    id="userMessage"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the role, project, or topic you'd like to collaborate on..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary submit-btn">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>

                {feedback && (
                  <div className="form-feedback-msg">
                    <CheckCircle size={18} className="fb-icon" />
                    <span>{feedback}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
