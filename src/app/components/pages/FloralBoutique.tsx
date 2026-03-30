import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Flower2, Heart, Calendar, Palette } from "lucide-react";

export default function FloralBoutique() {
  const [formData, setFormData] = useState({
    occasion: "",
    color: "",
    deliveryDate: "",
    message: "",
  });

  const bouquets = [
    {
      name: "Classic Roses",
      description: "Timeless beauty in soft pink and cream tones",
      price: "$45 - $85",
      image: "https://images.unsplash.com/photo-1672243691196-9b7f64cce1c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0fGVufDF8fHx8MTc3MTE0NjUwNXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Peony Dreams",
      description: "Lush peonies in romantic blush shades",
      price: "$55 - $95",
      image: "https://images.unsplash.com/photo-1588457776180-4206b4909301?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcGVvbmllcyUyMGZsb3dlcnN8ZW58MXx8fHwxNzcxMTU3ODMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Spring Tulips",
      description: "Fresh tulips in pastel pink arrangements",
      price: "$35 - $65",
      image: "https://images.unsplash.com/photo-1648634375658-1d98c7de3ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdHVsaXBzJTIwc3ByaW5nfGVufDF8fHx8MTc3MTE1NzgzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Wildflower Meadow",
      description: "Seasonal blooms in natural, romantic style",
      price: "$40 - $75",
      image: "https://images.unsplash.com/photo-1658004162816-3ffc5fa3e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VycyUyMHBpbmslMjBtZWFkb3d8ZW58MXx8fHwxNzcxMTU3ODMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Custom order submitted:", formData);
    alert("Thank you for your custom order request! We'll contact you soon.");
    setFormData({ occasion: "", color: "", deliveryDate: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero */}
      <div className="relative h-[400px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760618511460-44d991a10c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG9yYWwlMjB0YWJsZSUyMHNldHRpbmclMjBwaW5rfGVufDF8fHx8MTc3MTE1NzcwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Floral arrangements"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8C8DC]/40 to-[#FAF9F6]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-[#4A4A4A] space-y-3">
            <h1 className="text-5xl md:text-6xl text-[#A84A6E]">Floral Boutique</h1>
            <p className="text-xl">Handpicked blooms wrapped in elegance</p>
          </div>
        </div>
      </div>

      {/* Fresh Bouquets */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Fresh Bouquets</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
            <p className="mt-4 text-[#4A4A4A]">Each arrangement is crafted with love and tied with satin ribbons</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bouquets.map((bouquet, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <ImageWithFallback
                    src={bouquet.image}
                    alt={bouquet.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl mb-1">{bouquet.name}</h3>
                    <p className="text-sm opacity-90">{bouquet.description}</p>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl text-[#D88CA3]" style={{ fontFamily: "var(--font-heading)" }}>
                      {bouquet.price}
                    </span>
                    <button className="px-4 py-2 bg-[#F8C8DC] text-[#4A4A4A] rounded-lg hover:bg-[#D88CA3] hover:text-white transition-colors">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#F8C8DC]/20 to-[#D88CA3]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Custom Floral Orders</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
            <p className="mt-4 text-[#4A4A4A]">Let us create a bespoke arrangement just for you</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                    <Heart className="w-5 h-5 text-[#F8C8DC]" />
                    Occasion
                  </label>
                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="wedding">Wedding</option>
                    <option value="bridal-shower">Bridal Shower</option>
                    <option value="thank-you">Thank You</option>
                    <option value="just-because">Just Because</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                    <Palette className="w-5 h-5 text-[#F8C8DC]" />
                    Color Preference
                  </label>
                  <select
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                  >
                    <option value="">Select colors</option>
                    <option value="blush-pink">Blush Pink</option>
                    <option value="dusty-rose">Dusty Rose</option>
                    <option value="cream-white">Cream & White</option>
                    <option value="soft-sage">Soft Sage</option>
                    <option value="mixed-pastels">Mixed Pastels</option>
                    <option value="surprise-me">Surprise Me</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                  <Calendar className="w-5 h-5 text-[#F8C8DC]" />
                  Delivery Date
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC]"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-[#4A4A4A] mb-2">
                  <Flower2 className="w-5 h-5 text-[#F8C8DC]" />
                  Special Requests
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your vision, flower preferences, or any special details..."
                  className="w-full px-4 py-3 rounded-lg border border-[#D88CA3]/30 bg-[#FFF6EC]/50 focus:outline-none focus:ring-2 focus:ring-[#F8C8DC] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-[#F8C8DC] to-[#D88CA3] text-white rounded-lg hover:from-[#D88CA3] hover:to-[#A84A6E] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Submit Custom Order Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl text-[#A84A6E]">Why Choose Our Florals?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[#F8C8DC] rounded-full flex items-center justify-center">
                <Flower2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Fresh Daily</h4>
              <p className="text-[#4A4A4A]">Hand-selected flowers delivered fresh every morning</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[#D88CA3] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Made with Love</h4>
              <p className="text-[#4A4A4A]">Each arrangement is crafted with care and attention</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 mx-auto bg-[#C6A75E] rounded-full flex items-center justify-center">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Custom Designs</h4>
              <p className="text-[#4A4A4A]">Personalized arrangements for your special moments</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
