import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties/properties-list" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData
  });
};

