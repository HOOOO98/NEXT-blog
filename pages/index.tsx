import Head from "next/head";
import homeStyles from "@/styles/Home.module.css";
import { GetStaticProps } from "next";
import { getSortedPostedData } from "@/lib/post";
import Link from "next/link";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Sung Hoo</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Sung Hoo Introduction]</p>
        <p>(This is a Website)</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLgcle}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({ id, title, date }) => (
            <li className={homeStyles.listßItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={homeStyles.lightText}>{date}</small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostedData();
  return {
    props: {
      allPostsData,
    },
  };
};
