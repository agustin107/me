import Link from "next/link";

interface BlogEntryProps {
  id: string;
  title: string;
  create_date: {
    seconds: number;
  }
  type?: number; // 1, 2, 3, 4
  type2?: [];
  type3?: Record<string, number>;
  bool?: boolean;
  type4?: unknown;
  type5?: any;
}

export function BlogEntry({ id, title, create_date, type3 }: BlogEntryProps) {
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