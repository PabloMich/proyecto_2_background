import './App.css';

function App() {
  return (
    <body>
      <div className="App">
        <p class="titulo">Background Color:</p>
        <div class="boton">
          <button class="btn">Click Me</button>
        </div>
      </div>
    </body>
  );
}

const btn = document.querySelector('button');
const body = document.querySelector('body');
const p = document.querySelector('p')

const colores = [
  'blue',
  'yellow',
  'green',
  'red',
  'orange',
  'purple',
  'pink',
  'brown',
  'gray',
  'Highlight',
  'antiquewhite',
  'aqua',
  'blueviolet',
  'cadetblue',
  'chartreuse',
  'coral',
  'crimson',
  'darkkhaki',
  'darkorange',
  'deeppink',
  'khaki',
  'lawngreen',
  'lightblue',
  'lightcoral',
  'steelblue',
  'thistle',
  'wheat',
  'whitesmoke',
  'violet',
  'teal',];

btn.addEventListener('click', fondo);

function fondo() {
  var indice = parseInt(Math.random() * colores.length);
  var nameColor = colores[indice];
  body.style.backgroundColor = colores[indice];
  p.innerText = "Background Color: " + nameColor;
}

export default App;
