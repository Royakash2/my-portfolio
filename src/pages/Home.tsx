import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className=" text-white min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      {/* Profile Section */}
      <div className="bg-[#1A1A1A] w-full h-full">
        
      </div>

      {/* Credentials Section */}
      <div className=" grid grid-cols-1 md:grid-cols-2 items-center rounded-xl gap-5 p-6 ">
        <div className="bg-[#1A1A1A] md:col-span-2 p-5 rounded-3xl">
          <Marquee>
            <span className="text-xl mx-4">Latest Work and Featured</span>
            <span className="text-xl mx-4">Latest Work and Featured</span>
            <span className="text-xl mx-4">Latest Work and Featured</span>
          </Marquee>
        </div>
        <div className="bg-[#1A1A1A]">
          <div className="card bg-[#1A1A1A] w-full h-[50%] shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A]">
          <div className="card bg-[#1A1A1A] w-full h-[50%] shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col justify-between">
        <p className="uppercase text-gray-400 text-sm">Showcase</p>
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Project"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Additional Info (Logos and Icons) */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 grid grid-cols-3 gap-4">
        <div className="flex justify-center items-center">
          <div className="bg-[#323232] p-4 rounded-full">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo 1"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#323232] p-4 rounded-full">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo 2"
              className="rounded-lg"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#323232] p-4 rounded-full">
            <img
              src="https://via.placeholder.com/50"
              alt="Logo 3"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
