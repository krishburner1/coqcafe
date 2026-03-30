import { ImageWithFallback } from "../figma/ImageWithFallback";

export default function Menu() {
  const drinks = [
    {
      name: "Rose Vanilla Latte",
      description: "Espresso infused with rose syrup and vanilla bean",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1683122925249-8b15d807db4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlJTIwbGF0dGUlMjBjb2ZmZWV8ZW58MXx8fHwxNzcxMTU3NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Strawberry Cream Matcha",
      description: "Premium matcha with fresh strawberry purée and cream",
      price: "$7.00",
      image: "https://images.unsplash.com/photo-1683354917737-11ddf355eadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwbWF0Y2hhJTIwZHJpbmt8ZW58MXx8fHwxNzcxMTU3NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Blush Iced Latte",
      description: "Cold brew with rose water and oat milk",
      price: "$6.00",
      image: "https://images.unsplash.com/photo-1764335685958-a7cd019619da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWF0Y2hhJTIwbGF0dGV8ZW58MXx8fHwxNzcxMTU3NzEwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Lavender Honey Cappuccino",
      description: "Classic cappuccino with lavender and wildflower honey",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1682073572297-5cf4f85bb1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGNhcHB1Y2Npbm98ZW58MXx8fHwxNzcxMTU3NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Raspberry White Mocha",
      description: "White chocolate mocha with raspberry swirl",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1770947257992-04c3cde0328c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbGF0dGUlMjBhcnQlMjBjb2ZmZWV8ZW58MXx8fHwxNzcxMTU3NzA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rose Milk Tea",
      description: "Black tea with rose essence and tapioca pearls",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1529474944862-bf4949bd2f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxrJTIwdGVhJTIwYnViYmxlfGVufDF8fHx8MTc3MTE1Nzc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const desserts = [
    {
      name: "Strawberry Shortcake",
      description: "Layers of vanilla sponge, fresh strawberries, and cream",
      price: "$8.50",
      image: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc2hvcnRjYWtlfGVufDF8fHx8MTc3MTE1Nzc2OHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Rose Macarons",
      description: "Delicate French macarons infused with rose water",
      price: "$12.00",
      image: "https://images.unsplash.com/photo-1679033876203-6aefd396c5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbiUyMGRlc3NlcnR8ZW58MXx8fHwxNzcxMTU3NzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Vanilla Lace Cupcakes",
      description: "Madagascar vanilla cupcakes with buttercream",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1771016834020-bc594fb5cf11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY3VwY2FrZSUyMHBpbmt8ZW58MXx8fHwxNzcxMTU3NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Pink Velvet Cake",
      description: "Rich pink velvet with cream cheese frosting",
      price: "$9.00",
      image: "https://images.unsplash.com/photo-1690584176775-473b462e4c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwdmVsdmV0JTIwY2FrZXxlbnwxfHx8fDE3NzExNTc3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Raspberry Tart",
      description: "Buttery tart shell filled with raspberry custard",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1574198998217-deedebc22a4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjB0YXJ0JTIwZGVzc2VydHxlbnwxfHx8fDE3NzExNTc3NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "French Croissants",
      description: "Flaky butter croissants baked fresh daily",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1731696644139-80c466c6aac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBjcm9pc3NhbnQlMjBidXR0ZXJ8ZW58MXx8fHwxNzcxMTU3NzcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const floralAddons = [
    {
      name: "Petite Rose Bouquet",
      description: "5 fresh roses wrapped in satin ribbon",
      price: "$18.00",
    },
    {
      name: "Peony Bloom Bundle",
      description: "Seasonal peonies in soft pink tones",
      price: "$35.00",
    },
    {
      name: "Ribbon-Wrapped Floral Box",
      description: "Curated arrangement in a decorative box",
      price: "$45.00",
    },
    {
      name: "Floral Tea Gift Set",
      description: "Artisan tea blend with dried flowers",
      price: "$28.00",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#F8C8DC] to-[#D88CA3] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-4">Our Menu</h1>
          <p className="text-xl opacity-95">Handcrafted with love and elegance</p>
        </div>
      </div>

      {/* Signature Drinks */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Signature Drinks</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {drinks.map((drink, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl text-white">{drink.name}</h3>
                      <span className="text-2xl text-[#F8C8DC]" style={{ fontFamily: "var(--font-heading)" }}>
                        {drink.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#4A4A4A]">{drink.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan Desserts */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Artisan Desserts</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {desserts.map((dessert, index) => (
              <div
                key={index}
                className="bg-[#FFF6EC] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={dessert.image}
                    alt={dessert.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex justify-between items-end">
                      <h3 className="text-xl text-white">{dessert.name}</h3>
                      <span className="text-2xl text-[#F8C8DC]" style={{ fontFamily: "var(--font-heading)" }}>
                        {dessert.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#4A4A4A]">{dessert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floral & Gift Add-ons */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFF6EC] to-[#F8C8DC]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-[#A84A6E] mb-2">Floral & Gift Add-ons</h2>
            <div className="w-24 h-1 bg-[#C6A75E] mx-auto rounded-full" />
            <p className="mt-4 text-[#4A4A4A]">Perfect pairings for any occasion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {floralAddons.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-[#D88CA3]/20"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl text-[#A84A6E]">{item.name}</h3>
                  <span className="text-2xl text-[#D88CA3]" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.price}
                  </span>
                </div>
                <p className="text-[#4A4A4A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
