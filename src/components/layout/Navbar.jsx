import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


const Navbar = ({title}) => {
    return (
        <nav className='navbar mb-12 shahdow-lg bg-primary text-neutral-content'>
            <div className="container mx-auto">
                <div className="flex-none px-2 mx-2">
                    <FaGithub className='inline pr-2 text-3xl' />
                    <Link to='/' className='text-lg font-bold align-middle'>
                        {title}
                    </Link>
                </div>
                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <NavLink to='/' className='btn btn-ghost btn-sm rounded-btn nav-link'>Home</NavLink>
                        <NavLink to='/about' className='btn btn-ghost btn-sm rounded-btn nav-link'>About</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}


Navbar.defaultProps = {
    title: 'Github Finder'
}
Navbar.propTypes = {
    title: PropTypes.string
}

export default Navbar
