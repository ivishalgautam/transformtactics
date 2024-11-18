import { Product } from "@/components/Product";
import productsData from "@/store/productsData";
import Image from "next/image";

export async function generateStaticParams() {
  const resp = JSON.stringify(productsData);
  const products = await JSON.parse(resp);

  return products?.map((product) => ({
    productId: product.path.toString(),
  }));
}

export async function generateMetadata({ params: { productId } }) {
  try {
    const data = JSON.stringify(
      productsData.filter((product) => product.path === productId)
    );
    const product = await JSON.parse(data);

    // console.log(product?.[0]?.productImg?.src);

    if (!product?.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: product?.[0]?.metaTitle,
      description: product?.[0]?.metaDescription,
      keywords: product?.[0]?.metaKeywords,
      alternates: {
        canonical: `https://panamax.co.in/product/${productId}`,
      },
      openGraph: {
        title: product?.[0]?.metaTitle,
        description: product?.[0]?.metaDescription,
        images: [
          {
            url: `https://panamax.co.in${product?.[0]?.productImg?.src}`,
            width: 500,
            height: 350,
            alt: product?.[0]?.metaTitle,
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

const ProductPage = ({ params: { productId } }) => {
  return <Product productId={productId} />;
};

export default ProductPage;
