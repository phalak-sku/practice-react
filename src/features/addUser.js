import { useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router";
import { addUser,editUser } from "./usersSlice";

export function AddUser () {
    const {pathname} = useLocation();
    const userId = parseInt(pathname.replace("/add-user/",""));
    const userDetails = useSelector((s)=>s.users.find(x=>x.id === userId));
    const [name,setName] = useState(userDetails ? userDetails.name : "");
    const [email,setEmail] = useState(userDetails ? userDetails.email : "");
    const [error,setError] = useState("");

    const handleName=(e) => setName(e.target.value);
    const handleEmail=(e)=>setEmail(e.target.value);
    const userCount =  useSelector(s=>s.users.length);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClick =() =>{
        if(name && email) {
            userDetails ? dispatch(editUser({
                id:userId,
                name,
                email
            })) :
           dispatch(addUser({
               id:userCount + 1,
               name,
               email
           })
           );
           setError(null); 
           navigate("/")
        } else {
            setError("Fill all fields.");
        }
        setEmail("");
        setName("");
    }
    return (
        <div className="container">
            <div className="row">
               { userDetails ?  <h1>
                    Edit User
                </h1> : <h1>Add User</h1>}
            </div>
            <div className = "row">
              <div className="three columns">
                <label for="nameInput">Name</label>
                <input
                className="u-full-width"
                type="text"
                id="nameInput"
                placeholder="Name"
                value={name}
                onChange={handleName}>
                </input>
                <label for="emailInput">Email</label>
                <input
                className="u-full-width"
                type="text"
                id="emailInput"
                placeholder="test@mail.com"
                value={email}
                onChange={handleEmail}>
                </input>
                <button className="button-primary" onClick={handleClick}>{userDetails ? 'Edit user' : 'Add User' }</button>
                </div>
                </div>
        </div>
    );
}