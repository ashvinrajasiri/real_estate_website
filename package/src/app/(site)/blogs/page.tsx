
import BlogCard from "@/app/components/shared/blog/blogCard";
import HeroSub from "@/app/components/shared/hero-sub";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Real Estate Blog | Market Insights & Home Buying Tips",
    description: "Stay informed with the latest real estate market trends, home buying tips, and property investment insights for the Greater Toronto Area.",
};

const Blog = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blogs", text: "Blog" },
    ];

    return (
        <>
            <HeroSub
                title="Real Estate Insights"
                description="Expert advice, market trends, and insider tips to help you navigate the GTA real estate market with confidence."
                breadcrumbLinks={breadcrumbLinks}
            />
            <section className="flex flex-wrap justify-center dark:bg-darkmode px-4">
                <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto ">
                    <div className="grid grid-cols-12 lg:gap-14 gap-6">
                        {posts.map((blog, i) => (
                            <div key={i} className="w-full col-span-12 lg:col-span-6">
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
