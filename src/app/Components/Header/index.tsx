import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black-100 shadow-xl">
      <div className="max-w-6xl m-auto flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-semibold">Logo</Link>
        <nav className="flex gap-6 color-black">
          <Link href="/">Root</Link>
          <Link href="/Home">Home</Link>
          <Link href="/Login">Login</Link>
          <Link href="/Signup">Signup</Link>
        </nav>
      </div>
    </header>
  )
}