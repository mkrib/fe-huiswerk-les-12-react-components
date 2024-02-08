import './App.css'
import Button from "./components/Button/Button.jsx";
import Product from "./components/Product/Product.jsx";
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
         <nav>
             <Button name="to the collection"/>
             <Button name="shop all bags"/>
             <Button name="pre-orders"
             isDisabled="disabled"/>
         </nav>
          <main>
             <Product
             label="Best seller"
             imgSrc={bag1}
             name="The handy bag"
             price="400"
             />
              <Product
                  label="Best seller"
                  imgSrc={bag2}
                  name="The stylish bag"
                  price="250"
              />
              <Product
                  label="New collection"
                  imgSrc={bag3}
                  name="The simple bag"
                  price="300"
              />
              <Product
                  label="New collection"
                  imgSrc={bag4}
                  name="The trendy bag"
                  price="150"
              />
          </main>
          <footer>
              <section>
                  <img src="" alt=""/>
              </section>
              <section>
                  <h2>Titel</h2>
                  <p>Tekst</p>
              </section>
          </footer>
      </>
  )
}

export default App
