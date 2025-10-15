"use client";
import Image from "next/image";
import Link from "next/link";
import { useContext } from 'react';
import { PropertyContext } from '@/context-api/PropertyContext';

const Footer = () => {
  const { updateFilter } = useContext(PropertyContext)!;
  return (
    <footer className="relative z-10 bg-midnight_text dark:bg-semidark">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-10 pb-5 px-0 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4">
          <div className="md:col-span-4 col-span-12 flex items-center px-4 sm:px-0">
            <Link href="/" className="mb-6 inline-block max-w-40">
              <Image
                src="/images/logo/logo-white.svg"
                alt="logo"
                width={156}
                height={38}
              />
            </Link>
          </div>
          <div className="md:col-span-8 col-span-12 grid grid-cols-12 gap-4 px-4 sm:px-0">
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white">
                Service Area
              </h4>
              <p className="mb-6 text-gray text-base">
                Greater Toronto Area, Ontario
              </p>
            </div>
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white">
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link href="/contact" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Contact Support
                  </Link>
                </li>
                <li>
                  <Link href="/properties/properties-list" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:col-span-4 col-span-12">
              <h4 className="mb-4 text-lg text-white dark:text-white">
                Popular Searches
              </h4>
              <ul>
                <li onClick={() => updateFilter('category', 'apartment')}>
                  <Link href="/properties/properties-list?category=apartment" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Apartment for Rent
                  </Link>
                </li>
                <li onClick={() => updateFilter('category', 'house')}>
                  <Link href="/properties/properties-list?category=house" className="mb-3 inline-block text-base text-gray hover:text-white">
                    House for Buy
                  </Link>
                </li>
                <li onClick={() => updateFilter('category', 'office')}>
                  <Link href="/properties/properties-list?category=office" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Offices for Buy
                  </Link>
                </li>
                <li onClick={() => updateFilter('category', 'shop')}>
                  <Link href="/properties/properties-list?category=shop" className="mb-3 inline-block text-base text-gray hover:text-white">
                    Shop for Rent
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border dark:border-dark_border py-8">
        <div className="container flex justify-center items-center mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex lg:flex-nowrap flex-wrap lg:flex-row lg:gap-11 gap-4 text-base sm:text-lg md:text-xl text-black text-opacity-50">
            <p className="text-white">
              Phone :
              <Link href="tel:4167042827" className="text-gray hover:text-white"> 416-704-2827</Link>
            </p>
            <p className="text-white">
              Email :
              <Link href="mailto:srajasiri@gmail.com" className="text-gray hover:text-white"> srajasiri@gmail.com</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;