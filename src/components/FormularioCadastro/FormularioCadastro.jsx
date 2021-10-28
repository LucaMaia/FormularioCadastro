import React, {useState} from 'react';
import {Button,TextField,Switch,FormControlLabel} from "@material-ui/core";


function FormularioCadastro() {
const [nome,setNome] = useState("Ricardo");

return(
<form  
    onSubmit={(event)=>{
        event.preventDefault();
        console.log(nome)
        } }
 >

        <TextField 
        value={nome}
        onChange={(event)=> {
            setNome(event.target.value);
            if(nome.length >= 3){
                setNome (nome.substr(0,3));
            }
        
        }}
            id="nome"
            label="Nome" 
            variant="outlined"
            margin ="normal" 
            fullWidth
            />

        <TextField
            id="Sobrenome"
            label="Sobrenome"
            variant="outlined"
            margin ="normal" 
            fullWidth
            />
            
        <TextField 
            id="CPF" 
            label="CPF" 
            variant="outlined" 
            margin ="normal" 
            fullWidth
        />

    <FormControlLabel 
    label="Promoções"
    control={<Switch name="Promoções" defaultChecked="true" color="primary"/>}/>

    <FormControlLabel 
    label="Novidades"
    control={<Switch name="Novidades" defaultChecked="true" color="primary"/>}/>
        
        <Button type="submit" variant="contained" color="primary">
                Cadastrar
        </Button>
</form>
    );
}


export default FormularioCadastro;