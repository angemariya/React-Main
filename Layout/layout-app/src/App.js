import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main'
import { Services } from './components/Services';
import { EmployeesList } from './components/EmployeesList';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Services />
      <EmployeesList />
      <Footer />
    </>
  );
}

export default App;
