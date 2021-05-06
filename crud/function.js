
function Add(){
	if($("#txtName").val()=='')
	{
		alert('Kolom Nama tidak boleh kosong')
	}
	else
	{
		var client = JSON.stringify({
			ID    : uuidv4(),
			Name  : $("#txtName").val(),
			Medicine : $("#txtMedicine").val(),
			Quantity : $("#txtQuantity").val()
		});
		tbClients.push(client);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("The data was saved.");
		List()
		Clear()
	}
	// return true;
} 

function Edit(){
    
	tbClients[selected_index] = JSON.stringify({
			ID    : $("#txtID").val(),
			Name  : $("#txtName").val(),
			Medicine : $("#txtMedicine").val(),
			Quantity : $("#txtQuantity").val()
		});//Edit Data Yang Dipilih
	localStorage.setItem("tbClients", JSON.stringify(tbClients));
	alert("The data was edited.")
	operation = "A"; //Return default value
    List()
    Clear()
	// return true;
} 

function Delete(){

	var c = confirm('Apakah Yakin Data Ini Akan Di Hapus?')
	if(c)
	{
		tbClients.splice(selected_index, 1);
		localStorage.setItem("tbClients", JSON.stringify(tbClients));
		alert("Client deleted.");
		List();
		Clear()
	}
	
} 
function Clear()
{
    $("#txtID").val('');
	$("#txtName").val('');
	$("#txtMedicine").val('');
	$("#txtQuantity").val('');
	$("#txtID").prop("readonly",false);
}
function List(){		
	$("#tblList").html("");
	$("#tblList").html(
		"<thead>"+
		"	<tr>"+
		"	<th></th>"+
		"	<th>ID</th>"+
		"	<th>Name</th>"+
		"	<th>Medicine</th>"+
		"	<th>Quantity</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody>"+
		"</tbody>"
		);
	for(var i in tbClients){
		var cli = JSON.parse(tbClients[i]);
	  	$("#tblList tbody").append("<tr>"+
			"<td><img src='edit.png' alt='Edit"+i+"' class='btnEdit' data-id='"+i+"' style='cursor:pointer'/><img src='delete.png' alt='Delete"+i+"' class='btnDelete' data-id='"+i+"' style='cursor:pointer'/></td>" + 
			"<td>"+cli.ID+"</td>" + 
			"<td>"+cli.Name+"</td>" + 
			"<td>"+cli.Medicine+"</td>" + 
			"<td>"+cli.Quantity+"</td>" + 
	  		"</tr>");
	}
} 
