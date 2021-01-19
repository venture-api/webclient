import { words as w } from '../../dictionary';
import './login.css';


export default function Login() {

    return (
        <div className="center">

            <form id="login">
                <h1>Login</h1>

                <label htmlFor={ w.username }>{ w.username }</label>
                <input id={ w.username } type="text"/>

                <label htmlFor={ w.password }>{ w.password }</label>
                <input id={ w.password } type="password"/>

                <button className="primary" type="submit">{ w.submit }</button>
            </form>

        </div>
    );
}
