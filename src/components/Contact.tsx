
import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_80ejeq9',
      'template_bdhyeao',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'e3lkKx0WyrYMtH0TV'
    ).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (err) => {
        console.error('FAILED...', err);
        alert('Oops! Something went wrong. Please try again.');
      }
    );
  };


  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Phone</h4>
                      <p className="text-gray-600">+91 99787 76575</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <p className="text-gray-600">work.bhargavi@yahoo.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Location</h4>
                      <p className="text-gray-600">Surendranagar, Gujarat, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Me a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="button-primary flex items-center gap-2">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
