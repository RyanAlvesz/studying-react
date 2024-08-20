import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

import birds from './json/db.json'

const categories = [
  'Big Birds',
  'Birds',
  'Little Birds'
]

function filterCategory(id) {
  return birds.filter(paint => paint.category === categories[id])
}

function App() {
  return (
    <>
      <Header/>
      <Banner image = '3'/>
      <Container>
        <Category category={'Birds'}>
          {
            filterCategory(0).map((paint) => {
            return <Card cover={paint.cover} title={paint.title} url={paint.url} key={paint.id} />
            })
          }
        </Category>
        <Category category={'Big Birds'}>
          {
            filterCategory(1).map((paint) => {
            return <Card cover={paint.cover} title={paint.title} url={paint.url} key={paint.id} />
            })
          }
        </Category>
      </Container>
      <Footer/>
    </>   
  );
}

export default App;
