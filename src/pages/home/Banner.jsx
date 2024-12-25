const Banner = () => {
  return (
    <div className="mb-20 mx-auto">
      <div className="relative w-full h-[45vh] md:h-[75vh]">
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white p-4">
          <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg w-9/12 md:max-w-3xl space-y-4 dark:text-white">
            <h1 className="text-xl md:text-4xl font-bold">
              Cook, Share, Connect!
            </h1>
            <p className="text-base md:text-lg md:w-[75%] text-white mx-auto">
              Turn your meals into moments of joy. Share your dishes and bond
              with a community that loves food as much as you do.
            </p>
            <a className="btn border-0 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg">
              Explore More
            </a>
          </div>
        </div>
        <div className="carousel w-full h-[45vh] md:h-[75vh] rounded-lg">
          <div id="slide1" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m1.jpg" className="w-full rounded-lg " />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m4.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m3.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full rounded-lg">
            <img src="/assets/m2.jpg" className="w-full rounded-lg" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
