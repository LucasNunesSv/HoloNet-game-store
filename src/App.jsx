import { useState } from "react"

export default function App(){

  const [games, setGames] = useState([])
  const [title, setTitle] = useState('')
  const [coverImg, setCoverImg] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()

    addGame({title, coverImg})

    setTitle('')
    setCoverImg('')
  }

  const addGame = ({title, coverImg}) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = {id, title, coverImg}
    setGames(state => [...state, game])
  }

  const removeGame = (id) => {
    setGames(state => state.filter(game => game.id !== id ))
  }

  return(
    <div className="app">
      <h1>HoloNet Game Store</h1>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label htmlFor="title">Título</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div>
          <label htmlFor="coverImg">Imagem da Capa</label>
          <input 
            type="text" 
            name="coverImg" 
            id="coverImg" 
            value={coverImg}
            onChange={(ev) => setCoverImg(ev.target.value)}
          />
        </div>
        <button type="submit">Adicionar a Biblioteca</button>
      </form>
      <div className="games">
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.coverImg} alt="" />
            <div>
              <h2>{game.title}</h2>
              <button onClick={() => removeGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}