import ServicesCard from "./ServicesCard";

const ServicesPackage = () => {
  return (
    <div className="col-span-12 lg:col-start-2 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 lg:mb-10">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 ml-6 bg-slate-100 text-slate-800 px-4 py-2 rounded-lg">
        Full Throttle Service Packages: from just{' '}
        <span className="text-orange-500">£110</span>
      </h1>
      <p className="w-full lg:w-[60%] text-slate-300 text-sm md:text-md lg:text-lg px-6 mb-8">
        At Full Throttle Maps, we offer four tailored service packages—Basic, Interim, Full, and Major—designed to meet all your vehicle servicing needs. Whether you are looking for a quick check-up or a comprehensive service, our packages ensure your car or van receives the care it needs to stay in top condition. Choose the service that best suits your requirements and drive with confidence knowing your vehicle is in expert hands.
      </p>
      <ServicesCard />
    </div>
  );
};

export default ServicesPackage;

