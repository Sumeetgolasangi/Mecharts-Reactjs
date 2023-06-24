import React , {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Auth = (props:any) => {
  const component = props.components;
  const navigate = useNavigate();
  useEffect(()=>{
    const token :any= sessionStorage.getItem("token")
    if(!token){
        navigate("/login")
    }else{
      navigate("/")
    }
  },[])
  return (
    <div> {component}</div>
  )
}
export default Auth;