import { initializeApp } from "firebase/app";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import Head from "next/head";
import { useEffect } from "react";
import { BlogEntry } from "../../components/BlogEntry";
import { Header } from "../../components/Header";
import { clientCredentials } from "../../firebase";

export interface Article {
  id: string;
  title: string;
  content: string;
  create_date: {
    seconds: number;
  }
}

interface BlogProps {
  articles: Article[];
}

export default function Blog({ articles }: BlogProps) {
  // state is loading

  useEffect(() => {
    // fetch initial
    // set is loading = false
  }, [])

  // if is loading return null or loading component

  return (
    <div className="container mx-auto">
      <Head>
        <title>Agustin's | Blog</title>
      </Head>
      <Header />
      <div className="mt-5">
        <h2 className="font-space font-bold text-5xl">Blog</h2>
        {articles.map((article) => (
          <BlogEntry key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  initializeApp(clientCredentials);

  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, "blog"));
  const articles = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...JSON.parse(JSON.stringify(doc.data()))
  }));

  return { props: { articles } };
}
