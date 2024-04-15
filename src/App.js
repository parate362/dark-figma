import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { Branding } from './components/branding/Branding';
import Grid from './components/grid/Grid';
import SignUp from './components/signup/SignUp';
import { Faq } from './components/faq/Faq';
import Product from './components/product/Product';
import Footer from './components/footer/Footer'
import { Hero } from './components/hero/Hero';
import Nav from './components/navbar/Nav';
import Bar from './components/Bar/Bar';






function App() {
  return (
    <div className="App">
      
      
   
      <Bar/>
       <Nav/>
       <Hero/>
       <Branding/>
       <Grid/>
       <Product/>
       <Faq/>
       <SignUp/>
      <Footer/>


    
    </div>
  );
}

export default App;
