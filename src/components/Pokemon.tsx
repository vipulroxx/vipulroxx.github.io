import React from "react";
import pokeIcon from './pokeicon.png';
import pikachuIcon from './pikachu.png';
import mewIcon from './mew.png';
import pokemonIcon from './images.jpeg'
import Typography from "@material-ui/core/Typography";

const Game = () => {
	return (
		<div style={{backgroundColor: "white"}}>
      <h3 style={{ position: "absolute", right: 50, top: 65, width: 100, height: 100 }}> 💞 Building</h3>
			<div>
				<img src={mewIcon} alt="Mew Icon" style={{ position: "absolute", right: 100, top: 70, width: 200, height: 180 }} />
			</div>
			<div style={{marginTop: '10', backgroundColor: '#F7F7F7', padding: '20px', borderRadius: '8px' }}>
				<h1 style={{ color: 'red', padding: '2px', borderRadius: '8px' }}>
					Pokémon <img src={pokeIcon} alt="Poké Icon" style={{ width: 40, height: 40 }} /> Edutainment
				</h1>
				<p>
				This application fuses the enchanting world of Pokémon with innovative educational content. This app is designed to revolutionize learning by offering a unique and immersive experience that captivates users of all ages. By seamlessly integrating Pokémon lore with educational modules, trivia challenges, real-world exploration, and personalized learning paths, the app aims to make learning enjoyable, personalized, and globally accessible.
				</p>
			<div style={{marginLeft: 320}}>
				<img src={pikachuIcon} alt="Pickachu Icon" style={{marginLeft: 230, width: 105, height: 105}} />
			</div>
			</div>
			<div style={{marginLeft: 350, marginTop: 25}}>
				<img src={pokemonIcon} alt="Pokemon Icon" style={{width: 500, height: 155}} /> <br/>
			</div>
		</div>
	)
};

export default Game;

