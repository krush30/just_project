import { Provider } from 'react-redux';
import './App.css';
import Signup from './components/Signup';
import appstore from './utils/appstore';

function App() {
  return (
    <div className="">
      <Provider store={appstore}>
        <Signup />
      </Provider>


    </div>
  );
}

export default App;
