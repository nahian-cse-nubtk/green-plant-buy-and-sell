import { FaLeaf, FaLinkedin, FaTwitter } from "react-icons/fa";

const experts = [
  {
    name: "Dr. Amelia Green",
    role: "Botany Specialist",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Liam Carter",
    role: "Urban Gardening Expert",
    image:
      "https://pbs.twimg.com/profile_images/1154392301579493376/pOIrGe4B_400x400.jpg",
  },
  {
    name: "Sophia Rahman",
    role: "Plant Care Consultant",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=500&auto=format&fit=crop",
  },
];

export default function GreenExperts() {
  return (
    <section className="bg-green-50 pb-10 px-5">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 flex justify-center items-center gap-2">
          <FaLeaf className="text-green-600" />
          Meet Our Green Experts
        </h2>
        <p className="mt-3 text-gray-600 max-w-xl mx-auto">
          Our passionate plant professionals are here to guide you with expert
          advice, care tips, and sustainable gardening solutions.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {experts.map((expert, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img
              src={expert.image}
              alt={expert.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                {expert.name}
              </h3>
              <p className="text-green-600 font-medium mb-4">
                {expert.role}
              </p>

              {/* Social icons */}
              <div className="flex justify-center gap-4 text-green-700">
                <FaLinkedin className="cursor-pointer hover:text-green-900 text-xl" />
                <FaTwitter className="cursor-pointer hover:text-green-900 text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
