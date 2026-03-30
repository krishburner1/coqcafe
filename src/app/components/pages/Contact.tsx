import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl">Get In Touch</h1>
          <p className="text-xl opacity-95">
            We'd love to hear from you! Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl text-[#A84A6E] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#4A4A4A] mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4A4A] mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  />
                </div>

                <div>
                  <label className="block text-[#4A4A4A] mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="reservation">Reservation Question</option>
                    <option value="private-event">Private Event</option>
                    <option value="floral-order">Floral Order</option>
                    <option value="catering">Catering</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#4A4A4A] mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#F8C8DC] to-[#D88CA3] text-white rounded-lg hover:from-[#D88CA3] hover:to-[#A84A6E] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl text-[#A84A6E] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#F8C8DC] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#A84A6E] mb-1">Address</h4>
                      <p className="text-[#4A4A4A]">123 Rose Boulevard</p>
                      <p className="text-[#4A4A4A]">Paris District, PC 12345</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#D88CA3] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#A84A6E] mb-1">Phone</h4>
                      <p className="text-[#4A4A4A]">(555) 123-4567</p>
                      <p className="text-sm text-[#4A4A4A]/70">Monday - Sunday, 8am - 6pm</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C6A75E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#A84A6E] mb-1">Email</h4>
                      <p className="text-[#4A4A4A]">hello@coquettes.cafe</p>
                      <p className="text-sm text-[#4A4A4A]/70">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#B8C9B1] rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-[#A84A6E] mb-1">Hours</h4>
                      <p className="text-[#4A4A4A]">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-[#4A4A4A]">Sat - Sun: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  Follow Us
                </h3>
                <p className="mb-6 opacity-95">
                  Stay connected for daily inspiration, menu updates, and behind-the-scenes moments!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/coquettes.cafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#A84A6E] rounded-lg hover:bg-[#FFF6EC] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com/coquettescafe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#A84A6E] rounded-lg hover:bg-[#FFF6EC] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                </div>
                <p className="mt-4 text-center opacity-90">@coquettes.cafe</p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-[#FFF6EC] to-[#F8C8DC]/30 flex items-center justify-center">
                  <div className="text-center text-[#4A4A4A] p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-[#D88CA3]" />
                    <p className="text-lg">Map Integration</p>
                    <p className="text-sm opacity-70 mt-2">
                      123 Rose Boulevard, Paris District, PC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
          </div>
          <div className="space-y-6">
            <div className="bg-[#FFF6EC] rounded-lg p-6">
              <h3 className="text-xl text-[#A84A6E] mb-2">Do you offer gluten-free or vegan options?</h3>
              <p className="text-[#4A4A4A]">
                Yes! We have a selection of gluten-free pastries and vegan beverages. Please let us know
                about any dietary restrictions when ordering.
              </p>
            </div>
            <div className="bg-[#FFF6EC] rounded-lg p-6">
              <h3 className="text-xl text-[#A84A6E] mb-2">Can I order flowers for delivery?</h3>
              <p className="text-[#4A4A4A]">
                Absolutely! We offer same-day delivery within the Paris District. Please call us or use
                our custom floral order form to arrange delivery.
              </p>
            </div>
            <div className="bg-[#FFF6EC] rounded-lg p-6">
              <h3 className="text-xl text-[#A84A6E] mb-2">Do you host private events?</h3>
              <p className="text-[#4A4A4A]">
                Yes! We specialize in hosting intimate private events including bridal showers, birthdays,
                and tea parties. Contact us for availability and custom packages.
              </p>
            </div>
            <div className="bg-[#FFF6EC] rounded-lg p-6">
              <h3 className="text-xl text-[#A84A6E] mb-2">Is WiFi available?</h3>
              <p className="text-[#4A4A4A]">
                Yes, we offer complimentary WiFi to all our guests. The password is available at the counter.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
