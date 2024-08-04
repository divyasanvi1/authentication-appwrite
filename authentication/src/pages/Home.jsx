import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { account } from '../library/appwrite';
const Home =() =>{
    const [user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const[logoutLoading,setLogoutLoading]=useState(false);
    const[logoutError,setLogoutError]=useState(null);
    
    const navigate=useNavigate();
    console.log('account.get:', account.get);

    //getcurentloggedinuser
    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await account.get();
            setUser(res);
          } catch (e) {
            console.log(e);
          } finally {
            setLoading(false);
          }
        };
      
        fetchUser();
      }, []);

      //logout
      const handleLogout=()=>{
        setLogoutLoading(true);
        setLogoutError(null);
        account.deleteSession('current')
        .then((res)=>{
          console.log(res);
          setUser(null);
        })
        .catch((err)=>{
            setLogoutError(err.message);
        })
        .finally(()=>{
            setLogoutLoading(false);
        })
      }
    return (
        <div className="background">
            {loading?(
               <h5>Please Wait....</h5>
            ):(
               <> {user?
                (<div>
                    <div className="user-circle"></div>
                    <h5>{user.email}</h5>
                    {logoutError && <div className="error-msg">{logoutError}</div>}
                    <button type="button" className="logout-btn" onClick={handleLogout}>
                       {logoutLoading? "...": "LOGOUT"}
                        </button>
                </div>):
                (
                   <>
                    <h1>welcome to appwrite auth tutorial with react </h1>
                    <h5>learn complete user auth with react</h5>
                    <div className="navigation-btns">
                     
                      <button type="button" onClick={()=> navigate("/signup")}>Register</button>
                      <button type="button" onClick={()=> navigate("/login")}>Login</button>
                    </div>
                   </> 
                )}
                </>
            )}
       
        </div>
    )
}

export default Home