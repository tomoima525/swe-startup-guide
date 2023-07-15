import Link from "next/link";

import { allPosts } from "@/.contentlayer/generated";
import { TopHeader } from "@/components/top-header";

export default function Home() {
  return (
    <main>
      <TopHeader />
      <section className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold tracking-tighter leading-tight">
          最近の更新
        </h2>
      </section>
      <div className="prose dark:prose-invert">
        {allPosts.map((post) => (
          <article key={post._id}>
            <Link href={post.slug}>
              <h3>{post.title}</h3>
            </Link>
            {post.description && <p>{post.description}</p>}
          </article>
        ))}
      </div>
    </main>
  );
}
