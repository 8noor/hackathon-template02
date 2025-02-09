import React from 'react';

const Benefit = () => {
  return (
    <>
      <section>
        <div className="py-12 bg-purple-400 text-[#2A254B] mt-12">
          <div className="w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-purple-300 mx-auto flex justify-center items-center flex-col px-4">
            <h1 className="text-2xl md:text-4xl text-center">
              Become a member and enjoy the perks
            </h1>
            <h2 className="text-center py-4 text-sm md:text-base">
              Subscribe to our newsletter and be the first to access special
              <br /> promotions, new product launches, exclusive events, and more.
            </h2>
            <div className="mt-4 w-full">
              <form action="" className="flex flex-col md:flex-row items-center justify-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] outline-none mb-4 md:mb-0"
                />
                <button className="p-2 bg-[#2A254B] text-white w-full md:w-[118px] h-[56px]">
                  Join Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
