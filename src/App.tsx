import { Link } from 'react-router-dom';
import Main from './Main';
import './styles/index.css';

function App() {
  return (
    <>
      <div>
        <ul className='MenuList'>
          <li><Link to='/kanban'>Kanban</Link></li>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  )
}

export default App;
