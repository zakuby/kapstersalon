<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Salon Kapster 2</title>
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
	.bg-black {
  background-color: #8e8d8d;
  color: #ffffff;
}
</style>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap3/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap3/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>
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
        <li class="active" ><a href="<?php echo base_url(); ?>Salon2/Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li><a href="<?php echo base_url(); ?>Salon2/Admin/register_produk">Register Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon2/Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon2/Admin/report_kapster">Report Kapster</a></li>
		<li><a href="<?php echo base_url(); ?>Salon2/Admin/report_cashier">Report Cashier</a></li>
      </ul>

      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="<?php echo base_url(); ?>home/register">New Account</a></li>
            <li><a href="<?php echo base_url(); ?>Salon2/Kapster/logout">Logout</a></li>
          </ul>
        </li>	  
        
      </ul>
    </div>
  </div>
</nav>
<body id="page-top" class="index">
		<div class="col-lg-10"><h3>Start Selling</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
		<div class="box-body centerbox">
			<div id="nama-cashier"><label for="sel1">Nama Cashier</label><br>
            <div class="parent-kepster col-lg-12"><div class="col-lg-10"><select class="form-control cashierName" id="cashierName">
			<option value=""></option>
			    <?php
					foreach ($c as $cashier) {
						echo "<option data-name='$cashier->nama_cashier' value='$cashier->id_cashier'>$cashier->nama_cashier</option>";
					}
				?>
			</select></div></div></div>		
			<br><br><div id="nama-kapster"><label for="sel1">Nama Kapster</label><br>
            <div class="parent-kepster col-lg-12"><div class="col-lg-10"><select class="form-control kapsterName" id="kapsterName">
			<option value=""></option>
			    <?php
					foreach ($k as $kapster) {
						echo "<option data-name='$kapster->nama_kapster' value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
					}
				?>
			</select></div><button class="btn btn-primary" id="addOptionKapster" onclick="addOptionKapster(event)">+</button></div></div>
			<br><div class="kapster-product" id="select-rambut"><label for="sel1">Perawatan Rambut</label><br>
            <div class="parent-product col-lg-12"><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" > 
			<option value=""></option>
			    <?php
					foreach ($pr as $produkr) {
						echo "<option data-harga='$produkr->harga' data-harga_SS='$produkr->harga_SS' data-harga_S='$produkr->harga_S' data-harga_M='$produkr->harga_M' data-harga_L='$produkr->harga_L' data-jenis='$produkr->jenis_produk' data-produk='$produkr->nama_produk' value='$produkr->id_produk'>$produkr->nama_produk</option>";
					}
				?>
			</select></div><button class="btn btn-primary" id="addOptionRambut" onclick="addOptionRambut(event)">+</button><div class="harga-product col-lg-10"></div></div>
			</div>
			<br><div class="kapster-product" id="select-wajah"><label for="sel1">Perawatan Wajah</label><br>
            <div class="parent-product col-lg-12"><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" > 
			<option value=""></option>
			    <?php
					foreach ($pw as $produkw) {
						echo "<option data-harga='$produkw->harga' data-harga_SS='$produkw->harga_SS' data-harga_S='$produkw->harga_S' data-harga_M='$produkw->harga_M' data-harga_L='$produkw->harga_L' data-jenis='$produkw->jenis_produk' data-produk='$produkw->nama_produk' value='$produkw->id_produk'>$produkw->nama_produk</option>";
					}
				?>
			</select></div><button class="btn btn-primary" id="addOptionWajah" onclick="addOptionWajah(event)">+</button><div class="harga-product col-lg-10"></div></div>
			</div>
			<br><div class="kapster-product" id="select-tubuh"><label for="sel1">Perawatan Tubuh</label><br>
            <div class="parent-product col-lg-12"><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" > 
			<option value=""></option>
			    <?php
					foreach ($pt as $produkt) {
						echo "<option data-harga='$produkt->harga' data-harga_SS='$produkt->harga_SS' data-harga_S='$produkt->harga_S' data-harga_M='$produkt->harga_M' data-harga_L='$produkt->harga_L' data-jenis='$produkt->jenis_produk' data-produk='$produkt->nama_produk' value='$produkt->id_produk'>$produkt->nama_produk</option>";
					}
				?>
			</select></div><button class="btn btn-primary" id="addOptionTubuh" onclick="addOptionTubuh(event)">+</button><div class="harga-product col-lg-10"></div></div>
			</div>
			<br><div class="kapster-product" id="select-paket"><label for="sel1">Paket</label><br>
            <div class="parent-product col-lg-12"><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" > 
			<option value=""></option>
			    <?php
					foreach ($pp as $produkp) {
						echo "<option data-harga='$produkp->harga' data-harga_SS='$produkp->harga_SS' data-harga_S='$produkp->harga_S' data-harga_M='$produkp->harga_M' data-harga_L='$produkp->harga_L' data-jenis='$produkp->jenis_produk' data-produk='$produkp->nama_produk' value='$produkp->id_produk'>$produkp->nama_produk</option>";
					}
				?>
			</select></div><button class="btn btn-primary" id="addOptionPaket" onclick="addOptionPaket(event)">+</button><div class="harga-product col-lg-10"></div></div>
			</div>
			<br>
			<div class="col-lg-10">
			<br><button type="submit" class="btn btn-primary pull-right" id="submitSelection" onclick="submitSelection(event)">Submit</button>
			</div>
		</div></div>
	
 <div class="box-body loginbox">
					
					<div style="display:none;"  id="Customer" class="col-lg-4">
					<label for="exampleInputPassword1" >Nama Customer </label>
					<input type="text" class="form-control" name="customer_name" required>
					
				<br>
					<label for="exampleInputPassword1" >Payment Method : </label>
				<div id="payment-radio" class="radio">
					<label>
					<input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" onchange="update()" >
					Cash&nbsp&nbsp
					</label>
					<label>
					<input type="radio" name="optionsRadios" id="optionsRadios2" value="option1" onchange="update()" >
					Debit&nbsp&nbsp
					</label>
					<label>
					<input type="radio" name="optionsRadios" id="optionsRadios3" value="option1" onchange="update()" >
					Credit Card
					</label>
				</div>
				
				<div id="tujuan">
				</div>	</div>
              <table style="display:none;" id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th>Nama Cashier</th>				
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
			 <div class="col-lg-1 pull-right">
				<a href="#" style="display:none;" id="example3" class="btn btn-primary pull-right" onclick="submitSell(event)">Send</a>
			</div>
			<div class="col-lg-1 pull-right">
				<a href="#" style="display:none;" id="example4" class="btn btn-primary pull-right" onclick="saveNota(event)">Print PDF</a>
			</div>
            </div></div><br>
