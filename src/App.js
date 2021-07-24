
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import reducers from "./reducers"

const store = createStore(reducers, {}, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <LandingPage />
    </Provider>
  );
}

export default App;
