
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "AhlemKhalili",
        bio: " Ahlem Khalili ingénieur en informatique industriel diplomée de l'Enet'Com depuis 2017 et maintenant une élève à GOMYCODE.",
        imgSrc: "https://thumbs.dreamstime.com/z/profil-de-fille-avec-des-fleurs-91156883.jpg",
        profession: "Ingénieur en Informatique Industriel",
        shows: true,

      }
    }

  };

  
  handleShowPerson = () => {
    
    this.setState({
      shows: !this.state.shows,
      
    });
    console.log(this.state.shows)
  };



  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margintop: 50 }}  >
        <button style={{  color: 'black', backgroundColor: '#ff6f6f', fontSize: '30px', padding: '30px 70px' }} 
        onClick={this.handleShowPerson}>{!this.state.shows ? 'Show' : 'Hide'}</button>
        {this.state.shows ?
        
          <div style={{  margin: 25, padding: 15 }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
              <h1>{this.state.Person.fullName}</h1>

              <img style={{ width: 200, height: 200, }} src={this.state.Person.imgSrc}></img>
            </div>
            <div style={{ margin: 25 }}>
              <h3>{this.state.Person.bio}</h3>
              <h2>{this.state.Person.profession}</h2>
            </div>

            
          </div>
          :<h1> Hi, you can press to the buttun please</h1>
          
        }

      </div>
    )
  }
  
}

export default App
