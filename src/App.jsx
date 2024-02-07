import ConceptCard from "./components/ConceptCard";
import { Header } from "./components/Header";
import componentsImage from "../src/assets/components.png";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            <ConceptCard
              img={componentsImage}
              title={"Components"}
              description={"The core UI Building model"}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
