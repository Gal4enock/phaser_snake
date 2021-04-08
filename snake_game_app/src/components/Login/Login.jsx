import { Link } from 'react-router-dom';
import { Component} from 'react';

import style from './login.module.css';

class LoginPage extends Component {

  state = {
  name: ''
}

  goToGame = (e) => {
    console.log("kgjdfjsndfggnb");
    localStorage.setItem('name', this.state.name)
    console.log(this.state);
    window.location.replace('/start')
      return false;
   
  }

  stayHere(e) {
    e.preventDefault()
  }
  
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  
  render() {
    return (
      <div className={style.loginBox}>
        <label className={style.loginLabel}>Please, enter your name
      <input name="name" value={this.state.name} onChange={this.handleChange} className={style.loginInput} type="text" />
        </label>
         {/* <Link className={this.state.name.length > 0 ? style.active : style.notActive} onClick={this.state.name.length > 0 ? this.goToGame : this.stayHere} to="/start" disabled='true' >
          Start Game
      </Link> */}
          <button className={this.state.name.length > 0 ? style.active : style.notActive} onClick={this.state.name.length > 0 ? this.goToGame : this.stayHere}  >
          Start Game
      </button>
      
      </div>
    )
  }
}

export default LoginPage