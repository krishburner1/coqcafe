import { Link } from "react-router";
import { Coffee, Flower2, Cake, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Home() {
  const featuredCategories = [
    {
      title: "Signature Drinks",
      description: "Handcrafted beverages with a romantic twist",
      icon: Coffee,
      image: "https://images.unsplash.com/photo-1770947257992-04c3cde0328c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbGF0dGUlMjBhcnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzcxMTU3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/menu",
    },
    {
      title: "Fresh Floral Bouquets",
      description: "Curated arrangements for every occasion",
      icon: Flower2,
      image: "https://images.unsplash.com/photo-1765422820635-e7bba85b0ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwcmliYm9ufGVufDF8fHx8MTc3MTE1NzcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/florals",
    },
    {
      title: "Artisan Desserts",
      description: "French-inspired pastries and sweets",
      icon: Cake,
      image: "https://images.unsplash.com/photo-1679033876203-6aefd396c5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzcxMTU3NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/menu",
    },
  ];

  const instagramImages = [
    "https://images.unsplash.com/photo-1770947257992-04c3cde0328c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbGF0dGUlMjBhcnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzcxMTU3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1712723246766-3eaea22e52ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY3JvaXNzYW50JTIwcGFzdHJ5fGVufDF8fHx8MTc3MTE1NzcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1765422820635-e7bba85b0ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwcmliYm9ufGVufDF8fHx8MTc3MTE1NzcwNnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1601307666167-910027240bcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwcmliYm9uJTIwZ2lmdCUyMGJveHxlbnwxfHx8fDE3NzExNTc3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1679033876203-6aefd396c5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzcxMTU3NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1624993014250-fc6877db3222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc3MTE1NzcwOXww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1725900544601-1a6d588cb7ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwY2FmZSUyMGludGVyaW9yJTIwZnJlbmNofGVufDF8fHx8MTc3MTE1NzcwNXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coquettes Café Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F8C8DC]/30 via-transparent to-[#FAF9F6]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl space-y-6">
            <h1
              className="text-5xl md:text-7xl text-[#A84A6E] drop-shadow-lg"
              style={{ fontFamily: "var(--font-accent)" }}
            >
              Coquettes Café
            </h1>
            <p className="text-xl md:text-2xl text-[#4A4A4A]" style={{ fontFamily: "var(--font-heading-alt)" }}>
              Where Romance Meets Flavor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                to="/menu"
                className="px-8 py-3 bg-[#F8C8DC] text-[#4A4A4A] rounded-full hover:bg-[#D88CA3] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Menu
              </Link>
              <Link
                to="/reservations"
                className="px-8 py-3 bg-white/90 text-[#A84A6E] rounded-full border-2 border-[#C6A75E] hover:bg-[#C6A75E] hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Order Online
              </Link>
              <Link
                to="/florals"
                className="px-8 py-3 bg-[#B8C9B1] text-white rounded-full hover:bg-[#A84A6E] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Explore Florals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 px-4 bg-[#FFF6EC]/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl text-[#A84A6E]">A Romantic Escape</h2>
          <p className="text-lg leading-relaxed text-[#4A4A4A]">
            Coquettes Café is a romantic floral café inspired by French elegance and soft coquette charm.
            We blend delicate aesthetics with exceptional flavors to create an unforgettable experience
            for those who cherish beauty in every detail.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-[#D88CA3] hover:text-[#A84A6E] transition-colors group"
          >
            Learn More
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Menu Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-[#A84A6E] text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  to={category.link}
                  className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8C8DC]/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-6 h-6 text-white" />
                        <h3 className="text-xl text-white">{category.title}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[#4A4A4A]">{category.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-16 px-4 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-4">Instagram Gallery</h2>
            <p className="text-[#4A4A4A]">Follow us @coquettes.cafe for daily inspiration</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
              >
                <ImageWithFallback
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#F8C8DC]/0 group-hover:bg-[#F8C8DC]/30 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F8C8DC] via-[#D88CA3] to-[#A84A6E] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Book Your Table
          </h2>
          <p className="text-lg md:text-xl opacity-95">
            Reserve your spot in our dreamy café and experience romance in every detail
          </p>
          <Link
            to="/reservations"
            className="inline-block px-10 py-4 bg-white text-[#A84A6E] rounded-full hover:bg-[#FFF6EC] transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 mt-4"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
}
