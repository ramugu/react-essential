import "./App.css";
import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import Header from "./Components/Header.js";
import TapButton from "./Components/TapButton.js";
import CoreConcept from "./Components/CoreConcept.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContent = <p>Please Select any topic...</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className="App">
      <Header></Header>
      <main>
        <section id="core-concepts">
          <h3>Core Concepts</h3>
          <ul>
            {/* <CoreConcept
            title="Components"
            description="These are the core concepts"
            image={reactImg}
          /> 
           <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />

          <CoreConcept {...CORE_CONCEPTS[1]} />

          <CoreConcept {...CORE_CONCEPTS[2]} />

          <CoreConcept {...CORE_CONCEPTS[3]} /> */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h3>Examples</h3>
          <menu>
            <TapButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TapButton>
            <TapButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props
            </TapButton>
            <TapButton
              isSelected={selectedTopic === ""}
              onSelect={() => handleClick("state")}
            >
              State
            </TapButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
