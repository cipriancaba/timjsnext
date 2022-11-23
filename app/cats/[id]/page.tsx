import Image from "next/image"

const CatPage = ({ params }) => {
  return (
    <div className="h-[800px] w-[800px] relative">
      <Image
        src={`https://cataas.com/cat/${params.id}`}
        alt={"cat"}
        fill={true}
        className="object-cover"
        sizes="50vw"
      />
    </div>
  )
}

export const generateStaticParams = async () => {
  const catsResult = await fetch("http://localhost:3000/api/cats")
  const cats = await catsResult.json()

  return cats.map((c) => ({ id: c.id }))
}

export default CatPage

// true (default): Dynamic segments not included in generateStaticParams are generated on demand.
// false: Dynamic segments not included in generateStaticParams will return a 404.
export const dynamicParams = false // true | false,
export const revalidate = 300 // revalidate this page every 60 seconds
