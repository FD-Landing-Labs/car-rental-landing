import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const faqs = [
    {
      question: "How do I book a car?",
      answer:
        "Booking a car is simple! Browse our fleet, select your desired vehicle and dates, and proceed to checkout. You can also contact our support team for assistance.",
    },
    {
      question: "Can the car be delivered to my location?",
      answer:
        "Yes, we offer premium delivery services to your preferred location, whether it's your home, office, or the airport. Additional fees may apply based on distance.",
    },
    {
      question: "What is the minimum rental period?",
      answer:
        "Our minimum rental period is typically one day (24 hours). We also offer flexible weekly and monthly rental options to suit your needs.",
    },
    {
      question: "Is insurance included?",
      answer:
        "Basic insurance is included with all rentals. We also offer comprehensive insurance packages for added peace of mind during your journey.",
    },
    {
      question: "Do I need a security deposit?",
      answer:
        "Yes, a security deposit is required for all rentals. The amount varies depending on the vehicle category and is refundable upon the safe return of the car.",
    },
  ];

  return (
    <section className="bg-white pb-14  px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-2">
          {/* Left Side - Text */}
          <div className="flex flex-col   gap-6">
            <h2 className="font-header text-2xl md:text-5xl text-black leading-tight">
              Got questions?  We&apos;ve got answers!
            </h2>
            <p className="font-sans text-gray-500 text-md leading-relaxed md:max-w-md">
              Check out our most frequently asked questions below to find out
              more about our premium rental services, policies, and more.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="flex flex-col  ">
            <Accordion type="single" collapsible className="flex flex-col space-y-2  w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 transition-colors "
                >
                  <AccordionTrigger className="text-black font-inter  font-medium text-md md:text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-500 text-sm md:text-base  leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
     
    </section>
  );
}
