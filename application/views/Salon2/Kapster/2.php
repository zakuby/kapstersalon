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
		width: 550px;
	}
	.loginbox{
		margin: 90px;
		margin-left: 100px;
		width: 1050px;
	}
</style>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap3/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap3/css_header/bootstrap.min.css"; ?>" type="text/css">
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
    </div>
  </div>
</nav>
<body id="page-top" class="index">
		<div class="col-lg-10"><h3>Start Selling</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5><div class="box-body centerbox">
			<div class="col-lg-20"><label for="sel1">Nama Kapster</label><br>
            <div class="col-lg-10"><select class="form-control" id="kapsterName" >
			<option value=""></option>
			    <?php
					foreach ($k as $kapster) {
						echo "<option value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
					}
				?>
			</select></div><a href="<?php echo base_url(); ?>Salon2/Admin/register_produk"><button>+</button></a> </div>
			<br><div class="col-lg-20"><label for="sel1">Perawatan Rambut</label><br>
            <div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pr as $produkr) {
						echo "<option data-harga='$produkr->harga' data-jenis='$produkr->jenis_produk' data-produk='$produkr->nama_produk' value='$produkr->id_produk'>$produkr->nama_produk</option>";
					}
				?>
			</select></div><?php echo "<a href='".site_url('Salon2/Admin/registerProduk/'."1")."')'><button>+</button></a> ";?></div>
			<br><div class="col-lg-20"><label for="sel1">Perawatan Wajah</label><br>
            <div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pw as $produkw) {
						echo "<option data-harga='$produkw->harga' data-jenis='$produkw->jenis_produk' data-produk='$produkw->nama_produk' value='$produkw->id_produk'>$produkw->nama_produk</option>";
					}
				?>
			</select></div><?php echo "<a href='".site_url('Salon2/Admin/registerProduk/'."2")."')'><button>+</button></a> ";?></div>
			<br><div class="col-lg-20"><label for="sel1">Perawatan Tubuh</label><br>
            <div class="col-lg-10"><select class="form-control kapsterSelection" >
			<option value=""></option>
			    <?php
					foreach ($pt as $produkt) {
						echo "<option data-harga='$produkt->harga' data-jenis='$produkt->jenis_produk' data-produk='$produkt->nama_produk' value='$produkt->id_produk'>$produkt->nama_produk</option>";
					}
				?>
			</select></div><?php echo "<a href='".site_url('Salon2/Admin/registerProduk/'."3")."')'><button>+</button></a> ";?></div>
			<br><div class="col-lg-20"><label for="sel1">Paket</label><br>
            <div class="col-lg-10"><select class="form-control kapsterSelection" >
				<option value=""></option>
			    <?php
					foreach ($pp as $produkp) {
						echo "<option data-harga='$produkp->harga' data-jenis='$produkp->jenis_produk' data-produk='$produkp->nama_produk' value='$produkp->id_produk'>$produkp->nama_produk</option>";
					}
				?>				
			</select></div><?php echo "<a href='".site_url('Salon2/Admin/registerProduk/'."4")."')'><button>+</button></a> ";?></div>
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

	
	var kapsterID = $("#kapsterName").val()
	var kapsterName = $("#kapsterName option:selected").html()

	console.log(kapsterID)
	console.log(kapsterName)

	$(".kapsterSelection option:selected").each(function(index,input){
	 var kep = $(input)
	  if(kep.val() != "" && kep.data()!=""){
		$("#example2").fadeIn()
		$("#example3").fadeIn()
		console.log(kep.val()) // id
		console.log(kep.data("harga")) // harga
		console.log(kep.data("jenis")) // jenis
		console.log(kep.data("produk")) // nama produk
	   
		 // kep.closest("select").val("") set to default value
	   
	   addRow(kep.val(),kapsterID,kapsterName,kep.data("jenis"),kep.data("produk"),kep.data("harga"))
	  }
	})
}

function addRow(id,kapsterID,kapsterName,type,name,price){	
	$("#example2 tbody").append("<tr>"+
	"<td style='display:none;'>"+id+"</td>"+
	"<td style='display:none;'>"+kapsterID+"</td>"+
	 "<td>"+kapsterName+"</td>"+
	 "<td>"+type+"</td>"+
	 "<td>"+name+"</td>"+
	 "<td>Rp. "+price+"</td>"+
	 "<td align='center'><a href='#' class='delete-kapster-row' onclick='deleteRow(event,this)' ><button>X</button></a></td>"+
	"</tr>")
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
	
	$.post("http://localhost/CI/Salon2/Admin/tambah_transaksi",
	{
		array_kapster: kapsterArrID,
		array_product: kapsterArrProdID
	},
	function(data, status){
		if(status == "success"){
			alert("Data berhasil ditambahkan");
		}else{
			// on error
		}
	});
}
</script>

</html>
