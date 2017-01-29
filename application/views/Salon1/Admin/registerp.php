<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Salon Kapster 1</title>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>
</head>
<style>
.pull-right {
    float: right !important;
}
	.centerbox{
		margin-left: 130px;
		width: 450px;
	}
	.loginbox{
		margin: 40px;
		margin-left: 100px;
		width: 450px;
	}
</style>
 
<script>
function update(){
	if(document.getElementById('optionsRadios1').checked) {
       document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon1/Admin/tambah_kapster"><div class="form-group"><label for="exampleInputPassword1" >Nama Kapster </label><br><input type="text" class="form-control" name="nama_kapster" placeholder="" required></div><br><div class="form-group"><label for="exampleInputPassword1" >Rate (%) </label><br><input type="text" class="form-control" name="rate" placeholder=""  required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form>';
	}else if(document.getElementById('optionsRadios2').checked) {
		document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon1/Admin/tambah_produk"><div class="form-group"><label for="sel1">Jenis Perawatan</label> <br/><select class="form-control" name="jenis_perawatan" required><option value=""></option><<option value="Perawatan Rambut">Perawatan Rambut</option><option value="Perawatan Wajah">Perawatan Wajah</option><option value="Perawatan Tubuh">Perawatan Tubuh</option><option value="Paket">Paket</option></select></div><br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_perawatan" placeholder=""  required></div><br><div class="form-group"><label for="exampleInputPassword1" >Harga </label><br><input type="text" class="form-control" name="harga" placeholder=""  required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form>';
	}else if(document.getElementById('optionsRadios3').checked) {
		document.getElementById("tujuan").innerHTML = '<form method="post" action="<?php echo base_url(); ?>Salon1/Admin/tambah_specialproduk"><div class="form-group"><label for="sel1">Jenis Perawatan</label> <br/><select class="form-control" name="jenis_perawatan" required><option value=""></option><option value="Perawatan Rambut">Perawatan Rambut</option><option value="Perawatan Wajah">Perawatan Wajah</option><option value="Perawatan Tubuh">Perawatan Tubuh</option><option value="Paket">Paket</option></select></div><br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_perawatan" placeholder=""  required></div><br><div class="form-group"><label for="exampleInputPassword1" >Harga </label><br><input type="text" class="form-control" name="harga" placeholder=""  required></div><br><div class="form-group"><label for="exampleInputPassword1" >Rate (%) </label><br><input type="text" class="form-control" name="rate" placeholder=""  required></div><input type="submit" class="btn btn-primary pull-right"value="Submit"></form><br>';
	}	
}
</script>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
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
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li class="active" ><a href="<?php echo base_url(); ?>Salon1/Admin/register_produk">Register Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/report_kapster">Report Kapster</a></li>
		<li><a href="<?php echo base_url(); ?>Salon1/Admin/report_cashier">Report Cashier</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="<?php echo base_url(); ?>Salon1/Kapster/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
<body id="page-top" class="index">
     <div class="form-group">
      
      <div class="col-lg-11"><h3>Register Product</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5><div class="box-body centerbox">
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" onchange="update()" checked="">
            Input Kapster
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
            <input type="radio" name="optionsRadios" id="optionsRadios3" value="option2" onchange="update()">
            Special Product
          </label>
        </div></div>	
		<div class="box-body loginbox">
		<div id="tujuan">
			<form method="post" action="<?php echo base_url(); ?>Salon1/Admin/tambah_produk">
				<div class="form-group">
				<label for="sel1">Jenis Perawatan</label> <br/>
					<select class="form-control" name="jenis_perawatan" required>
					<?php
				if($_SESSION["jenis"]=="Perawatan Rambut"){
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option>';
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option></select>';
					echo '<option value="Paket">Paket</option></select>';
				}else if($_SESSION["jenis"]=="Perawatan Tubuh"){
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option></select>';
					echo '<option value="Paket">Paket</option></select>';
				}else if($_SESSION["jenis"]=="Perawatan Wajah"){
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option>';
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option></select>';
					echo '<option value="Paket">Paket</option></select>';
				}else if($_SESSION["jenis"]=="Perawatan Wajah"){
					echo '<option value="Paket">Paket</option></select>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option>';
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option></select>';
				}						
					?>
				</div><br>
				<div class="form-group">
				<label for="exampleInputPassword1" >Nama Perawatan </label><br>
					<input type="text" class="form-control" name="nama_perawatan" placeholder=""  required>
				</div><br>
				<div class="form-group">
				<label for="exampleInputPassword1" >Harga </label><br>
					<input type="text" class="form-control" name="harga" placeholder=""  required>
				</div>
		<input type="submit" class="btn btn-primary pull-right"value="Submit">
		</form>
		</div>
	</div>
      </div>
	  
    </div>
	
</body>

</html>
