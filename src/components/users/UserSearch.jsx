import { useState, useContext } from "react/cjs/react.development"
// context
import GithubContext from "../../context/github/GithubContext"
import AlertContext from "../../context/alert/AlertContext"

const UserSearch = () => {
    const [text, setText] = useState('')

    // context
    const {users, searchUsers, clearSearch} = useContext(GithubContext)
    const {setAlert} = useContext(AlertContext)

    function handleTextChange(e){
        setText(e.currentTarget.value)
        // console.log(e.currentTarget.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(text.length === 0){
            return setAlert('Textfield is empty', 'error')
        }
        searchUsers(text)
        setText('')
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                placeholder="Search user..." 
                                value={text}
                                onChange={handleTextChange}
                            />
                            <button type="submit" className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">Search</button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div>
                    <button onClick={clearSearch} className="btn btn-ghost btn-lg">Clear</button>
                </div>
            )}
        </div>
    )
}

export default UserSearch
