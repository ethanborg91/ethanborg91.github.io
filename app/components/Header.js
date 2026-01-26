import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full py-4 px-6 bg-black/40 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-3xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-3xl font-semibold tracking-wide text-white hover:text-white transition-colors whitespace-nowrap">
          ETHAN BORG
        </Link>
        <nav className="flex gap-4 sm:gap-8">
          <Link href="/" className="text-white hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/#projects" className="text-white hover:text-white transition-colors">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
}
