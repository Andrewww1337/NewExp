class Pokemon{
    constructor(name,pic,health,hunger,shit,depression ){
    this.name = name;
    this.pic = pic;
    this.health = health;
    this.hunger = hunger;
    this.shit = shit;
    this.depression = depression;
    this.run()
    
}
run() {
    setInterval(() => {
      this.health -= 1;
      this.hunger -= 3;
      this.shit -= 5;
      this.depression -= 1;
      
      
    }, 1000)
  }

};


class Pikachu extends Pokemon{
    constructor (name,pic,health,hunger,shit,depression){;
    super (name,pic,health,hunger,shit,depression);
    this.name="Pikachu";
    this.pic= 'src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"';
    this.health = 110;
    this.hunger = 130;
    this.shit = 150;
    this.depression = 170;
    } 
    };

class Sloupock extends Pokemon{
    constructor (name,pic,health,hunger,shit,depression){;
    super (name,pic,health,hunger,shit,depression);
    this.name="Sloupock";
    this.pic='src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png"';
    this.health = 90;
    this.hunger = 70;
    this.shit = 110;
    this.depression = 110;
    } 
    };

class Sqirtle extends Pokemon{
    constructor (name,pic,health,hunger,shit,depression){;
    super (name,pic,health,hunger,shit,depression);
    this.name="Sqirtle";
    this.pic='src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png"';
    this.health = 910;
    this.hunger = 700;
    this.shit = 130;
    this.depression = 1110;
    } 
    };

const Pokemons = [Pikachu,Sloupock,Sqirtle,];

function createNewPo(){
const po = new Pokemons[Math.ceil(Math.random()*Pokemons.length)-1];
let card = document.createElement('div');
let Poke = document.createElement('p');
let hp = document.createElement('p');
let ava = document.createElement('div')
card.className = "card";
document.body.append(card);

card.appendChild(Poke);
let PokeName = `${po.name}`;
Poke.innerHTML = PokeName;

card.appendChild(ava);
let pokeAva = `<img class="foto" ${po.pic}>`;
ava.className = "foto";
ava.innerHTML=pokeAva;
console.log(pokeAva);

card.appendChild(hp);
let healthPo = `Health: ${po.health}`;
hp.innerHTML = healthPo;


let golod = document.createElement('p');
let silagoloda = `Hunger: ${po.hunger}`;
card.appendChild(golod);
golod.innerHTML = silagoloda;

let deadinside = document.createElement('p');
let umirat = `Dead inside: ${po.depression}`;
card.appendChild(deadinside);
deadinside.innerHTML = umirat;

let crat = document.createElement('p');
let kakcrat = `Shit: ${po.shit}`;
card.appendChild(crat);
crat.innerHTML = kakcrat;







console.log(po.health);
setInterval(() => {
    deadinside.innerHTML =` Dead inside: ${po.depression}`;
    crat.innerHTML =`Shit: ${po.shit}`;
    hp.innerHTML=`Health: ${po.health}`;
    golod.innerHTML=`Hunger : ${po.hunger}`;
    console.log(po.health);
  }, 1000)

};



