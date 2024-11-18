import { blogs } from "@/store/blogs";
import productsData from "@/store/productsData";

export default async function Sitemap() {
  const baseUrl = "https://panamax.co.in";
  const resp = await JSON.stringify(productsData);
  const products = await JSON.parse(resp);

  //blogs urls
  const blogsResp = await JSON.stringify(blogs);
  const blogsArr = await JSON.parse(blogsResp);
  const blogUrls =
    blogsArr?.map((blog) => {
      return {
        url: `${baseUrl}/blogs/${blog.path}`,
        lastModified: new Date(),
      };
    }) ?? [];

  //product urls
  const productUrls =
    products?.map((product) => {
      return {
        url: `${baseUrl}/product/${product.path}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
    },
    ...blogUrls,
    ...productUrls,
  ];
}
