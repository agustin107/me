import Link from "next/link";
import { Test } from "../components/Test";

export default function Home() {
  return (
    <div>
      <h1 className="home">Home en Next</h1>
      <ul style={{
        height: "1200px"
      }}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="#test">Ir a test</Link></li>
      </ul>
      <Test color="blue" />
    </div>
  )
}

