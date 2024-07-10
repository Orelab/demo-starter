import Header from './Header';
import Footer from './Footer';
import Blog from './Blog';



function App() {

  return (
    <div id="app">

      <Header>
        <nav>
            <a href="">menu1</a>
            <a href="">menu2</a>
            <a href="">menu3</a>
            <a href="">menu3</a>

        </nav>
      </Header>

      <Blog title="un premier titre" />

      <Blog title="un second titre" />

      <Footer/>

    </div>
  )



}




export default App;