<div id="print" style="display:none;">
	<b>MICHIKA SALON</b><br>
	Cashier : <span id="nama_cashier"></span><br>
	Customer : <span id="nama_customer"></span><br>
	Time : <?php echo date("d F Y") . "<br>";?>
	Payment Type : <span id="payment_method"></span><br>
	<table id="table_nota" class="table table-bordered table-hover">
		<thead>
			<tr>
				<th>Nama Product</th>
				<th>Harga</th>
			</tr>
		</thead>
        <tbody >
			<tr class="bg-black">
				<td  class="table-danger borderless">Total</td>
				<td id="total_harga"></td>
			</tr>	
			<tr class="bg-black">
				<td  class="table-danger borderless">Pajak</td>
				<td id="pajak_harga"></td>
			</tr>
			<tr class="bg-black">
				<td  class="table-danger borderless">Discount</td>
				<td id="discount_harga"></td>
			</tr>			
		</tbody>
	</table>	
</div>			
</body>

<script>
function saveNota(e){
	$("#print").fadeIn()
	e.preventDefault()
	document.getElementById("nama_cashier").innerHTML = $("#nama-cashier option:selected").html();
	document.getElementById("nama_customer").innerHTML = $("#Customer").html();
	document.getElementById("payment_method").innerHTML = $("#payment-radio option:selected").html();
	document.getElementById("pajak_harga").innerHTML = $("#pajak-harga option:selected").val();
	document.getElementById("discount_harga").innerHTML = $("#discount-harga option:selected").html();
	$("#template-tr tr").each(function(index,tr){
		var tds = $(tr).find("td")
		$("#tabel-nota").append('<tr><td>'+$(tds).eq(7).html()+'</td><td>'+$(tds).eq(8).html()+'</td></tr>')
	})	
}
function pilih_produk(d) {
	var selected = $(d).find('option:selected');
	if(selected.val()!=""){
		$(d).closest(".parent-product").find(".harga-product").html(
			'<br><select class="pilihan-harga form-control">'
			+'<option value="">-Pilih Harga-</option>'
			+"<option value='"+selected.data('harga_ss')+"'>SS&nbsp;:&nbsp;Rp "+konversRupiah(selected.data('harga_ss'))+"</option>"
			+"<option value='"+selected.data('harga_s')+"'>S&nbsp;&nbsp;&nbsp;:&nbsp;Rp "+konversRupiah(selected.data('harga_s'))+"</option>"
			+"<option value='"+selected.data('harga_m')+"'>M&nbsp;&nbsp;:&nbsp;Rp "+konversRupiah(selected.data('harga_m'))+"</option>"
			+"<option value='"+selected.data('harga_l')+"'>L&nbsp;&nbsp;&nbsp;:&nbsp;Rp "+konversRupiah(selected.data('harga_l'))+"</option>"
			+"</select>"
		)	
	}else{
		$(d).closest(".parent-product").find(".harga-product").html("")			
	}
	
};
function update(){
	if(document.getElementById('optionsRadios3').checked) {
       document.getElementById("tujuan").innerHTML = '<label for="exampleInputPassword1" >Nominal Uang </label> <input type="text" class="form-control" name="nominal_uang" required><div id="pajak-harga"><label for="exampleInputPassword1" >Bank </label><select class="form-control" name="jenis_bank" required><option value=""></option><option value="0">BCA</option><option value="1">non-BCA</option></select></div><div id="discount-harga"><label for="exampleInputPassword1" >Discount </label><select class="form-control" name="discount" required><option value="0"></option><option value="5000">Rp 5.000</option><option value="10000">Rp 10.000</option><option value="15000">Rp 15.000</option><option value="20000">Rp 20.000</option><option value="25000">Rp 25.000</option><option value="30000">Rp 30.000</option><option value="35000">Rp 35.000</option><option value="40000">Rp 40.000</option><option value="45000">Rp 45.000</option><option value="50000">Rp 50.000</option></select></div><br><br>';
	}else{
       document.getElementById("tujuan").innerHTML = '<label for="exampleInputPassword1" >Nominal Uang </label> <input type="text" class="form-control" name="nominal_uang" required><div id="discount-harga"><label for="exampleInputPassword1" >Discount </label><select class="form-control" name="discount" required><option value="0"></option><option value="5000">Rp 5.000</option><option value="10000">Rp 10.000</option><option value="15000">Rp 15.000</option><option value="20000">Rp 20.000</option><option value="25000">Rp 25.000</option><option value="30000">Rp 30.000</option><option value="35000">Rp 35.000</option><option value="40000">Rp 40.000</option><option value="45000">Rp 45.000</option><option value="50000">Rp 50.000</option></select></div><br><br>';		
	}
}	
function submitSelection(e){
	e.preventDefault()
	
	//show table 
	//var kapsterID = $("#kapsterName").val()
	//var kapsterName = $("#kapsterName option:selected").html()

	//console.log(kapsterID)
	//console.log(kapsterName)
	var cashierName = $("#nama-cashier option:selected").html()
	var cashierID = $("#nama-cashier option:selected").val()
	$(".kapsterName option:selected").each(function(index,input){
		kapster = $(input)
		var kapsterID = kapster.val()
		var kapsterName = kapster.data("name")
		console.log(kapsterID)
		console.log(kapsterName)
		$(".kapster-product").each(function(index,kapster){
		 $(kapster).find(".parent-product").each(function(index2,inputKep){
			var harga = $(inputKep).find(".pilihan-harga").val()
			var id = $(inputKep).find(".pilihan-produk option:selected").val()
			var produk = $(inputKep).find(".pilihan-produk option:selected").data("produk")
			var jenis = $(inputKep).find(".pilihan-produk  option:selected").data("jenis")

			console.log(harga)
			console.log(produk)
			console.log(jenis)
			if(id != "" && harga!="" && produk!="" && jenis!="" && kapsterID!="" && cashierID!=""){
				$("#example2").fadeIn()
				$("#example3").fadeIn()
				$("#example4").fadeIn()
				$("#Customer").fadeIn()			
				addRow(id,kapsterID,kapsterName,cashierID,cashierName,jenis,produk,harga)
			}
		 })
		})
	})
}	
function konversRupiah(price){
	var reverse = price.toString().split('').reverse().join(''),
		ribuan 	= reverse.match(/\d{1,3}/g);
		ribuan	= ribuan.join('.').split('').reverse().join('');	
		return ribuan;
	
}

