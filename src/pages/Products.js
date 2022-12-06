import React from "react";

const Products = () => {
  return (
    <div className="flex flex-col container mx-auto">
      <h1 className="font-bold text-xl underline">Products</h1>
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="shadow rounded cursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">Solar Lights</h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p4.jpg" alt="" />
          </div>

          <p>
            Solar energy is the real 100% power saving .No bills just free
            beautiful light at night. We can light up your surroundings with
            solar lights. Buy from as at minimum cost <br />
            1. 60w = K750, 2. 90w = k950, 3. 120w = k1350, 4. 150w = k1500, 6.
            200w = k2000. <br />
            We have high quality and free installation.
          </p>
        </div>
        <div className="shadow roundedcursor-pointer m-2 transition ease-out duration-300 hover:translate-y-1">
          <h3 className="font-bold">Egg Incubators Supply and Repair</h3>
          <div className="w-48 md:w-80 h-50 md:h-80">
            <img className="w-full h-full" src="./images/p10.jpg" alt="" />
          </div>

          <p>
            176 egg capacity automatic turning is k4650. <br />
            110 egg capacity manual turning is k1650
          </p>
        </div>
      </div>
    </div>
  );
};

export default Products;
