import PropTypes from 'prop-types'

TextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function TextInput({ name, label, value, setValue }) {

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="text"
                name={name}
                id={name}
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
            />
        </div>
    )

}