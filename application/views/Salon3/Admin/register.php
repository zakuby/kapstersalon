<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Salon Kapster 3</title>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.min.css"; ?>" type="text/css">
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
</head>
<style>
.pull-right {
    float: right !important;
}
	.centerbox{
		margin-left: 130px;
		max-width: 450px;
	}
	.loginbox{
		margin: 40px;
		margin-left: 100px;
		max-width: 450px;
	}
</style>
 
<script>
function rangeGaji(e){
	e.preventDefault()
	//
	var rangebawah = document.getElementById('rangeBawah').value
	var rangeatas = document.getElementById('rangeAtas').value
	var rate = document.getElementById('rateGaji').value
	console.log(rangebawah)
	console.log(rangeatas)
	console.log(rate)
	if(rangeatas>rangebawah && rate<=100 && rate!="" && rangebawah!="" && rangeatas!=""){
		submitRange(rangebawah,rangeatas,rate)
	}else if(rangeatas<rangebawah){
		$('#salah').html("Nilai Range Atas harus melebihi Range Bawah !");
		
	}else if(rate>100){
		$('#salah').html("Rate tidak boleh melebihi 100% ! ");
	}else{
		$('#salah').html("");
	}
}
function submitRange(rangebawah,rangeatas,rate){
	$.post("<?php echo base_url(); ?>Salon3/Admin/tambah_range",
	{
		range_bawah: rangebawah,
		range_atas: rangeatas,
		rate_gaji: rate
	},
	function(data, status){ 
		var results = JSON.parse(data)
		console.log(results.status)
		if(results.status == "success"){
			alert("Range berhasil ditambahkan");
			location.reload();
		}else if(results.status == "failed"){
			alert("Range gagal ditambahkan");
			$('#salah').html("Gagal menambahkan ");
		}
	});	
}
function update(){
	if(document.getElementById('optionsRadios1').checked) {
       document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon3/Admin/tambah_kapster"><div class="form-group"><label for="exampleInputPassword1" >Nama Kapster </label><br><input type="text" class="form-control" name="nama_kapster" placeholder="" required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form>';
	}else if(document.getElementById('optionsRadios2').checked) {
		document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon3/Admin/tambah_produk"><div class="form-group"><label for="sel1">Jenis Perawatan</label> <br/><select class="form-control" name="jenis_perawatan" required><option value=""></option><<option value="Perawatan Rambut">Perawatan Rambut</option><option value="Perawatan Wajah">Perawatan Wajah</option><option value="Perawatan Tubuh">Perawatan Tubuh</option><option value="Paket">Paket</option></select></div><br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_perawatan" placeholder=""  required></div><br><div class="form-group"><label for="exampleInputPassword1" >Harga Product</label><br><label for="exampleInputPassword1" >Category SS</label><br><input type="number" class="form-control" name="harga_SS" placeholder=""  required></div><div class="form-group"><label for="exampleInputPassword1" >Category S</label><br><input type="number" class="form-control" name="harga_S" placeholder=""  required></div><div class="form-group"><label for="exampleInputPassword1" >Category M</label><br><input type="number" class="form-control" name="harga_M" placeholder=""  required></div><div class="form-group"><label for="exampleInputPassword1" >Category L</label><br><input type="number" class="form-control" name="harga_L" placeholder=""  required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form>';
	}else if(document.getElementById('optionsRadios3').checked) {
		htmlOption = '<form method="post" action="#">';
		htmlOption += '<div class="form-group"><label for="exampleInputPassword1" >Range Gaji </label><br><div class="row">';
		htmlOption += '<div class="col-sm-5"><input type="text" class="form-control" name="range_bawah" placeholder="" id="rangeBawah" required></div>';
		htmlOption += '<div class="col-sm-1"><span>~</span></div><div class="col-sm-5"><input type="text" class="form-control" name="range_atas" placeholder="" id="rangeAtas" required></div></div>';
		htmlOption += '<div class="form-group"><label for="exampleInputPassword1" >Rate Gaji (%)</label><br>';
		htmlOption += '<input type="text" class="form-control" name="rate_gaji" id="rateGaji" placeholder="" required></div>';		
		htmlOption += '<input type="submit" onclick="rangeGaji(event)" class="btn btn-primary pull-right"value="Submit"></form>';
		document.getElementById("tujuan").innerHTML = htmlOption;
	}else if(document.getElementById('optionsRadios4').checked) {
       document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon3/Admin/tambah_cashier"><div class="form-group"><label for="exampleInputPassword1" >Nama Cashier </label><br><input type="text" class="form-control" name="nama_cashier" placeholder="" required></div><br><div class="form-group"><label for="exampleInputPassword1" >Rate (%) </label><br><input type="number" class="form-control" name="rate" placeholder=""  required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form>';
	}
}
</script>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.min.css"; ?>" type="text/css">
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
        <li><a href="<?php echo base_url(); ?>Salon3/Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li class="active"><a href="<?php echo base_url(); ?>Salon3/Admin/register_produk">Register Product</a></li>
        <li ><a href="<?php echo base_url(); ?>Salon3/Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon3/Admin/report_kapster">Report Kapster</a></li>
		<li><a href="<?php echo base_url(); ?>Salon3/Admin/report_cashier">Report Cashier</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="<?php echo base_url(); ?>home/register2">New Account</a></li>
            <li><a href="<?php echo base_url(); ?>Salon3/Kapster/logout">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
<body id="page-top" class="index">
     <div class="form-group">
      
      <div class="col-lg-11"><h3>Register Product</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
	  <div class="box-body centerbox">
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" onchange="update()" checked="">
            Input Kapster
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios4" value="option1" onchange="update()">
            Input Cashier
          </label>
        </div>			
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" onchange="update()">
            Product
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" onchange="update()">
            Range Gaji
          </label>
        </div>
		</div>	
		<div class="box-body loginbox">
		<div id="tujuan">
		<form method="post" action="<?php echo base_url(); ?>Salon3/Admin/tambah_kapster">
			<div class="form-group">
			<label for="exampleInputPassword1" >Nama Kapster </label><br>
				<input type="text" class="form-control" name="nama_kapster" placeholder="" required>
			</div>
			<input type="submit" class="btn btn-primary pull-right"value="Submit"></form>
		</div>
	<div id="salah" style="color:red"></div>	
	</div>
      </div>
	  
    </div>
	
</body>

</html>
