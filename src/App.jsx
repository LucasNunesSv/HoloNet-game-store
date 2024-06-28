import Game from "./components/Game"
import NewGameForm from "./components/NewGameForm"
import useGameCollections from "./hooks/useGameCollections"

export default function App() {

  const {games, addGame, removeGame} = useGameCollections()

  return (
    <div className="app">
      <h1>HoloNet Game Store</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.length > 0 
        ? games.map((game) => (
          <Game
            key={game.id}
            title={game.title}
            coverImg={game.coverImg}
            onRemove={() => removeGame(game.id)}
          />))
        : (<h2>Você ainda não possui jogos adicionados</h2>)}
      </div>
    </div>
  )
}