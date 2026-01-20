import { BookA, Car, CarFront, DoorClosed, User } from "lucide-react";
import Image from "next/image";
export default function CarsPage() {
  const cars = [
    {
      id: 1,
      image: "/assets/images/hero-car.avif",
      name: "Sports Coupe",
      type: "Sports",
      seats: "2",
      doors: "2",
      transmission: "Auto",
    },
    {
      id: 2,
      image: "/assets/images/hero-car.avif",
      name: "Luxury SUV",
      type: "SUV",
      seats: "5",
      doors: "4",
      transmission: "Auto",
    },
    {
      id: 3,
      image: "/assets/images/hero-car.avif",
      name: "Executive Sedan",
      type: "Sedan",
      seats: "5",
      doors: "4",
      transmission: "Auto",
    },
  ];

  return (
    <div className="flex flex-col px-4 py-12 md:py-24 gap-12 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-black font-header text-3xl md:text-5xl ">
          Find Your Perfect Ride
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <p className="md:w-1/2 font-sans text-gray-500 text-md md:text-lg">
            Explore a handpicked collection of luxury and performance cars built
            for every journey. From sleek sedans to bold SUVs and electric
            innovators
          </p>

          <button className="bg-[#1a3edb] hover:bg-blue-800 text-white font-medium text-sm w-full md:w-auto px-6 py-3 rounded-full transition-colors">
            View All Cars
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-gray-300 p-4 rounded-3xl overflow-hidden flex flex-col justify-between"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full ">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-4">
              <h3 className="text-black font-header text-lg md:text-xl font-medium">
                {car.name}
              </h3>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="flex gap-2 items-center bg-gray-200 rounded-full px-2 py-2">
                  <CarFront size={16} className="text-black" />
                  <span className="text-black text-xs font-medium">
                    {car.type}
                  </span>
                </div>
                <div className="flex gap-2 items-center bg-gray-200 rounded-full px-2 py-2">
                  <User size={16} className="text-black" />
                  <span className="text-black text-xs font-medium">
                    {car.seats} seats
                  </span>
                </div>
                <div className="flex gap-2 items-center bg-gray-200 rounded-full px-2 py-2">
                  <DoorClosed size={16} className="text-black" />
                  <span className="text-black text-xs font-medium">
                    {car.doors} doors
                  </span>
                </div>
                <div className="flex gap-2 items-center bg-gray-200 rounded-full px-2 py-2">
                  <BookA size={16} className="text-black" />
                  <span className="text-black text-xs font-medium">
                    {car.transmission}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 gap-3 mt-auto">
                <button className="bg-gray-200 text-black px-4 py-2.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors">
                  View Details
                </button>
                <button className="bg-black text-white px-4 py-2.5 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
