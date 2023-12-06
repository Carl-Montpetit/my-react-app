import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <Card
        name="GrumpyCoder"
        description="I am software developper and love to learn. Be careful, I can be grumpy."
      />
      <Card
        name="Michelle Pinar" 
        description="GrumpyCoder's wife. Determined to create the Grumpy's dream doudou."
      />
      <Card
        name="Minou Montpetit"
        description="GrumpyCoder's & Michelle's son. Passionnate about croquettes and cozy spots."
      />
      <Footer />
    </>
  );
}

export default App;
