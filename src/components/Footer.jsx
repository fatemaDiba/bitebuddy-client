import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="text-white bg-gray-900">
      <div className="container mx-auto">
        <div className="p-20">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl md:text-3xl font-bold mb-2">BiteBuddy</h3>
            <p className="md:w-[45%] text-center text-sm md:text-base text-white/50">
              Share your food, your story, and your love for cooking. Join a
              community that celebrates every bite!
            </p>
          </div>
          <div className="border-t-2 border-[#09080F1A] mt-10">
            <footer className="grid grid-cols-2 lg:grid-cols-4 gap-16 p-10 mx-auto">
              <nav className="flex flex-col gap-1 ">
                <p className="link link-hover text-base md:text-lg  hover:text-orange-400 text-white/90 mb-2">
                  Our Impact
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Over 10,000 meals shared, 5,000+ community members, and
                  growing every day!
                </p>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className="link link-hover text-base md:text-lg  hover:text-orange-400 text-white/90 mb-2">
                  Join Our Community
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Be part of a movement that values food, reduces waste, and
                  builds meaningful connections.
                </p>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className="link link-hover text-base md:text-lg  hover:text-orange-400 text-white/90 mb-2">
                  Explore
                </p>
                <a className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Popular Recipes
                </a>
                <a className="link link-hover  hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Community Events
                </a>
                <a className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Success Stories
                </a>
              </nav>
              <nav className="flex flex-col gap-1 ">
                <p className="link link-hover text-base md:text-lg  hover:text-orange-400 text-white/90 mb-2">
                  Stay Updated
                </p>
                <p className="text-white/50 text-sm md:text-base">
                  Sign up for our newsletter to get the latest food-sharing tips
                  and updates.
                </p>
              </nav>
            </footer>
          </div>
          <div className="border border-t-1 border-white/30 mb-10 mt-10 w-full"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-center text-sm md:text-base text-white/70">
            <div className="flex flex-col md:flex-row  gap-4">
              <p className=" text-white/50">
                © 2024 Adventure Page. All Rights Reserved.
              </p>
              <div className="flex gap-3">
                <a className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Privacy & Legal
                </a>
                <a className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Accessibility
                </a>
                <a className="link link-hover hover:text-orange-400 text-white/50 text-sm md:text-base">
                  Manage Cookies
                </a>
              </div>
            </div>

            <div className="flex gap-3 mt-4 md:mt-0">
              <FaFacebook className="text-2xl" />
              <FaTwitter className="text-2xl" />
              <IoLogoYoutube className="text-2xl" />
              <RiInstagramFill className="text-2xl" />
              <FaTiktok className="text-2xl" />
              <FaLinkedinIn className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
