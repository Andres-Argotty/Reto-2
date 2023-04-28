function TraerDetalle() {
    let id= sessionStorage.getItem("id");
    let tipoTabla= sessionStorage.getItem("tipoTabla");

    $.ajax({
        url: 'https://g31412992e9c34c-ocr4caldha7x2c94.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/'+tipoTabla+'/'+tipoTabla+'/'+id,
        type:'GET',
        datatype:'json',
        success: function(respuesta){
            pintarDetalle(respuesta.items);
        },
        error: function(respuesta,xhr){
            alert("Error de petición");
        }
    })
}

    function pintarDetalle(datos) {
        let htmlParaInsertar="";
        htmlParaInsertar+= "<thead><tr>";
        
        Object.keys(datos[0]).forEach(elemento=> htmlParaInsertar+="<th>"+elemento+"</th>");
        htmlParaInsertar+="</tr></thead>";
        htmlParaInsertar+="<tbody>";
        htmlParaInsertar+="<tr>";

        Object.values(datos[0]).forEach((elemento,indice)=>{
        if (indice<1) {
        htmlParaInsertar+="<td>"+elemento+"</td>"

            
        }else{
            htmlParaInsertar+="<td><input value="+elemento+"></td>"

        }
        });
        htmlParaInsertar+="</tr>";
        htmlParaInsertar+="</tbody>";
        
        $("#tabla").empty();
        $("#tabla").append(htmlParaInsertar);


            
        }

    

