import css from './App.module.css';
import Sidebar from './components/Sidebar';
//import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm';
import Content from './components/Content';
import ContentUsingHooks from './components/ContentUsingHooks';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple/> */}
      <NavBarForm/>
      <Sidebar/>
      <ContentUsingHooks/>
    </div>
  );
}

export default App;