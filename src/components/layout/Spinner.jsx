// asssets
import spinner from './assets/spinner3.gif'

const Spinner = () => {
    return (
        <img src={spinner} alt="Loading..." style={{
            display: 'block',
            margin: 'auto',
            height: '100px',
            width: 'auto',
            mixBlendMode: 'screen',
            filter: 'invert()'
        }} />
    )
}

export default Spinner