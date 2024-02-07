import { useState } from "react";
import ConceptCard from "./components/ConceptCard";
import { Header } from "./components/Header";
import TabeButton from "./components/TabeButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

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
            <TabeButton onClick={showSelection}>components</TabeButton>
            <TabeButton onClick={showSelection}>jsx</TabeButton>
            <TabeButton onClick={showSelection}>props</TabeButton>
            <TabeButton onClick={showSelection}>state</TabeButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[showTab].title}</h3>
            <p>{EXAMPLES[showTab].description}</p>
            <code>{EXAMPLES[showTab].code}</code>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
//lecture 51
