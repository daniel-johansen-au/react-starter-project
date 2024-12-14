import reactImg from "../assets/react-core-concepts.png"

function getRand(max) {
    return Math.floor(Math.random() * (max + 1))
}

const words = ["Fundamental", "Crucial", "Core"];

const randDescription = words[getRand(words.length -1)];
  
export default ({title, description}) => {
    return(
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>{randDescription} React concepts you will need for almost any app you are going to build!</p>
      </header>
    )
  }