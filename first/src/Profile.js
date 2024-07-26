import { globalContest } from "./App";
import { useContext } from "react";
function Profile(){
    const {globalUserObject, setGlobalUserObject}=useContext(globalContest);
    return (
        <div>
            
        </div>
    )
}
export default Profile;