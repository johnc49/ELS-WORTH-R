import React from "react";

const Reviews = () => {
  return (
    <div className="container mx-auto">
      <section id="testimonials">
        {/* <!-- Container to heading and testm blocks --> */}
        <div className="max-w-6xl px-5 mx-auto mt-10 text-center">
          {/* <!-- Heading --> */}
          <h2 className="text-3xl font-bold text-center">
            What our Clients Say about Our Services
          </h2>
          {/* <!-- Testimonials Container --> */}
          <div className="flex flex-col mt-10 md:flex-row md:space-x-6">
            {/* <!-- Testimonial 1 --> */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
              <img src="./images/dp.png" className="w-16 mt-2" alt="" />
              <h5 className="text-lg font-bold">Mathew</h5>
              <p className="text-sm text-darkGrayishBlue">
                “ EL'S provides quality services”
              </p>
            </div>

            {/* <!-- Testimonial 2 --> */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src="./images/dp.png" className="w-16 mt-2" alt="" />
              <h5 className="text-lg font-bold">Derick</h5>
              <p className="text-sm text-darkGrayishBlue">
                "the best company which sorted out all my issues"
              </p>
            </div>

            {/* <!-- Testimonial 3 --> */}
            <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3">
              <img src="./images/dp.png" className="w-16 mt-2" alt="" />
              <h5 className="text-lg font-bold">Richard</h5>
              <p className="text-sm text-darkGrayishBlue">
                “I always buy my solar equipments from this company, its
                realiable.”
              </p>
            </div>
          </div>
          {/* <!-- Button --> */}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
