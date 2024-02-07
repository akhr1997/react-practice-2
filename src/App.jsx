import { useState } from "react";
import ConceptCard from "./components/ConceptCard";
import { Header } from "./components/Header";
import TabeButton from "./components/TabeButton";
import { CORE_CONCEPTS } from "./data";

function App() {
  const [showTab, setShowTab] = useState("components");

  const showSelection = (e) => {
    setShowTab(e.target.innerHTML);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((index) => {
              return (
                <ConceptCard
                  key={index.title}
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
            <TabeButton onClick={showSelection}>Components</TabeButton>
            <TabeButton onClick={showSelection}>JSX</TabeButton>
            <TabeButton onClick={showSelection}>Props</TabeButton>
            <TabeButton onClick={showSelection}>State</TabeButton>
          </menu>
          {showTab}
        </section>
      </main>
    </div>
  );
}

export default App;
//lecture 51
