import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Ezékiel Goméz',
        bio: 'Je sais pas quoi écrire.',
        imgSrc: 'https://i.pinimg.com/564x/3f/87/44/3f8744a0639e336983a389a41d59a7b2.jpg',
        profession: 'Developer',
      },
      show: false,
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        elapsedTime: prevState.elapsedTime + 1,
      }));
    }, 1000); // Met à jour l'intervalle chaque seconde
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { person, show, elapsedTime } = this.state;

    return (
      <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
        <h1 style={{color: 'black'}}>Clique sur le bouton pour voir le bg</h1>
        <button style={{color: 'whitesmoke',backgroundColor: 'black', hover: 'true', cursor: 'pointer', padding: '10px', borderRadius: '10px', boxShadow: '3px 5px 5px gold', fontSize: '18px', fontFamily: 'cursive' }} onClick={this.toggleShow}>Voir le BG</button>
        
        {show && (
          <div style={{ backgroundColor: 'black', boxShadow: '10px 10px 25px gold', color: 'white', padding: '20px', width: '200px', borderRadius: '20px', position:'relative', top: '40px' }}>
            <h2 style={{fontFamily: 'serif',}}>Name: {person.fullName}</h2>
            <p style={{fontFamily: 'cursive'}}>Bio: {person.bio}</p>
            <img src={person.imgSrc} style={{ width: '150px', height: '150px', borderRadius: '50%' }} alt="Person Avatar" />
            <p style={{fontFamily: 'cursive'}}>Profession: {person.profession}</p>
          </div>
        )}

        <p style={{position:'relative', top: '50px', color: 'black', fontFamily: 'cursive'}}>Elapsed Time (tkt, c'est normal que tu sois rester si longtemps): {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;