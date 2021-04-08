
import style from './login.module.css';

const LoginPage = () => {
  return (
    <div className={style.loginBox}>
      <label className={style.loginLabel}>Please, enter your name
      <input className={style.loginInput} type="text" />
      </label>
      <button type='button' disabled='true'>Start Game</button>
    </div>
  )
}

export default LoginPage