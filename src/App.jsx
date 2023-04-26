import banner from "./assets/banner.png";
import Card from "./components/Card";

function App() {
  return (
    <div class="container m-auto">
      <header>
        <h1>Merch</h1>
      </header>

      <img src={banner} alt="site banner" />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
