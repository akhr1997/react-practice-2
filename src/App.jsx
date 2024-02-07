import ConceptCard from "./components/ConceptCard";
import { Header } from "./components/Header";
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
      </main>
    </div>
  );
}

export default App;
