import { NextResponse } from "next/server";

const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

const features = [
    {
        id: 1,
        imgSrc: "/images/features/rating.svg",
        title: "15+ Years of Experience",
        description: "Proven track record helping families find their perfect home in the GTA with deep market knowledge and expertise"
    },
    {
        id: 2,
        imgSrc: "/images/features/Give-Women's-Rights.svg",
        title: "Local Market Expert",
        description: "Intimate knowledge of Toronto neighborhoods, pricing trends, and hidden gems that help you make informed decisions"
    },
    {
        id: 3,
        imgSrc: "/images/features/live-chat.svg",
        title: "Personalized Service",
        description: "Every client receives dedicated attention and a customized strategy tailored to their unique goals and budget"
    }
];

const searchOptions = {
    keywords: [
        { value: '', label: 'Keyword', placeholder: 'Keyword' },
        // Add more keyword options as needed
    ],
    locations: [
        { value: '', label: 'Location' }, // Placeholder option
        { value: 'California', label: 'California' },
        { value: 'Texas', label: 'Texas' },
        { value: 'New York', label: 'New York' },
        { value: 'Florida', label: 'Florida' },
        { value: 'Illinois', label: 'Illinois' },
    ],
    category : [
        { value:'', label: 'Category' },
        { value:'apartment', label: 'Apartment' },
        { value:'villa', label: 'Villa' },
        { value:'office', label: 'Office' },
        { value:'shop', label: 'Shop' },
        { value:'house', label: 'House' },
        { value:'warehouse', label: 'Warehouse' },
    ],
    beds: [
        { value: '', label: 'Beds' },
        { value: '1', label: '1 Bed' },
        { value: '2', label: '2 Beds' },
        { value: '3', label: '3 Beds' },
        { value: '4', label: '4 Beds' },
        { value: '5', label: '5 Beds' },
        // Add more bed options as needed
    ],
    garages: [
        { value: '', label: 'Garages' },
        { value: '1', label: '1 Garage' },
        { value: '2', label: '2 Garages' },
        // Add more garage options as needed
    ],
    // Define other options similarly
};

const data = [
    {
        src: "https://svgshare.com/i/187L.svg",
        src1: "https://svgshare.com/i/183P.svg",
        alt: "Image 1",
        name: "Apartment",
        count: 35,
    },
    {
        src: "https://svgshare.com/i/188i.svg",
        src1: "https://svgshare.com/i/185B.svg",
        alt: "Image 2",
        name: "Villa",
        count: 15,
    },
    {
        src: "https://svgshare.com/i/186r.svg",
        src1: "https://svgshare.com/i/185n.svg",
        alt: "Image 3",
        name: "Office",
        count: 26,
    },
    {
        src: "https://svgshare.com/i/187Z.svg",
        src1: "https://svgshare.com/i/184b.svg",
        alt: "Image 4",
        name: "Shop",
        count: 43,
    },
    {
        src: "https://svgshare.com/i/1881.svg",
        src1: "https://svgshare.com/i/183k.svg",
        alt: "Image 5",
        name: "House",
        count: 95,
    },
    {
        src: "https://svgshare.com/i/188C.svg",
        src1: "https://svgshare.com/i/184d.svg",
        alt: "Image 6",
        name: "Warehouse",
        count: 18,
    },
];

export const GET = async () => {
  return NextResponse.json({
    menuItems,
    features,
    searchOptions,
    data
  });
};