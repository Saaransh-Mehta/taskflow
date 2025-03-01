import React , {useContext, useEffect, useState}from 'react'
import { UserContext } from '../context/user.context'
import { useNavigate } from 'react-router-dom'


const UserAuth = ({children}) => {
    const [loading,setLoading] = useState(true)
    const navigate = useNavigate()
    const {user} = useContext(UserContext)
    const token = localStorage.getItem('token')
 
    
    

    useEffect(()=>{
        if(user){
            setLoading(false)
        }
        
        if(!user){
        navigate('/login')
        }

        if(!token){
            navigate('/login')
        }
    },[])

    if(loading){
        return(
            <div>
                Loading...
            </div>
        )
    }
    
  return (
    <>
    {children}
    </>
  )
}

export default UserAuth