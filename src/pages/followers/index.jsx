import { useState, useEffect } from 'react'
import { userAPI } from '../../service/user'
import { ProfileItem } from '../../components/layouts/profile-item'
import './style.scss'




export const Followers = () => {

  const [data, setData] = useState({})

  const useFetch = async () => {
    const res = await userAPI.getFollowers()
    console.log(res);
    setData(res);
  }

  useEffect(() => {
    useFetch()
  }, [])
  return (
    <div className='followers'>
  {
    data.length && data.map((user)=>{
      return <ProfileItem user_name={user.login}/>
    })
  }
    
     
    </div>
  )
}
