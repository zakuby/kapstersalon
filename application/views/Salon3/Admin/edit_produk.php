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
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>
    <script type="text/javascript" src="<?php echo base_url()."assets/js/bootstrap-datepicker.js"; ?>"></script>
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
		margin: 10px;
		margin-left: 130px;
		width: 950px;
	}
	.ex1 {
		table-layout: auto;
	}
	
</style>
 
<script>

        function pilih_produk(pilihan) {
			if(pilihan=="Product"){                   
                var htmlOption = '<label for="sel1">Jenis Product</label><select class="form-control" name="pilihan2" required>';
                htmlOption += '<option value=""></option>';
				htmlOption += '<option value="Perawatan Rambut">Perawatan Rambut</option>';
				htmlOption += '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
				htmlOption += '<option value="Perawatan Wajah">Perawatan Wajah</option>';
				htmlOption += '<option value="Paket">Paket</option></select>';
				htmlOption += '<br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br>';
				htmlOption += '<input value="" type="text" class="form-control" name="nama_produk"></div>';
				htmlOption += '</select><br><input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.getElementById("tujuan").innerHTML = htmlOption;
				document.formlist.action = "<?php echo base_url(); ?>Salon3/Admin/list_produks";
			}else{
				document.getElementById("tujuan").innerHTML = '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.formlist.action = "<?php echo base_url(); ?>Salon3/Admin/list_kapster";
			}
        };
		
        
</script>
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.min.css"; ?>" type="text/css">
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
        <li><a href="<?php echo base_url(); ?>Salon3/Admin/register_produk">Register Product</a></li>
        <li class="active"><a href="<?php echo base_url(); ?>Salon3/Admin/list_produk">List Product</a></li>
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
        <li><a href="<?php echo base_url(); ?>Salon3/Kapster/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
<body id="page-top" class="index">
     <div class="form-group">
      
      <div class="col-lg-11"><h3>Edit Product</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
	  <div class="box-body centerbox">
			<?php
				foreach ($p as $produk) {
					echo "<form method='post' action='".site_url('Salon3/Admin/updateProduk/'.$produk->id_produk)."')'>";
				}
			?>
			<form method="post" action="">
				<div class="form-group">
				<label for="sel1">Jenis Perawatan</label> <br/>
					<select class="form-control" name="pilihan2" required>
					    <?php
							echo '<option value="'.$produk->jenis_produk.'">'.$produk->jenis_produk.'</option></select>';
						?>
					
				</div><br>
				<div class="form-group">
				<label for="exampleInputPassword1" >Nama Perawatan </label><br>
					    <?php
							echo '<input value="'.$produk->nama_produk.'" type="text" class="form-control" name="nama_perawatan" placeholder="'.$produk->nama_produk.'" required>';
						?>				
					
				</div><br>
				<div class="form-group">
				<label for="exampleInputPassword1" >Harga </label><br>
				<label for="exampleInputPassword1" >Category SS </label>
					    <?php
							echo '<input value="'.$produk->harga_SS.'" type="number" class="form-control" name="harga_SS" placeholder="'.$produk->harga_SS.'" required>';
						?>				
				</div>
				<div class="form-group">
				<label for="exampleInputPassword1" >Category S </label>
					    <?php
							echo '<input value="'.$produk->harga_S.'" type="number" class="form-control" name="harga_S" placeholder="'.$produk->harga_S.'" required>';
						?>				
				</div>
				<div class="form-group">
				<label for="exampleInputPassword1" >Category M </label>
					    <?php
							echo '<input value="'.$produk->harga_M.'" type="number" class="form-control" name="harga_M" placeholder="'.$produk->harga_M.'" required>';
						?>				
				</div>
				<div class="form-group">
				<label for="exampleInputPassword1" >Category L </label>
					    <?php
							echo '<input value="'.$produk->harga_L.'" type="number" class="form-control" name="harga_L" placeholder="'.$produk->harga_L.'" required>';
						?>				
				</div>
				<?php
					if($produk->rate!=NULL){
						echo '				<div class="form-group">
				<label for="exampleInputPassword1" >Rate (%) </label><input value="'.$produk->rate.'" type="number" class="form-control" name="rate" placeholder="'.$produk->rate.'" required></div>';
					}?>
			<div class="col-lg-4 pull-right">
				<input type="submit" class="btn btn-primary pull-right"value="Submit">
			</div>
			<div class="col-lg-1 pull-right">
				<a href="<?php echo base_url(); ?>Salon3/Admin/list_produks" class="btn btn-primary" >Cancel</a>
			</div>
		</form>
		
	  </div>	
		
	
      </div>
	  
    </div>
	
</body>

</html>
