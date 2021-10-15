import react from "react";
import './login.css';


export default function Login (){
    function butao(){
        alert('*Usuário e/ou Senha estão inválidos.')
       var inserir01 = document.getElementById('nome').value;
        var inserir02 = document.getElementById('senha').value;

        if(inserir01.value === ''){
           alert('*Usuário e/ou Senha estão inválidos.')
        }
        else if(inserir02.value === ''){
            alert('*Usuário e/ou Senha estão inválidos.')
        }
        else if(inserir01 && inserir02){
            alert('Você será direcionado para nossa página principal.')
        }

    }

    return(
        <div>
            <form className='formulario' action="" >
             <input type="text" id='nome' placeholder='Nome do Usuário' maxLength='20' minLength='2'/>
             <br />
             <input type='password' id='senha' placeholder='Senha' minLength='3' maxLength='4'/>
             <br />
             <button onClick={() => butao()}>Entrar</button>  
             <p>Esqueceu a Senha? <a href='#'>Clique aqui</a></p> 
            </form>
            
        </div>
    );
}