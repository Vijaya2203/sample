import { useState } from "react";
import Register from "./Register_form";
import Login from "./login_form";
function Tabs(){
    const [isLogin, setIsLogin] = useState(true);
    const showLogin = ()=>{ setIsLogin(true)}
    const showRegister=()=>{ setIsLogin(false)}
    return(
        <div>
            <button onClick={showLogin}>LOGIN</button>
            <button onClick={showRegister}>REGISTER</button>
        {isLogin ?
            <Login />
            :
            <Register/>
        }
        </div>
    );
}
export default Tabs;