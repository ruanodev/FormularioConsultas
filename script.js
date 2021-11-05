
/*Função validar formulário*/


function valida () {

      var data_atendimento = document.getElementById("data_atendimento");
      var nome_paciente = document.getElementById("nome_paciente");
      var convenio = document.getElementById("convenio");
      var procedimento = document.getElementById("procedimento");
      var medico = document.getElementById("medico");

      if (data_atendimento.value == ""){
        alert("Preencher a DATA");
        data_atendimento.focus();
        return false;
      } 
      if (nome_paciente.value == ""){
        alert("Preencher Nome do PACIENTE");
        nome_paciente.focus();
        return false;
      }
      if (convenio.selectedIndex==0){ /* em campos "select" utilizar "nome_formuario.nome_do_select.selectedIndex==0"*/
      alert("Preencher CONVÊNIO");
        form.convenio.focus();
        return false;
      }
      if (procedimento.selectedIndex==0){
        alert("Preencher PROCEDIMENTO");
        procedimento.focus();
        return false;
      }
      if (medico.selectedIndex==0){
        alert("Favor preencher campo MÉDICO");
          medico.focus();
          return false;
      }
      if (medico.selectIndex!==0){
        alert("Dados Salvos!");
      }
      
}

/*function aviso (){
  alert("Dados Salvos!");
}*/