import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CardList from './cardList';
import Home from './Home';
import { createContext, useState } from 'react';
import Profile from './Profile';
export const globalContest = createContext();
function App(){
    const [globalCount, setGlobalCount] = useState(0);
    const [globalUserObject, setGlobalUserObject]=useState({});
    return(
        <globalContest.Provider value={{globalCount, setGlobalCount, globalUserObject, setGlobalUserObject}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<CardList/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </globalContest.Provider>
    );
}
export default App;