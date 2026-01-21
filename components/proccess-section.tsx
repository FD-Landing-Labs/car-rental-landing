import Image from "next/image";

const processSteps = [
  {
    id: 1,
    title: "Browse Cars",
    description: "Select from our premium collection",
  },
  {
    id: 2,
    title: "Choose Ride",
    description: "Pick the perfect car",
  },
  {
    id: 3,
    title: "Set Your Date",
    description: "Pick duration and location",
  },
  {
    id: 4,
    title: "Add Preferences",
    description: "Include extras like a driver",
  },
  {
    id: 5,
    title: "Confirm Booking",
    description: "Secure your ride",
  },
  {
    id: 6,
    title: "Pick Up & Drive",
    description: "Collect your car and enjoy the road ahead.",
  },
];

export default function ProccessSection() {
  return (
    <section className="py-24 bg-white">
      <div className=" px-4 md:px-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-header text-2xl md:text-5xl text-black leading-[1.1] mb-6 tracking-tight">
              Simple. Fast. Hassle-Free
            </h2>
            <p className="text-gray-500 text-md md:text-lg max-w-xl font-inter">
              Experience a smooth rental process designed to get you on the road
              in minutes. From selecting your dream car to confirming your
              booking
            </p>
          </div>
          <button className="bg-[#1a3edb] font-inter hover:bg-blue-800 text-white font-medium text-sm w-full md:w-auto px-6 py-3 rounded-full transition-colors cursor-pointer">
            Start Booking
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Steps Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center border border-gray-100 hover:border-gray-200 transition-colors"
              >
                <h3 className="font-header text-xl md:text-2xl text-black mb-2 ">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-inter">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Feature Image */}
          <div className="lg:col-span-1 relative h-full min-h-[300px] rounded-3xl overflow-hidden bg-gray-100">
            <Image
              src="/assets/images/Nissan.png" // Using a placeholder, user can swap
              alt="Luxury car rental process"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Optional overlay or gradient if needed to match exact "silvery" look of design, 
                but clean image is usually safer unless specifically requested. */}
          </div>
        </div>
      </div>
    </section>
  );
}
