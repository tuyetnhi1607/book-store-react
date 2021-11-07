import logo from './logo.svg';
import './App.css';
import bookApi from './api/bookApi';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Category from './components/categories/Category';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Category />
    </div>
  );
}

export default App;
