import { useState } from "react";
import { Calendar, Users, Clock, MessageSquare, Star } from "lucide-react";

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reservation submitted:", formData);
    alert("Thank you for your reservation! We'll send you a confirmation email shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      specialRequest: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-5xl md:text-6xl">Reserve Your Table</h1>
          <p className="text-xl opacity-95">
            Secure your spot in our romantic café and let us create a memorable experience for you
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h2 className="text-3xl text-[#A84A6E] mb-8">Book Your Visit</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#4A4A4A] mb-2">Full Name *</label>
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
                  <label className="block text-[#4A4A4A] mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                      <Calendar className="w-5 h-5 text-[#F8C8DC]" />
                      Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                      <Clock className="w-5 h-5 text-[#F8C8DC]" />
                      Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                    >
                      <option value="">Select time</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="08:30">8:30 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="09:30">9:30 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="10:30">10:30 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="11:30">11:30 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="14:30">2:30 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="15:30">3:30 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="16:30">4:30 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="17:30">5:30 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                    <Users className="w-5 h-5 text-[#F8C8DC]" />
                    Number of Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  >
                    <option value="">Select guests</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6">6 Guests</option>
                    <option value="7+">7+ Guests</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                    <MessageSquare className="w-5 h-5 text-[#F8C8DC]" />
                    Special Requests
                  </label>
                  <textarea
                    name="specialRequest"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Let us know if you have any special requests, dietary restrictions, or if you're celebrating a special occasion..."
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#F8C8DC] to-[#D88CA3] text-white rounded-lg hover:from-[#D88CA3] hover:to-[#A84A6E] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              {/* Private Events */}
              <div className="bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 fill-white" />
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-heading)" }}>
                    Private Events
                  </h3>
                </div>
                <p className="mb-4 opacity-95">
                  Make your special occasion unforgettable at Coquettes Café. We offer private event
                  bookings for birthdays, bridal showers, baby showers, and more.
                </p>
                <ul className="space-y-2 mb-6 opacity-95">
                  <li>• Customized menu options</li>
                  <li>• Exclusive floral arrangements</li>
                  <li>• Personalized decorations</li>
                  <li>• Dedicated event coordinator</li>
                </ul>
                <a
                  href="/contact"
                  className="inline-block px-6 py-3 bg-white text-[#A84A6E] rounded-lg hover:bg-[#FFF6EC] transition-colors"
                >
                  Inquire About Events
                </a>
              </div>

              {/* Hours & Location */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl text-[#A84A6E] mb-6">Hours & Location</h3>
                <div className="space-y-4 text-[#4A4A4A]">
                  <div>
                    <h4 className="text-[#A84A6E] mb-2">Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 7:00 PM</p>
                  </div>
                  <div>
                    <h4 className="text-[#A84A6E] mb-2">Location</h4>
                    <p>123 Rose Boulevard</p>
                    <p>Cuff Parade, Colaba</p>
                  </div>
                  <div>
                    <h4 className="text-[#A84A6E] mb-2">Contact</h4>
                    <p>Phone: (91) 1234567890</p>
                    <p>Email: hello@coquettes.cafe</p>
                  </div>
                </div>
              </div>

              {/* Policies */}
              <div className="bg-[#FFF6EC] rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl text-[#A84A6E] mb-4">Reservation Policy</h3>
                <ul className="space-y-3 text-[#4A4A4A]">
                  <li>• Reservations are held for 15 minutes past the scheduled time</li>
                  <li>• Please notify us 24 hours in advance for cancellations</li>
                  <li>• Groups of 7+ guests require a deposit</li>
                  <li>• We welcome walk-ins based on availability</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
