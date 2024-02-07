import ConceptCard from "./components/ConceptCard";
import { Header } from "./components/Header";
import TabeButton from "./components/TabeButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((index) => {
              console.log(index);
              return (
                <ConceptCard
                  key={index}
                  img={index.image}
                  title={index.title}
                  description={index.description}
                />
              );
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabeButton>Components</TabeButton>
            <TabeButton>JSX</TabeButton>
            <TabeButton>props</TabeButton>
            <TabeButton>state</TabeButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
