import Link from "next/link";

import { ModeToggle } from "./mode-toggle";

export const TopHeader = () => (
  <header>
    <div className="flex items-center justify-between">
      <nav className="ml-auto text-sm font-medium space-x-6 mr-8">
        <Link href="/about">このサイトについて</Link>
      </nav>
      <ModeToggle />
    </div>
    <section className="flex-col flex items-center md:justify-between mt-16 md:mt-8 mb-16 md:mb-12">
      <h1 className="text-2xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        グローバルSWEのススメ
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5">
        日本人ソフトウェアエンジニアがグローバルに起業する/アーリーステージスタートアップで働くための情報サイト
      </h4>
    </section>
  </header>
);
