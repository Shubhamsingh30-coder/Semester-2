import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Chat from "./components/Chat"
import NotFound from "./components/NotFound"

function App(){
    return (
        <>
        <h1>WhatsApp Clone</h1>
        <Routes>
            {/*. All Routes Should be listed here */}
            <Route path ="/" element={<Home/>}> </Route>
            <Route path ="/login" element={<Login/>}> </Route>
            <Route path ="/chat/:chatId" element={<Chat/>}> </Route>
            {/*. Dynamic routes */}
            <Route path ="*" element={<NotFound/>}> </Route>
        {/*. All routes / Fallback */}

        </Routes>
        </>
    );
}
export default App