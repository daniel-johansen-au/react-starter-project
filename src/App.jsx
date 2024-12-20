import Header from "./components/Header";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

  function handleClick(selectedButton) {
    console.log(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <div id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("Component")}>Component</TabButton>
            <TabButton onSelect={() => handleClick("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("State")}>State</TabButton>
          </menu>
        </div>
      </main>
    </div>
  );
}

export default App;
