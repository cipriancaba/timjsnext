import Link from "next/link"

export const UIHeader = () => {
  return (
    <header className="border-b p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/cats">Show me the cats</Link>
        <Link href="/checkout">Buy a cat</Link>
      </nav>
    </header>
  )
}
