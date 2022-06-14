import { initializeApp } from "firebase/app";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { Header } from "../../components/Header";
import { clientCredentials } from "../../firebase";

export default function Blog({ article }) {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="mt-5">
        <h2 className="font-space font-bold text-5xl mb-5">{article.title}</h2>
        <p>{article.content}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, req, res }) {
  initializeApp(clientCredentials);

  const db = getFirestore();
  const docSnapshot = await getDoc(doc(db, 'blog', params.slug));
  const article = { ...JSON.parse(JSON.stringify(docSnapshot.data())) };

  return { props: { article } };
}
