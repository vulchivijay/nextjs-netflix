export default function Page() {
  const merchandise = [
    {
      name: "Netflix Logo Hoodie",
      price: "$49.99",
      image: "👕",
      category: "Apparel",
      description: "Comfortable cotton hoodie featuring the iconic Netflix logo."
    },
    {
      name: "Stranger Things Mug",
      price: "$14.99",
      image: "☕",
      category: "Accessories",
      description: "Ceramic mug with the Upside Down design from Stranger Things."
    },
    {
      name: "The Crown T-Shirt",
      price: "$24.99",
      image: "👑",
      category: "Apparel",
      description: "Classic white tee with The Crown royal emblem."
    },
    {
      name: "Money Heist Backpack",
      price: "$39.99",
      image: "🎒",
      category: "Accessories",
      description: "Durable backpack featuring the iconic red jumpsuit design."
    },
    {
      name: "Black Mirror Phone Case",
      price: "$19.99",
      image: "📱",
      category: "Accessories",
      description: "Protective phone case with Black Mirror-inspired patterns."
    },
    {
      name: "The Witcher Poster",
      price: "$9.99",
      image: "🗡️",
      category: "Home & Decor",
      description: "High-quality poster featuring Geralt of Rivia."
    },
    {
      name: "Bridgerton Notebook",
      price: "$12.99",
      image: "📓",
      category: "Stationery",
      description: "Elegant notebook with Bridgerton-inspired design."
    },
    {
      name: "Narcos Cap",
      price: "$22.99",
      image: "🧢",
      category: "Apparel",
      description: "Baseball cap with Narcos logo and styling."
    }
  ];

  const categories = [
    { name: "Apparel", count: "25+ items", icon: "👕" },
    { name: "Accessories", count: "30+ items", icon: "🎒" },
    { name: "Home & Decor", count: "15+ items", icon: "🏠" },
    { name: "Stationery", count: "10+ items", icon: "📝" }
  ];

  const featuredCollections = [
    {
      title: "Stranger Things Collection",
      description: "Show your love for the Upside Down with exclusive merch.",
      items: ["Hoodies", "T-Shirts", "Posters", "Mugs"],
      image: "⚡"
    },
    {
      title: "The Crown Collection",
      description: "Royal-inspired items fit for the monarchy.",
      items: ["T-Shirts", "Mugs", "Notebooks", "Pins"],
      image: "👑"
    },
    {
      title: "Money Heist Collection",
      description: "Join the Professor's crew with these bold designs.",
      items: ["Hoodies", "Backpacks", "Masks", "T-Shirts"],
      image: "💰"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
          <div className="max-w-6xl mx-auto text-center px-8">
            <h1 className="text-5xl font-bold mb-6">Netflix Shop</h1>
            <p className="text-xl mb-8">
              Discover exclusive Netflix merchandise featuring your favorite shows and movies.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Shop by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-red-400 text-sm">{category.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Collections</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredCollections.map((collection, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-6xl mb-4 text-center">{collection.image}</div>
                  <h3 className="text-xl font-semibold mb-3">{collection.title}</h3>
                  <p className="text-gray-300 mb-4">{collection.description}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-400">Includes:</p>
                    {collection.items.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-sm text-gray-300">• {item}</p>
                    ))}
                  </div>
                  <button className="w-full mt-4 bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                    Shop Collection
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {merchandise.map((item, index) => (
                <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors">
                  <div className="aspect-square bg-gray-700 flex items-center justify-center text-6xl">
                    {item.image}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <span className="text-red-400 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{item.category}</p>
                    <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                    <button className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping & Returns */}
        <section className="py-16 px-8 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Shipping & Returns</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🚚</div>
                <h3 className="text-xl font-semibold mb-3">Free Shipping</h3>
                <p className="text-gray-300">
                  Free standard shipping on orders over $50. Express shipping available.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">↩️</div>
                <h3 className="text-xl font-semibold mb-3">Easy Returns</h3>
                <p className="text-gray-300">
                  30-day return policy. Free return shipping for defective items.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-5xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">Global Shipping</h3>
                <p className="text-gray-300">
                  Ships to over 50 countries worldwide. International shipping rates apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8">
              Get notified about new products, exclusive drops, and special offers.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-black"
                />
                <button className="bg-black hover:bg-gray-800 px-6 py-3 rounded-lg font-bold text-white transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
