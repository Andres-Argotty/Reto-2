function pintarDatos(datos, columnaMostrar) {
    let htmlParaInsertar="";
    htmlParaInsertar+="<thead><tr><th>Titulo</th></tr></thead>";

    htmlParaInsertar+="<tbody>";

    for (let i = 0; i <  datos.length; i++) {
        htmlParaInsertar+="<tr>";
        htmlParaInsertar+="<td><a href='#' onclick=''>"+datos[i][columnaMostrar]+"</a></td>"; //En la columna establecemos que datos va a mostrar datos[0]['name']
        htmlParaInsertar+="</tr>";

    }
    htmlParaInsertar+="</tbody>";
    $("#tabla").empty(); //Vaciamos la tabla
    $("#tabla").append(htmlParaInsertar); //Insertamos detro de el elemento con el id tabla la variable htmlParaInsertar

}