import Link from "next/link"

export default function Home() {
  return (
    <>
      <main>
        <h1>Welcome to Next.js 13!</h1>
      </main>
      <footer className="absolute bottom-10 left-1/2">
        <Link href={"https://7879.co"}>Visit 7879</Link>
      </footer>
    </>
  )
}
