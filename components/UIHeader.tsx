import Link from "next/link"

export const UIHeader = () => {
  return (
    <header className="border-b p-4">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/cats">Shome me the cats</Link>
      </nav>
    </header>
  )
}
