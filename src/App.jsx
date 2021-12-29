import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// layout components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import Alert from "./components/layout/Alert"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import User from "./pages/User"
// css
import 'animate.css'
// context
import { GithubProvider } from "./context/github/GithubContext"
import { AlertProvider } from "./context/alert/AlertContext"
const App = () => {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col h-screen justify-between">
                        <Navbar />
                        
                        <main className="container pb-12 mx-auto px-3">
                            <Alert />
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/about' element={<About />} />
                                <Route path='/user/:login' element={<User />} />
                                <Route path='/*' element={<NotFound />} />
                            </Routes>
                        </main>

                        <Footer />
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App