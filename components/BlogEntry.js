import Link from "next/link";

export function BlogEntry({ id, title, create_date }) {
  return (
    <section className="flex justify-around mt-10">
      <Link href={`/blog/${id}`}>
        <div className="flex-[2]">
          <span className="font-space cursor-pointer font-medium border-b-2 border-white transition ease-in-out duration-500 hover:border-gray-900">
            {title}
          </span>
        </div>
      </Link>
      <div className="flex-1">
        <p className="font-space font-extralight">{new Date(create_date.seconds).toISOString()}</p>
      </div>
    </section>
  )
}