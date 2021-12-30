import { useContext } from "react"
// components
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
// context
import GithubContext from "../../context/github/GithubContext"

const UsesResult = () => {
    const {Loading, users} = useContext(GithubContext)
    
    if(!Loading){
        return (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
    return <Spinner />
}

export default UsesResult