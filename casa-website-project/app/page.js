export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-7xl font-black mb-6">CASA</h1>
        <p className="text-2xl text-gray-300 mb-8">
          Empowering Businesses Through Smarter Customer Experiences
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 rounded-2xl bg-purple-600">
            Explore Services
          </button>
          <button className="px-8 py-4 rounded-2xl bg-orange-500">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  )
}
