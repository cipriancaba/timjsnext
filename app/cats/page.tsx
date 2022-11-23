import Image from "next/image"
import Link from "next/link"

const CatsPage = async () => {
  const catsResult = await fetch("http://localhost:3000/api/cats")
  const cats = await catsResult.json()

  return (
    <div className="flex flex-col gap-4">
      {cats.map((cat) => (
        <div key={cat.id}>
          <Link href={`/cats/${cat.id}`}>
            <Image
              src={`https://cataas.com/cat/${cat.id}`}
              alt={"cat"}
              width={50}
              height={50}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default CatsPage
