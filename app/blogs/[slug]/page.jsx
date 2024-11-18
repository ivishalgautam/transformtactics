import Blog from "@/components/Blog";
import { blogs } from "@/store/blogs";

export async function generateStaticParams() {
  const resp = await JSON.stringify(blogs);
  const blogsArr = await JSON.parse(resp);

  return blogsArr?.map((blog) => ({
    slug: blog.path.toString(),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const data = await JSON.stringify(
      blogs.filter((blog) => blog.path === slug)
    );
    const blog = await JSON.parse(data);

    if (!blog.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: blog[0]?.title,
      description: blog[0]?.desc,
      alternates: {
        canonical: `https://panamax.co.in/blogs/${blog[0]?.path}`,
      },
      openGraph: {
        title: blog?.[0]?.title,
        description: blog?.[0]?.desc,
        images: [
          {
            url: `https://panamax.co.in${blog?.[0]?.image?.src}`,
            width: 500,
            height: 350,
            alt: blog?.[0]?.title,
          },
        ],
        type: "website",
      },
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found!",
      description: "The page you you looking for does not exist!",
    };
  }
}

export default async function BlogPage({ params: { slug } }) {
  return <Blog slug={slug} />;
}
