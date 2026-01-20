import Image from "next/image";

export default function FutureSection() {
  return (
    <div className="px-4 py-14 bg-gray-100 space-y-14">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-3xl md:text-4xl font-medium font-header">
            Luxury Meets Reliability
          </span>
          <span className="text-gray-600">
            Discover the perfect blend of opulence and dependability{" "}
            <br className="hidden md:block" /> with our premium car rental
            services.
          </span>
        </div>
        <div className="flex gap-2 font-medium flex-wrap">
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm md:text-base">
            Expert
          </button>
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm md:text-base">
            Flexible
          </button>
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm md:text-base">
            Sanitized
          </button>
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm md:text-base">
            Booking
          </button>
          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-4 py-2 rounded-full cursor-pointer text-sm md:text-base">
            Membership
          </button>
        </div>
      </div>

      <div className="flex flex-col bg-white p-6 rounded-lg shadow-md items-center justify-center gap-4 w-full md:w-1/2 lg:w-1/3 mx-auto text-center">
        <span className="text-2xl font-medium font-header">Expert Service</span>
        <Image
          src="/assets/images/Nissan.png"
          alt="Future Car"
          width={400}
          height={500}
          className="object-contain w-full h-auto"
        />
        <span className="text-lg md:text-xl font-medium">
          Professional guidance for your perfect ride
        </span>
        <button className="bg-[#1a3edb] hover:bg-blue-800 text-white px-6 py-2.5 rounded-full cursor-pointer font-medium transition-colors">
          Book Your Ride
        </button>
      </div>
    </div>
  );
}
