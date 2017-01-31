<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Salon Kapster 1</title>
</head>
<style>
.pull-right {
    float: right !important;
}
	.centerbox{
		margin-left: 130px;
		max-width: 550px;
	}
	.loginbox{
		margin: 90px;
		margin-left: 100px;
		max-width: 1050px;
	}
</style>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active" ><a href="<?php echo base_url(); ?>Salon1/Kapster/">Dashboard <span class="sr-only">(current)</span></a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
            <li><a href="<?php echo base_url(); ?>Salon1/Kapster/logout">Logout</a></li>
      </ul> 
    </div>
  </div>
</nav>
<body id="page-top" class="index">
		<div class="col-lg-10"><h3>Start Selling</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5><div class="box-body centerbox">
			<div class="col-lg-20" id="nama-kapster"><label for="sel1">Nama Kapster</label><br>
            <div><div class="col-lg-10"><select class="form-control kapsterName" id="kapsterName">
			<option value=""></option>
			    <?php
					foreach ($k as $kapster) {
						echo "<option data-name='$kapster->nama_kapster' value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
					}
				?>
			</select></div></div><button class="btn btn-primary" id="addOptionKapster" onclick="addOptionKapster(event)">+</button></div>
			<br><div class="col-lg-20" id="select-rambut"><label for="sel1">Perawatan Rambut</label><br>
            <div><div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pr as $produkr) {
						echo "<option data-harga='$produkr->harga' data-jenis='$produkr->jenis_produk' data-produk='$produkr->nama_produk' value='$produkr->id_produk'>$produkr->nama_produk</option>";
					}
				?>
			</select></div></div><button class="btn btn-primary" id="addOptionRambut" onclick="addOptionRambut(event)">+</button></div>
			<br><div class="col-lg-20" id="select-wajah"><label for="sel1">Perawatan Wajah</label><br>
            <div><div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pw as $produkw) {
						echo "<option data-harga='$produkw->harga' data-jenis='$produkw->jenis_produk' data-produk='$produkw->nama_produk' value='$produkw->id_produk'>$produkw->nama_produk</option>";
					}
				?>
			</select></div></div><button class="btn btn-primary" id="addOptionWajah" onclick="addOptionWajah(event)">+</button></div>
			<br><div class="col-lg-20"id="select-tubuh"><label for="sel1">Perawatan Tubuh</label><br>
            <div><div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pt as $produkt) {
						echo "<option data-harga='$produkt->harga' data-jenis='$produkt->jenis_produk' data-produk='$produkt->nama_produk' value='$produkt->id_produk'>$produkt->nama_produk</option>";
					}
				?>
			</select></div></div><button class="btn btn-primary" id="addOptionTubuh" onclick="addOptionTubuh(event)">+</button></div>
			<br><div class="col-lg-20" id="select-paket"><label for="sel1">Paket</label><br>
            <div><div class="col-lg-10"><select class="form-control kapsterSelection" >
				<option value=""></option>
			    <?php
					foreach ($pp as $produkp) {
						echo "<option data-harga='$produkp->harga' data-jenis='$produkp->jenis_produk' data-produk='$produkp->nama_produk' value='$produkp->id_produk'>$produkp->nama_produk</option>";
					}
				?>				
			</select></div></div><button class="btn btn-primary" id="addOptionPaket" onclick="addOptionPaket(event)">+</button></div>
			<br>
			<div class="col-lg-10"><button type="submit" class="btn btn-primary pull-right" id="submitSelection" onclick="submitSelection(event)">Submit</button></div>
		</div>
	
 <div class="box-body loginbox">
              <table style="display:none;" id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Nama Kapster</th>
                  <th>Jenis Perawatan</th>
                  <th>Nama Perawatan</th>
                  <th>Harga</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody id="template-tr">
				</tbody>
              </table>
			  <a href="#" style="display:none;" id="example3"class="btn btn-primary pull-right" onclick="submitSell(event)">Send</a>
            </div></div>	
</body>

<script>

