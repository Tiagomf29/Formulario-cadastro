var jsonDados = {};
var alternaCorTabela = 0;


function insereDados(){
    
    let dados = document.querySelectorAll("#vlrForm>input[name]");
    var valid = "";
    let erro = false;
    dados.forEach(vlr =>{

        if(!erro ){

            if(vlr.name=="nome"){
                valid =  vlr.value;
                if (!/^\w+ /.test(vlr.value.trim())){
                    alert("Nome/sobrenome do cliente incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["nome"] = vlr.value;
                
            }else
            if(vlr.name=="dataNascimento"){
                if(!/^\d{2}\/\d{2}\/\d{4}$/.test(vlr.value)){
                    alert("Data incorreta. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }

                let data = vlr.value.substr(6,4)+'-'+vlr.value.substr(3,2)+'-'+vlr.value.substr(0,2);                                
                jsonDados["nascimento"] = new Date(data).toLocaleDateString('pt-BR');
                
            }else
            if(vlr.name=="NomeMae"){
                if (!/^\w+ /.test(vlr.value)){
                    alert("Nome/sobrenome da mãe do cliente incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["mae"] = vlr.value;
            }else
            if(vlr.name=="NomePai"){
                if (!/^\w+ /.test(vlr.value) && vlr.value.trim()!=""){
                    alert("Nome/sobrenome da pai do cliente incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["pai"] = vlr.value;
            }else
            if(vlr.name=="rg"){
                if (!/\d{8}/.test(vlr.value) && vlr.value.trim()!=""){
                    alert("Rg do cliente incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["rg"] = vlr.value;
            }else
            if(vlr.name=="cpf"){
                if (!/\d{11}/.test(vlr.value)){
                    alert("Cpf do cliente incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["cpf"] = vlr.value;
            }else
            if(vlr.name=="email"){
                if (!/\S+@\S+\.\S+/.test(vlr.value)){
                    alert("Email do cliente não informado ou incorreto. Verifique!"); 
                    vlr.focus();
                    erro = true;                                         
                }
                jsonDados["email"] = vlr.value;
            } 
         
        }
    });

    if(!erro){
        insereTabela(jsonDados);
    }
 
}

function insereTabela(vlr){

    let valor = document.createElement("tr");

    valor.innerHTML = `
    
        <td>${vlr.nome}</td>
        <td>${vlr.nascimento}</td>
        <td>${vlr.mae}</td>
        <td>${vlr.pai}</td>
        <td>${vlr.rg}</td>
        <td>${vlr.cpf}</td>
        <td>${vlr.email}</td>          
    `
    if (alternaCorTabela % 2 == 0){
        valor.style.backgroundColor = "#ADD8E6";
    }else{
        valor.style.backgroundColor = "#DCDCDC";
    }

    alternaCorTabela+=1;

    document.querySelector("tbody").appendChild(valor);

}
