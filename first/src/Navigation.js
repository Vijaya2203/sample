import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./Home";
function Navigation(){
    const {globalCount, setGlobalCount}=useContext();
    return (
        <div style ={{display:'flex', flexDirection:'row', justifyContent:'space-between',background:'#e5e5e5',padding:'20px'}}>
            <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <link to="/">Home </link>
            <link to="profile">Profile </link>
            </div>
            <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
                <link to="/cart">Cart(0)</link>
                <link to="/profile">Profile</link>
            </div>
        </div>
    );
}
export default Navigation;