export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";
import Image from "next/image";

import FeatImage01 from "@/public/images/frame_sample1.png";
import FeatImage02 from "@/public/images/features-03-image-02.png";
import FeatImage03 from "@/public/images/features-03-image-03.png";
// TODO: ADD CUSTOM VIDEO CONTROLLER OR WHAT
export default function KeplerMap() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">
              Let's dive deep into our world of data with an easy to grasp
              solution
            </h1>
          </div>
          <div
            className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1 flex justify-center flex-col items-center"
            data-aos="fade-up"
          >
            {/* <Image
              className="max-w-full mx-auto md:max-w-none h-auto"
              src={FeatImage01}
              width={740}
              height={605}
              alt="Features 01"
            /> */}
            <iframe
              src="https://kepler.gl/#/demo?mapUrl=https://raw.githubusercontent.com/Khaki01/khaki01.github.io/main/kepler.gl1.json"
              name="myiFrame"
              className="w-full"
              //   width={800}
              height={800}
            ></iframe>
          </div>
          {/* <iframe src="" frameborder="0"></iframe> */}
        </div>
      </div>
    </section>
  );
}
