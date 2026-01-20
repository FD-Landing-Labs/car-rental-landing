export default function About() {
  const stats = [
    { label: "Luxury Cars", value: "500+" },
    { label: "Road Assistance", value: "24/7" },
    { label: "Service Guarantee", value: "100%" },
    { label: "Pickup Locations", value: "60+" },
    { label: "Satisfied Clients", value: "800+" },
  ];

  return (
    <section className="bg-white pt-10 px-4  ">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 py-14">
        {/* Left Side - Headline */}
        <div className="w-full md:w-1/2">
          <h2 className="font-header text-3xl md:text-5xl  text-black">
            Drive Luxury  Live Freedom
          </h2>
        </div>

        {/* Right Side - Description */}
        <div className="flex flex-col w-full md:w-8/12  gap-8">
          <p className=" text-black text-xl leading-relaxed  font-medium">
            Experience premium car rentalscrafted for comfort,perfomance, and style. 
            Whether its a quick business trip or long <span className="text-gray-500">weekend getaway our fleet is 
            designed to elevate your journey </span>  </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 border-t border-gray-300 pt-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col  border-l border-gray-300 pl-4">
            <span className="text-2xl md:text-4xl  text-black">
              {stat.value}
            </span>
            <span className=" text-sm text-gray-400  font-medium tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

        </div>
      </div>

      {/* Stats Row */}
      
    </section>
  );
}
