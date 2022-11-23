import Image from "next/image"

const CatsPage = async () => {
  const catsResult = await fetch("http://localhost:3000/api/cats")
  const cats = await catsResult.json()

  return (
    <div className="flex flex-col gap-4">
      {cats.map((cat) => (
        <div key={cat.id}>
          <Image
            src={`https://cataas.com/cat/${cat.id}`}
            alt={"cat"}
            width={200}
            height={200}
          />
        </div>
      ))}
    </div>
  )
}

export default CatsPage