function submitSelection(e){
	e.preventDefault()
	
	//show table 
	//var kapsterID = $("#kapsterName").val()
	//var kapsterName = $("#kapsterName option:selected").html()

	//console.log(kapsterID)
	//console.log(kapsterName)
	$(".kapsterName option:selected").each(function(index,input){
		kapster = $(input)
		var kapsterID = kapster.val()
		var kapsterName = kapster.data("name")
		console.log(kapsterID)
		console.log(kapsterName)
		$(".kapsterSelection option:selected").each(function(index,input){
			var kep = $(input)
			if(kep.val() != "" && kep.data()!="" && kapsterID!=""){
				$("#example2").fadeIn()
				$("#example3").fadeIn()
				console.log(kep.val()) // id
				console.log(kep.data("harga")) // harga
				console.log(kep.data("jenis")) // jenis
				console.log(kep.data("produk")) // nama produk
				// kep.closest("select").val("") set to default v	alue
				addRow(kep.val(),kapsterID,kapsterName,kep.data("jenis"),kep.data("produk"),kep.data("harga"))
			}
		})
	})	
}

function addRow(id,kapsterID,kapsterName,type,name,price){	
	var reverse = price.toString().split('').reverse().join(''),
		ribuan 	= reverse.match(/\d{1,3}/g);
		ribuan	= ribuan.join('.').split('').reverse().join('');
	$("#example2 tbody").append("<tr>"+
	"<td style='display:none;'>"+id+"</td>"+
	"<td style='display:none;'>"+kapsterID+"</td>"+
	 "<td>"+kapsterName+"</td>"+
	 "<td>"+type+"</td>"+
	 "<td>"+name+"</td>"+
	 "<td>Rp. "+ribuan+"</td>"+
	 "<td align='center'><a href='#' class='delete-kapster-row' onclick='deleteRow(event,this)' ><button>X</button></a></td>"+
	"</tr>")
}
function addOptionKapster(e){	
	$("#nama-kapster").append('<div><br><div class="col-lg-10"><select class="form-control kapsterName" id="kapsterName" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($k as $kapster) {
						echo "<option data-name='$kapster->nama_kapster' value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionWajah(e){	
	$("#select-wajah").append('<div><br><div class="col-lg-10"><select class="form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<<?php
					foreach ($pw as $produkw) {
						echo "<option data-harga='$produkw->harga' data-jenis='$produkw->jenis_produk' data-produk='$produkw->nama_produk' value='$produkw->id_produk'>$produkw->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionRambut(e){	
	$("#select-rambut").append('<div><br><div class="col-lg-10"><select class="form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($pr as $produkr) {
						echo "<option data-harga='$produkr->harga' data-jenis='$produkr->jenis_produk' data-produk='$produkr->nama_produk' value='$produkr->id_produk'>$produkr->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionTubuh(e){	
	$("#select-tubuh").append('<div><br><div class="col-lg-10"><select class="form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($pt as $produkt) {
						echo "<option data-harga='$produkt->harga' data-jenis='$produkt->jenis_produk' data-produk='$produkt->nama_produk' value='$produkt->id_produk'>$produkt->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionPaket(e){	
	$("#select-paket").append('<div><br><div class="col-lg-10"><select class="form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($pp as $produkp) {
						echo "<option data-harga='$produkp->harga' data-jenis='$produkp->jenis_produk' data-produk='$produkp->nama_produk' value='$produkp->id_produk'>$produkp->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function deleteOption(e,el){
	e.preventDefault()
	$(el).closest("div").remove()
}

function deleteRow(e,el){
	e.preventDefault()
	
	if ($("#template-tr tr").length < 2){
		$("#example2").fadeOut()
		$("#example3").fadeOut()
	}
	
	$(el).closest("tr").remove()
}

function submitSell(e){
	
	e.preventDefault()
	
	var kapsterArrID = []
	var kapsterArrProdID= []

	$("#template-tr tr").each(function(index,tr){

		var tds = $(tr).find("td")

		kapsterArrProdID.push($(tds).eq(0).html())
		kapsterArrID.push($(tds).eq(1).html())

	})
	
	console.log(kapsterArrID)
	console.log(kapsterArrProdID)
	if(kapsterArrID!=""){
		$.post("<?php echo base_url(); ?>Salon1/Admin/tambah_transaksi",
		{
			array_kapster: kapsterArrID,
			array_product: kapsterArrProdID
		},
		function(data, status){
			if(status == "success"){
				alert("Data berhasil ditambahkan");
				location.reload();
			}else{
				// on error
			}
		});	
	}else{
		alert("Data gagal ditambahkan");
	}

}
</script>

</html>
