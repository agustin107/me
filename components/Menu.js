import Link from "next/link";

export function Menu() {
  return (
    <ul className="flex">
      <Link href="/"><li className="mr-4 cursor-pointer border-b-2 border-white transition ease-in-out duration-500 hover:border-gray-900">Home</li></Link>
      <Link href="/blog"><li className="mr-4 cursor-pointer border-b-2 border-white transition ease-in-out duration-500 hover:border-gray-900">Blog</li></Link>
      <Link href="/pokemon"><li className="mr-4 cursor-pointer border-b-2 border-white transition ease-in-out duration-500 hover:border-gray-900">Pokemon</li></Link>
    </ul>
  )
}