// import React from "react";
// import bannerImg from "../../assets/assets/banner.png";
// const Banner = () => {
//   return (
//     <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
//       <div className="md:w-1/2 w-full flex items-center md:justify-end">
//         <img src={bannerImg} alt="" />
//       </div>

//       <div className="md:w-1/2 w-full">
//         <h1 className="md:text-5xl text-2xl font-medium mb-7">
//           New Releases This Week
//         </h1>
//         <p className="mb-10">
//           It's time to update your reading list with some of the latest and
//           greatest releases in the literary world. From heart-pumping thrillers
//           to captivating memoirs, this week's new releases offer something for
//           everyone
//         </p>

//         <button className="btn-primary">Subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default Banner;





import React from "react";
import bannerImg from "../../assets/assets/banner.png";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-12 px-4 md:px-8 py-10 md:py-16">
      {/* Image section */}
      <div className="md:w-1/2 w-full flex justify-center md:justify-end">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full max-w-xs sm:max-w-md md:max-w-full"
        />
      </div>

      {/* Text section */}
      <div className="md:w-1/2 w-full text-center md:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium mb-6">
          New Releases This Week
        </h1>
        <p className="mb-8 text-sm sm:text-base text-gray-700 px-2 sm:px-0">
          It's time to update your reading list with some of the latest and
          greatest releases in the literary world. From heart-pumping thrillers
          to captivating memoirs, this week's new releases offer something for
          everyone.
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
