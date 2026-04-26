import { hideSplash } from 'react-native-splash-view';
import Router from './navigation';

const App = () => {
  hideSplash();
  return <Router />;
};

export default App;
