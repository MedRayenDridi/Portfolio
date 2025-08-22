// components/Contact.js
import React, { useRef, useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
            .then((result) => {
                setSubmitStatus('success');
                form.current.reset();
            })
            .catch((error) => {
                setSubmitStatus('error');
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setSubmitStatus(null), 5000);
            });
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">Get in touch</p>

                <div className="contact-container">
                    <div className="contact-info">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaMapMarkerAlt />
                            </div>
                            <div className="contact-details">
                                <h4>Location</h4>
                                <p>Tunis, Tunisia</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>rayendridi.943@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaPhone />
                            </div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <p>+216 29 663 915</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaLinkedin />
                            </div>
                            <div className="contact-details">
                                <h4>LinkedIn</h4>
                                <p>linkedin.com/in/rayen-dridi</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <FaGithub />
                            </div>
                            <div className="contact-details">
                                <h4>GitHub</h4>
                                <p>github.com/MedRayenDrid</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="form-input"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="form-input form-textarea"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>

                            {submitStatus === 'success' && (
                                <p style={{ color: 'var(--success)', marginTop: '15px' }}>
                                    Message sent successfully!
                                </p>
                            )}

                            {submitStatus === 'error' && (
                                <p style={{ color: 'var(--danger)', marginTop: '15px' }}>
                                    Failed to send message. Please try again.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;