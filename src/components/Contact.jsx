import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import {
  Mail,
  Send,
  AlertCircle,
  CheckCircle,
  Phone,
  MapPin
} from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

const SERVICE_ID = 'service_guk58ej';
const CONTACT_TEMPLATE_ID = 'template_6y10q87';
const AUTO_REPLY_TEMPLATE_ID = 'template_rqdsg8j';
const PUBLIC_KEY = 'gonEyuwgMqhP0rWU7';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    emailjs.init({ publicKey: PUBLIC_KEY });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const contactParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.phone || 'Not provided',
      message: formData.message
    };

    const autoReplyParams = {
      name: formData.name,
      email: formData.email
    };

    try {
      await emailjs.send(SERVICE_ID, CONTACT_TEMPLATE_ID, contactParams);
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#061E29', '#1D546D', '#5F9598', '#F3F4F4']
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p className="text-muted">
          Let’s discuss AI systems, research collaborations, backend engineering, or creative product ideas.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info glass-panel contact-info-panel">
          <div className="contact-hero">
            <span className="contact-badge">Open for opportunities</span>
            <h3>Wanna Connect with me ?</h3>
            <p className="contact-intro">
              Have an interesting Deal, problem in semantic search, LLMs, RAG, or high-performance APIs?
              Drop a message or connect through the links below.
            </p>
          </div>

          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon">
                <Mail size={20} />
              </div>
              <div className="contact-method-detail">
                <h4>Direct Email</h4>
                <a href="mailto:gprabhat65@gmail.com">gprabhat65@gmail.com</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <Phone size={20} />
              </div>
              <div className="contact-method-detail">
                <h4>Phone Number</h4>
                <a href="tel:+9779807255274">+977 9807255274</a>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-method-detail">
                <h4>Current Address</h4>
                <p>Fulbari Marg, Lalitpur, Nepal</p>
              </div>
            </div>

            <div className="contact-method">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div className="contact-method-detail">
                <h4>Home Address</h4>
                <p>RM Prasauni-2, Bara, Madhesh Pradesh, Nepal 44400</p>
              </div>
            </div>
          </div>

          <div className="social-links contact-social-links">
            <a
              href="https://www.linkedin.com/in/gprabhat65/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://github.com/gprabhat65"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="mailto:gprabhat65@gmail.com"
              className="social-btn"
              title="Email"
            >
              <Mail size={18} />
            </a>

            <a
              href="https://www.facebook.com/pra.bhat.suresh.kalwar/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="Facebook"
            >
              FB
            </a>

            <a
              href="https://www.instagram.com/yourusername/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="Instagram"
            >
              IG
            </a>

            <a
              href="https://leetcode.com/u/gprabhat65/"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="LeetCode"
            >
              LC
            </a>

            <a
              href="https://www.hackerrank.com/profile/gprabhat65"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
              title="HackerRank"
            >
              HR
            </a>
          </div>
        </div>

        <div className="glass-panel contact-form-panel">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                placeholder="Hari Bahadur"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                placeholder="XYZ@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="form-input"
                placeholder="+977 XXXXXXXXXX"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                className="form-input"
                placeholder="Tell me how I can help you..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {status === 'error' && (
              <div className="form-status error">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {status === 'success' && (
              <div className="form-status success">
                <CheckCircle size={16} />
                <span>Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? (
                'Sending...'
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;