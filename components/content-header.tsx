import Image from "next/image";
import Link from "next/link";

import { ModeToggle } from "./mode-toggle";
export const ContentHeader = () => (
  <header>
    <div className="flex items-center justify-between">
      <div className="flex">
        <Link href="/" passHref>
          <div className="flex flex-row items-center">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <div className="ml-3 text-xl font-semibold font-mono">
              グローバルSWEのススメ
            </div>
          </div>
        </Link>
      </div>
      <nav className="ml-auto text-sm font-medium space-x-6 mr-8">
        <Link href="/">Home</Link>
      </nav>
      <ModeToggle />
    </div>
  </header>
);
