import Image from "next/image"

const CatPage = ({ params }) => {
  return (
    <div>
      <Image
        src={`https://cataas.com/cat/${params.id}`}
        alt={"cat"}
        width={500}
        height={500}
      />
    </div>
  )
}

export default CatPage
