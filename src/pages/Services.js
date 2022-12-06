import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <h1 className="font-bold text-xl underline">Services</h1>
      <div className=" grid lg:grid-cols-2 gap-10">
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">
            Air condition installation, servicing and repair
          </h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p3.jpg" alt="" />
          </div>

          <p>
            176 egg capacity automatic turning is k4650. 110 egg capacity manual
            turning is k1650
          </p>
        </div>
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">
            Domestic Electrical wiring including shops, warehouses and offices.
          </h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p9.jpg" alt="" />
          </div>

          <p>We do electric wiring...perfect</p>
        </div>
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">
            Modern Electrical Appliances installation, troubleshooting and
            repair.
          </h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p7.jpg" alt="" />
          </div>

          <p>
            We do Electrical Appliances installation, troubleshooting and repair
          </p>
        </div>
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">
            Solar security lights(flood lights) and installation
          </h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p5.jpg" alt="" />
          </div>

          <p>Solar security lights(flood lights) and installation</p>
        </div>
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">Solar Hiring</h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p5.jpg" alt="" />
          </div>

          <p>
            For your outdoor evening events you can hire our solar lights and we
            can come set them up for you .....at a very sweet price
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
