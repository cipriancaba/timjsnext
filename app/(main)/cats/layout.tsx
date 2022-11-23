import Image from "next/image"
import Link from "next/link"

const CatsPage = async ({ children }) => {
  const catsResult = await fetch("http://localhost:3000/api/cats")
  const cats = await catsResult.json()

  return (
    <div className="flex">
      <div className="flex flex-col gap-4">
        {cats.map((cat) => (
          <Link href={`/cats/${cat.id}`} key={cat.id}>
            <div key={cat.id} className="h-20 w-20 relative">
              <Image
                src={`https://cataas.com/cat/${cat.id}`}
                alt={"cat"}
                fill={true}
                className="object-cover"
                sizes="10vw"
              />
            </div>
          </Link>
        ))}
      </div>
      <div className="flex-1 flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  )
}

export default CatsPage
