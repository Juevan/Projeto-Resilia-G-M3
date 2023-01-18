import style from './Home.css'
export default function Home(){
    return(
        <div className='ContainerMain'>
            <div className='ContainerPass'>
                <h1>Login</h1>
                <br />
                <h4>Usuario</h4>
                <input type="text" name="" id="us" />
                <h4>Senha</h4>
                <input type="password" name="" id="pass" />
                <div>
                    <input type="button" value="Login" id='btn'/>
                    <select name="" id="slt"></select>
                </div>
            </div>
        </div>
    )
}