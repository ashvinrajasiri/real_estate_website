"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="relative pt-44 pb-24 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1">
          <div
            className="flex flex-col col-span-6 justify-center items-start"
            data-aos="fade-right"
          >
            <div className="mb-6">
              <h1 className="md:text-[50px] leading-[1.2] text-4xl ml-4 text-midnight_text dark:text-white font-bold">
                Find Your Dream Home in the Greater Toronto Area
              </h1>
            </div>
            <div className="ml-4 mb-8">
              <p className="text-xl md:text-2xl text-gray dark:text-gray max-w-xl">
                15+ years of experience helping families find their perfect home
              </p>
            </div>
            <div className="ml-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-lg md:text-xl bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
          <div className="lg:block hidden col-span-6 absolute xl:-right-60 right-0 bottom-0 -z-1">
            <Image
              src="/images/hero/hero-image.png"
              alt="heroimage"
              width={800}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
