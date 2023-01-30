import Link from "next/link"
import Image from "next/image"

export default function Boardgame({id, title, poster_path, description}) {

  return (

    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <Link href={`/${id}`}>
        <Image
          src={poster_path}
          width={800}
          height={800}
          alt={title}
          priority
        />
      </Link>
    </div>
  )
}
