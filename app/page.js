import Boardgame from "@/components/Boardgame"

export default async function Home() {
  
  const data = await fetch(
    `https://api.boardgameatlas.com/api/search?name=scy&client_id=EsdgqvppMg`
  )
  const res = await data.json()
  // console.log(res.games[0])
  
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {res.games.map((game) => (
          <Boardgame
            key={game.id}
            id={game.id}
            title={game.name}
            poster_path={game.image_url}
            // description={game.description}
          />
        ))}
      </div>
    </main>
  )
}
