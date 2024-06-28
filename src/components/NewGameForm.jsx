import { useState } from "react"
import PropTypes from 'prop-types'
import TextInput from "./TextInput"

NewGameForm.PropTypes = {
    addGame: PropTypes.func
}

export default function NewGameForm({addGame}) {

    const [title, setTitle] = useState('')
    const [coverImg, setCoverImg] = useState('')

    const handleSubmit = (ev) => {
        ev.preventDefault()
        addGame({ title, coverImg })
        setTitle('')
        setCoverImg('')
    }

    return (
        <form onSubmit={handleSubmit} action="">
            <TextInput 
                name='title'
                label='Título'
                value={title}
                setValue={setTitle}
            />
            <TextInput 
                name='coverImg'
                label='Imagem da Capa'
                value={coverImg}
                setValue={setCoverImg}
            />
            <button type="submit">Adicionar a Biblioteca</button>
        </form>
    )

}