import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../features/usersSlice";

export function UserList() {
    const users = useSelector(s=>s.users);
    const test = useSelector(s=>s);
    const dispatch = useDispatch();
    console.log("test",test);
    return (
        <table>
        <tbody>
           { 
           users.map(x=><tr key={x.id}>
               <td style={{border : '1px solid red'}}>{x.id}</td>
               <td style={{border : '1px solid red'}}>{x.name}</td>
               <td style={{border : '1px solid red'}}>{x.email}</td>
               <td>
                   <button onClick={()=>dispatch(deleteUser({
            id:x.id
        }))}>Delete</button>
                   <Link to={`/add-user/${x.id}`}>
                   <button>Edit</button>
                   </Link>
               </td>
               </tr>
           )}
        </tbody>
        </table>
    );
}