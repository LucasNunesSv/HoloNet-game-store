import PropTypes from 'prop-types'

Game.propTypes = {
    title: PropTypes.string, 
    coverImg: PropTypes.string, 
    onRemove: PropTypes.func
}

export default function Game({ title, coverImg, onRemove }) {

    return (
        <div>
            <img src={coverImg} alt="" />
            <div>
                <h2>{title}</h2>
                <button onClick={onRemove}>Remover</button>
            </div>
        </div>
    )

}