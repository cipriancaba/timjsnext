import Link from "next/link"

export const UIHeader = () => {
  const date = new Date()
  return (
    <header className="border-b p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/cats">Show me the cats</Link>
        <Link href="/checkout">Buy a cat</Link>
        <div className="flex-1"></div>
        <span>{date.toUTCString()}</span>
      </nav>
    </header>
  )
}
