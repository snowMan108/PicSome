import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import PictureItem from "../components/PictureItem";

/* https://www.youtube.com/watch?v=iW39Merz0zE */
const url =
  "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
export async function getServerSideProps() {
  const res = await fetch(url);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  /* console.log("data", data); */

  return (
    <div>
      <Head>
        <title>PicSome App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      {/* BODY SECTION */}
      <div className="mt-3 mx-3 flex flex-wrap justify-center px-8">
        {data.map((item, i) => (
          <PictureItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
