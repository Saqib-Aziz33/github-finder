import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"

const NotFound = () => {
    return (
        <div className="animate__animated animate__backInLeft">
        <div classNameName="hero min-h-screen bg-base-200">
          <div className="text-center hero-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Oops!!!
              </h1>
              <p className="mb-5">
                404 --Requested page not found
              </p>
              <Link to='/' className="btn btn-primary btn-link"><FaHome className="mx-2" /> Back to Home</Link>

            </div>
          </div>
        </div>
        </div>
    )
}

export default NotFound
