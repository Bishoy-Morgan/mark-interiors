'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';


const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    agreement: false,
    file: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'checkbox') {
      setFormState(prev => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setFormState(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    console.log('Form submitted:', formState);
    alert('Thank you for your request! We will contact you soon.');
    // Reset form
    setFormState({
      name: '',
      email: '',
      message: '',
      agreement: false,
      file: null
    });
  };

  return (
    <section id="contact" className="py-24 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-heading-md text-secondary font-light mb-4">
            We are happy to answer your questions and discuss your project
          </h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center">
                <label htmlFor="name" className="block text-caption text-secondary mb-2">
                  Your name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 text-secondary py-2 focus:outline-none focus:border-secondary text-center text-body-sm font-light"
                />
              </div>
              <div className="text-center">
                <label htmlFor="email" className="block text-caption text-secondary mb-2">
                  Your email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 text-secondary py-2 focus:outline-none focus:border-secondary text-center text-body-sm font-light"
                />
              </div>
            </div>

            <div className="text-center">
              <label htmlFor="message" className="block text-caption text-secondary mb-2">
                Your message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-transparent border-b border-gray-700 text-secondary py-2 focus:outline-none focus:border-secondary text-center text-body-sm font-light"
              ></textarea>
            </div>

            <div className="text-center">
              <label className="block text-caption text-secondary mb-2">
                Attach file (DOC, DOCX, PDF, max 5 MB)
              </label>
              <input
                type="file"
                name="file"
                onChange={handleChange}
                accept=".doc,.docx,.pdf"
                className="w-full text-secondary mx-auto text-center text-caption font-light"
              />
            </div>

            <div className="flex items-start justify-center">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formState.agreement}
                onChange={handleChange}
                required
                className="mt-1 mr-2"
              />
              <label htmlFor="agreement" className="text-caption text-secondary text-center">
                By clicking on the Send a request button, you consent to the processing of personal data
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-transparent border border-secondary text-secondary rounded-full px-8 py-3 hover:bg-secondary hover:text-primary transition-colors mx-auto text-button"
              >
                Send request
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
