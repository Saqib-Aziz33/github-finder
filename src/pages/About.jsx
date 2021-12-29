// import Spinner from "../components/layout/Spinner"
import { Link } from "react-router-dom"

const About = () => {
    return (
        <article style={{
            maxWidth: '600px',
            margin: 'auto',
            textAlign: 'center'
        }} 
        className="animate__animated animate__backInLeft"
        >
            <h2 className="text-3xl my-2">About Github Finder</h2>
            <p>Created with React.js 🪵</p>
            <p className="my-2"><b>Random text:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta voluptas similique neque molestiae possimus nisi velit veritatis accusamus unde excepturi!</p>
            <p className="my-2">Created by <a target='_blank' title="Visit Portfolio" rel="noreferrer noopener" className="link text-primary" href="https://saqibaziz.netlify.app">Saqib</a>🧒</p>
            <Link className="btn btn-primary btn-sm" to='/'>Back to home</Link>
        </article>
    )
}

export default About
