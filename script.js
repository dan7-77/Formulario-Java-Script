var cnpj_formatado = document.getElementById("cpf").value

function mascara_telefone ()
        {
          // limite
         var tel = document.getElementById("telefone").value
            console.log(tel)
          tel=tel.slice(0,14) 
            console.log(tel)
          document.getElementById("telefone").value=tel
            tel=document.getElementById("telefone").value.slice(0,10)
            console.log(tel)
           
            // Mascara TELEFONE
            var tel_formatado = document.getElementById("telefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("telefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[9]!="-")
            {
                if(tel_formatado[9]!=undefined)
                {
                    document.getElementById("telefone").value=tel_formatado.slice(0,9)+"-"+tel_formatado[9]
                }
            }
            var telefone = document.querySelector("#telefone").value
           localStorage.setItem("telefone",telefone)
         
    }
          // Mascara CEP
          function mascara_cep()
          { var cep_formatado = document.getElementById("cep").value
              if (cep_formatado[2]!=".")
              {
                  if (cep_formatado[2]!=undefined)
                  {
                      document.getElementById("cep").value=cep_formatado.slice(0,)+"."+cep_formatado[2];
                  }
              }
          
              if (cep_formatado[6]!="-")
              {
                  if(cep_formatado[6]!=undefined)
                  {
                      document.getElementById("cep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                  }
              }
              var telefone = document.querySelector("#cep").value
            localStorage.setItem("cep",cep)

          }       


             // Mascara CPF
        function mascara_cpf()
        { var cpf_formatado = document.getElementById("cpf").value
            if (cpf_formatado[2]!=".")
            {
                if (cpf_formatado[2]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,2)+"."+cpf_formatado[2];
                }
            }
        
            if (cpf_formatado[6]!="-")
            {
                if(cpf_formatado[6]!=undefined)
                {
                    document.getElementById("cpf").value=cpf_formatado.slice(0,6)+"-"+cpf_formatado[6]
                }
            }
            var telefone = document.querySelector("#cpf").value
            localStorage.setItem("cpf",cpf)
        }       
    

            // Mascara CNPJ
        function mascara_cnpj()
        { var cnpj_formatado = document.getElementById("cnpj").value
            if (cnpj_formatado[2]!=".")
            {
                if (cnpj_formatado[2]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2];
                }
            }
        
            if (cnpj_formatado[6]!="-")
            {
                if(cnpj_formatado[6]!=undefined)
                {
                    document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"-"+cnpj_formatado[6]
                }
            }
            var cnpj = document.querySelector("#cnpj").value
            localStorage.setItem("cnpj",cnpj)
            
        }       
        
        // Mascara CODIGO
    function mascara_codigo()
    { var codigo_formatado = document.getElementById("codigo").value
        if (codigo_formatado[2]!=".")
        {
            if (codigo_formatado[2]!=undefined)
            {
                document.getElementById("codigo").value=codigo_formatado.slice(0,2)+"."+codigo_formatado[2];
            }
        }
    
        if (codigo_formatado[6]!="-")
        {
            if(codigo_formatado[6]!=undefined)
            {
                document.getElementById("codigo").value=codigo_formatado.slice(0,6)+"-"+codigo_formatado[6]
            }
        }
        var telefone = document.querySelector("#codigo").value
            localStorage.setItem("codigo",codigo)

    }       

    function enviar(e) {
        e.preventDefault();
       
    }
