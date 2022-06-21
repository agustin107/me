import { initializeApp } from "firebase/app";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import Head from "next/head";
import { Header } from "../../components/Header";
import { clientCredentials } from "../../firebase";
import { Article } from './index';
import { GetServerSideProps } from 'next';

interface BlogProps {
  article: Article;
}

export default function Blog({ article }: BlogProps) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Agustin's | {article.title}</title>
      </Head>
      <Header />
      <div className="mt-5">
        <h2 className="font-space font-bold text-5xl mb-5">{article.title}</h2>
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<BlogProps> = async ({ params }) => {
  initializeApp(clientCredentials);

  const db = getFirestore();
  const docSnapshot = await getDoc(doc(db, 'blog', params.slug as string));
  const article = { ...JSON.parse(JSON.stringify(docSnapshot.data())) };

  return { props: { article } };
}
