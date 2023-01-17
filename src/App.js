
import './App.css';
import SimpsonComponent from "./components/simpsons/SimpsonComponent";
import PersonComponent from "./components/person/PersonComponent";

function App() {
  return (
    <div className="App">

        {/*part 1 || Описати всю сім'ю сімпсонів (5 персонажів)*/}

      {/*<SimpsonComponent name={'Homer'} gender={'male'} img={'https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b7ab1515ee6a335510834.jpg'} />*/}
      {/*<SimpsonComponent name={'Marge'} gender={'female'} img={'https://w7.pngwing.com/pngs/540/811/png-transparent-marge-simpson-illustration-marge-simpson-homer-simpson-bart-simpson-lisa-simpson-maggie-simpson-simpsons-television-heroes-springfield.png'} />*/}
      {/*<SimpsonComponent name={'Bart'} gender={'male'} img={'https://i.pinimg.com/originals/7e/56/46/7e564626fd81ea7f0580d59d16609ec5.png'} />*/}
      {/*<SimpsonComponent name={'Liza'} gender={'female'} img={'https://media.entertainmentearth.com/assets/images/6d18e00403d94e6fab70ad36f9422214xl.jpg'} />*/}
      {/*<SimpsonComponent name={'Meggy'} gender={'female'} img={'https://i.discogs.com/OCEI91oQOkbvLbA5f1rUpLSsjO_GQ38oyNataTCbJ7g/rs:fit/g:sm/q:90/h:514/w:550/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTI2MzMx/MjktMTQyMzQxNDg4/NC02Nzc5LmpwZWc.jpeg'} />*/}

        {/*part 2 || Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі*/}
        {/*https://rickandmortyapi.com/*/}
        {/*https://rickandmortyapi.com/api/character*/}
        {/*Створити 6 персонажів*/}

      <div className="MainDiv">
        <PersonComponent id={10} name={'Alan Rails'} status={'Dead'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/10.jpeg'} />
        <PersonComponent id={59} name={'Brad Anderson'} status={'Dead'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/59.jpeg'} />
        <PersonComponent id={507} name={'Fascist Teddy Bear Rick'} status={'Alive'} species={'Animal'} gender={''} image={'https://rickandmortyapi.com/api/character/avatar/507.jpeg'} />
        <PersonComponent id={615} name={'Musical Fan'} status={'Alive'} species={'Alien'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/615.jpeg'} />
        <PersonComponent id={684} name={'Mr. Nimbus Secretary'} status={'Alive'} species={'Animal'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/684.jpeg'} />
        <PersonComponent id={687} name={'Scarecrow Rick'} status={'Dead'} species={'Robot'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/687.jpeg'} />
    </div>
      </div>
  );
}

export default App;
