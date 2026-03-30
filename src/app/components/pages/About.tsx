import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Heart, Sparkles, Coffee, Flower2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#FFF6EC] to-[#F8C8DC]/30 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl text-[#A84A6E]">Our Story</h1>
          <p className="text-xl text-[#4A4A4A] leading-relaxed">
            A celebration of elegance, beauty, and the art of living beautifully
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl text-[#A84A6E]">Where Romance Meets Flavor</h2>
                <div className="w-24 h-1 bg-[#C6A75E] rounded-full" />
              </div>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                Coquettes Café was founded to create a space where elegance and comfort blend seamlessly. 
                Inspired by Parisian tea rooms and the coquette aesthetic, our café is designed for those 
                who cherish beauty in the little details.
              </p>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                Every corner of our café tells a story of romance—from the delicate lace tablecloths 
                to the fresh roses that grace each table. We believe that life's sweetest moments deserve 
                to be savored in an environment that feels like a dream.
              </p>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                Our menu features handcrafted beverages and French-inspired pastries, all made with 
                premium ingredients and an abundance of love. Whether you're here for a morning latte, 
                an afternoon tea, or to pick up a bouquet of fresh blooms, we want you to feel cherished.
              </p>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1597250490256-13daf8a68529?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwY2FmZSUyMGludGVyaW9yJTIwZnJlbmNoJTIwdmludGFnZXxlbnwxfHx8fDE3NzExNTc4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Café interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F8C8DC] rounded-full -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D88CA3] rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center">
            <Heart className="w-10 h-10 fill-white" />
          </div>
          <blockquote className="text-2xl md:text-3xl italic leading-relaxed" style={{ fontFamily: "var(--font-heading-alt)" }}>
            "I wanted to create a space where every visit feels like stepping into a French daydream. 
            A place where you can escape the ordinary and embrace the extraordinary beauty of simple pleasures."
          </blockquote>
          <p className="text-xl opacity-95">— Sophie Laurent, Founder</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F8C8DC] rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl text-[#A84A6E]">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                To be the most beloved destination for those seeking beauty, elegance, and romance 
                in their everyday lives. We envision a world where people slow down to appreciate 
                life's delicate moments—a perfectly crafted latte, a handpicked rose, a conversation 
                with a friend in a beautiful setting.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#D88CA3] rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <h3 className="text-3xl text-[#A84A6E]">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed text-[#4A4A4A]">
                To create an enchanting café experience that combines exceptional quality with 
                romantic aesthetics. We're committed to sourcing the finest ingredients, supporting 
                local flower growers, and providing a welcoming space where everyone feels like they 
                belong to our coquette community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-16 px-4 bg-[#FFF6EC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">What Makes Us Special</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                <Coffee className="w-10 h-10 text-[#F8C8DC]" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Artisan Beverages</h4>
              <p className="text-[#4A4A4A]">
                Handcrafted drinks made with premium ingredients and lots of love
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                <Flower2 className="w-10 h-10 text-[#D88CA3]" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Fresh Florals</h4>
              <p className="text-[#4A4A4A]">
                Daily fresh flowers curated and arranged by our expert florists
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                <Sparkles className="w-10 h-10 text-[#C6A75E]" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Aesthetic Space</h4>
              <p className="text-[#4A4A4A]">
                Instagram-worthy interiors designed for your most romantic moments
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center shadow-md">
                <Heart className="w-10 h-10 text-[#A84A6E] fill-[#A84A6E]" />
              </div>
              <h4 className="text-xl text-[#A84A6E]">Made with Love</h4>
              <p className="text-[#4A4A4A]">
                Every detail is crafted with care and attention to create magic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#F8C8DC] via-[#D88CA3] to-[#A84A6E] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
            Come Visit Us
          </h2>
          <p className="text-xl opacity-95">
            Experience the magic of Coquettes Café for yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/reservations"
              className="inline-block px-8 py-3 bg-white text-[#A84A6E] rounded-full hover:bg-[#FFF6EC] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Make a Reservation
            </a>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-[#A84A6E] transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
