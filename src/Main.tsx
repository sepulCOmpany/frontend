import { Route, Routes } from 'react-router-dom';
import Kanban from './pages/Kanban';
import Login from './pages/Login';
import Register from './pages/Register';
const Main = () => {
    return (
        <Routes>
            <Route path='/kanban' element={<Kanban />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    );
}
export default Main;