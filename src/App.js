import { Provider } from 'react-redux';
import './App.css';
import appstore from './utils/appstore';
import Body from './components/Body';

function App() {

  return (
    <div className="">
      <Provider store={appstore}>
        <Body></Body>
      </Provider>


    </div>
  );
}

export default App;
