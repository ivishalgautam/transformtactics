import { AiFillHome } from "react-icons/ai";
import { VscChevronRight } from "react-icons/vsc";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { exhibitionData } from "@/store/exhibitionData";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  const resp = await JSON.stringify(exhibitionData);
  const exhibitionArr = await JSON.parse(resp);

  return exhibitionArr?.map((data) => ({
    slug: data.slug.toString(),
  }));
}

export async function generateMetadata({ params: { slug } }) {
  try {
    const data = await JSON.stringify(
      exhibitionData.filter((data) => data.slug === slug)
    );
    const blog = await JSON.parse(data);

    if (!blog.length) {
      return {
        title: "Not Found!",
        description: "The page you you looking for does not exist!",
      };
    }
    return {
      title: blog[0]?.address,
      description: blog[0]?.address,
    };
  } catch (error) {
    console.log(error);
    return {
      title: "Not Found!",
      description: "The page you you looking for does not exist!",
    };
  }
}

const Page = ({ params: { slug } }) => {
  const { images, address } = exhibitionData.filter(
    (data) => data.slug === slug
  )?.[0];

  return (
    <>
      <Head>
        <title>Exhibitions</title>
      </Head>
      {/* breadcrumb */}
      <div className="breadcommon">
        <h2 className="text-[24px] font-bold text-primary relative z-10 capitalize ">
          Exhibitions
        </h2>
        <ul className="breadLinks flex-box-start text-white text-xs md:text-sm relative z-10 gap-1">
          <li>
            <AiFillHome className="inline-block" /> <Link href="/">Home</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <Link href="/exhibitions">Exhibitions</Link>
          </li>
          <VscChevronRight className="inline-block" />
          <li>
            <Link href="#">{address}</Link>
          </li>
        </ul>
      </div>
      <section className="bg-white px-4 md:px-16 py-10">
        <h2 className="font-bold text-4xl text-center tracking-wide mb-10">
          {address}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12 py-4 px-2 md:px-8">
          {images?.map((image, key) => (
            <figure
              key={key}
              className="max-h-[230px] overflow-hidden  rounded-xl"
            >
              <Image
                src={image}
                alt={address}
                className="w-full h-full object-cover object-center transition-all"
              />
            </figure>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
