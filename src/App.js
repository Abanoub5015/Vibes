import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{user}] = useStateValue(); // to dispatch data to my web-app

  return (
    // BEM naming convention
    <div className="app">

      { !user ? <Login />
        : (
          <> {/*  wrap it wz a "fragment" ........ or we can use also "div" as a wraper */}
      
            < Header />

            < dev className="app__body">
              <Sidebar />  
              <Feed />  
              <Widgets />
            </dev>

          </>
        )
      }



    </div >
  );
}

export default App;
