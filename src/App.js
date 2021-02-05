import 'astoria-tech-design';
import './App.css';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import WaitTimes from './components/WaitTimes';

function App() {
  return (
    <div>
      <Header />
      <WaitTimes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