function addRow(id,kapsterID,kapsterName,cashierID,cashierName,type,name,price){	
	var reverse = price.toString().split('').reverse().join(''),
		ribuan 	= reverse.match(/\d{1,3}/g);
		ribuan	= ribuan.join('.').split('').reverse().join('');
	$("#example2 tbody").append("<tr>"+
	"<td style='display:none;'>"+id+"</td>"+
	"<td style='display:none;'>"+kapsterID+"</td>"+
	"<td style='display:none;'>"+cashierID+"</td>"+
	"<td style='display:none;'>"+price+"</td>"+
	"<td>"+cashierName+"</td>"+
	 "<td>"+kapsterName+"</td>"+
	 "<td>"+type+"</td>"+
	 "<td>"+name+"</td>"+
	 "<td>Rp "+konversRupiah(price)+"</td>"+
	 "<td align='center'><a href='#' class='delete-kapster-row' onclick='deleteRow(event,this)' ><button>X</button></a></td>"+
	"</tr>")
}
function addOptionKapster(e){	
	$("#nama-kapster").append('<div class="parent-kepster col-lg-12"><br><div class="col-lg-10"><select class="form-control kapsterName" id="kapsterName" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($k as $kapster) {
						echo "<option data-name='$kapster->nama_kapster' value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionCashier(e){	
	$("#nama-cashier").append('<div><br><div class="col-lg-10"><select class="form-control cashierName" id="cashierName" >'+
			'<option value=""></option>'+
				"<?php
					foreach ($c as $cashier) {
						echo "<option data-name='$cashier->nama_cashier' value='$cashier->id_cashier'>$cashier->nama_cashier</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button></div>"
			)
}
function addOptionWajah(e){	
	$("#select-wajah").append('<div class="parent-product col-lg-12"><br><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<<?php
					foreach ($pw as $produkw) {
						echo "<option data-harga='$produkw->harga' data-harga_SS='$produkw->harga_SS' data-harga_S='$produkw->harga_S' data-harga_M='$produkw->harga_M' data-harga_L='$produkw->harga_L' data-jenis='$produkw->jenis_produk' data-produk='$produkw->nama_produk' value='$produkw->id_produk'>$produkw->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button><div class='harga-product col-lg-10'></div></div>"
			)
}
function addOptionRambut(e){	
	$("#select-rambut").append('<div class="parent-product col-lg-12"><br><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<<?php
					foreach ($pr as $produkr) {
						echo "<option data-harga='$produkr->harga' data-harga_SS='$produkr->harga_SS' data-harga_S='$produkr->harga_S' data-harga_M='$produkr->harga_M' data-harga_L='$produkr->harga_L' data-jenis='$produkr->jenis_produk' data-produk='$produkr->nama_produk' value='$produkr->id_produk'>$produkr->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button><div class='harga-product col-lg-10'></div></div>"
			)
}
function addOptionTubuh(e){	
	$("#select-tubuh").append('<div class="parent-product col-lg-12"><br><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<<?php
					foreach ($pt as $produkt) {
						echo "<option data-harga='$produkt->harga' data-harga_SS='$produkt->harga_SS' data-harga_S='$produkt->harga_S' data-harga_M='$produkt->harga_M' data-harga_L='$produkt->harga_L' data-jenis='$produkt->jenis_produk' data-produk='$produkt->nama_produk' value='$produkt->id_produk'>$produkt->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button><div class='harga-product col-lg-10'></div></div>"
			)
}
function addOptionPaket(e){	
	$("#select-paket").append('<div class="parent-product col-lg-12"><br><div class="col-lg-10"><select onchange="pilih_produk(this);" class="pilihan-produk form-control kapsterSelection" >'+
			'<option value=""></option>'+
				"<<?php
					foreach ($pp as $produkp) {
						echo "<option data-harga='$produkp->harga' data-harga_SS='$produkp->harga_SS' data-harga_S='$produkp->harga_S' data-harga_M='$produkp->harga_M' data-harga_L='$produkp->harga_L' data-jenis='$produkp->jenis_produk' data-produk='$produkp->nama_produk' value='$produkp->id_produk'>$produkp->nama_produk</option>";
					}
				?>"+
			"</select></div><button href='#' class='btn btn-primary' onclick='deleteOption(event,this)' >-</button><div class='harga-product col-lg-10'></div></div>"
			)
}
function deleteOption(e,el){
	e.preventDefault()
	$(el).closest(".parent-product").remove()
}

function deleteRow(e,el){
	e.preventDefault()
	
	if ($("#template-tr tr").length < 2){
		$("#example2").fadeOut()
		$("#example3").fadeOut()
		$("#example4").fadeOut()
		$("#Customer").fadeOut()
	}
	
	$(el).closest("tr").remove()
}

function submitSell(e){
	
	e.preventDefault()
	
	var kapsterArrID = []
	var cashierArrID = []
	var hargaArr = []
	var kapsterArrProdID= []

	$("#template-tr tr").each(function(index,tr){

		var tds = $(tr).find("td")

		kapsterArrProdID.push($(tds).eq(0).html())
		kapsterArrID.push($(tds).eq(1).html())
		cashierArrID.push($(tds).eq(2).html())
		hargaArr.push($(tds).eq(3).html())
	})
	
	console.log(kapsterArrID)
	console.log(cashierArrID)
	console.log(kapsterArrProdID)
	console.log(hargaArr)
	if(kapsterArrID!=""){
		$.post("<?php echo base_url(); ?>Salon2/Admin/tambah_transaksi",
		{
			array_kapster: kapsterArrID,
			array_product: kapsterArrProdID,
			array_cashier: cashierArrID,
			array_harga: hargaArr
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
