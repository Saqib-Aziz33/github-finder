import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { Navigate } from "react-router-dom";

//creating context
const GithubContext = createContext()

//setting env files
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
    // states
    // const [users, setUsers] = useState([])
    // const [Loading, setLoading] = useState(true)
    // reducres
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
    const [state, dispatch] = useReducer(githubReducer, initialState)

    //fetch users request testing
    // const fetchUsers = async() => {
    //     setLoading()
    //     const responce = await fetch(`${GITHUB_URL}/users`, {
    //         headers: {
    //             Authorization: `token ${GITHUB_TOKEN}`
    //         }
    //     })
    //     const data = await responce.json()
    //     // setUsers(data)
    //     // setLoading(false)
    //     dispatch({
    //         type: 'GET_USERS',
    //         payload: data
    //     })
    // }
    
    // search users req
    const searchUsers = async (text) => {
        setLoading()

        const params = new URLSearchParams({
            q: text
        })

        const responce = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
                }
            }
        )
        const {items} = await responce.json()

        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    }

    // get user repo
    async function getRepos(login){
        setLoading()
        const responce = await fetch(`${GITHUB_URL}/users/${login}/repos`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
                }
            }
        )
        const data = await responce.json()
        // console.log(data)
        dispatch({
            type: 'GET_REPOS',
            payload: data
        })
    }

    // search a single user req
    const getUser = async (login) => {
        setLoading()
        const responce = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
                }
            }
        )
        
        if(responce.status == 404){
            //idk how to redirect
            console.log('idk why it is not redirecting')
            return <Navigate to='/about'></Navigate>
            // return <Navigate replace to='/about' />
        }

        const data = await responce.json()

        dispatch({
            type: 'GET_USER',
            payload: data
        })
    }

    // clear search users result
    function clearSearch(){
        dispatch({
            type: 'CLEAR_SEARCH'
        })
    }

    function setLoading(){
        // console.log('loading...')
        dispatch({
            type: 'SET_LOADING'
        })
    }

    return <GithubContext.Provider value={{
        users: state.users,
        Loading: state.loading,
        user: state.user,
        repos: state.repos,
        // fetchUsers
        searchUsers,
        clearSearch,
        getUser,
        getRepos
    }}>
        {children}
    </GithubContext.Provider>

}

export default GithubContext