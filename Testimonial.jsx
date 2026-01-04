import React from "react";

const testimonials = [
  {
    id: 1,
    name: "MD Amdad Islam",
    role: "Happy Customer",
    message:
      "Hands down the best place to buy furniture!, The staff is extremely professional and very helpful with great insights into products, very competitive pricing. Went to buy only chair, ended up buying multiple items",
    image: "images/10.jpg",
  },
  {
    id: 2,
    name: "Zahidul Islam Mahim",
    role: "Interior Designer",
    message:
      "Great JOB.",
    image: "images/9.jpg",
  },
  {
    id: 3,
    name: "Md Rijoan Maruf",
    role: "Businessman",
    message:
      "They know their beds. I just bought my mattress there. A great experience from beginning to end.",
    image: "images/10.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Why Customers Love <span className="text-cyan-600">Mobileria Vali</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full border-2 border-cyan-500"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {t.name}
                  </h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">“{t.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
