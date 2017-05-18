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
		max-width: 450px;
	}
	.loginbox{
		margin: 10px;
		margin-left: 130px;
		max-width: 950px;
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
				htmlOption += '<input type="text" class="form-control" name="nama_produk"></div>';
				htmlOption += '</select><br><input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.getElementById("tujuan").innerHTML = htmlOption;
				document.formlist.action = "<?php echo base_url(); ?>Salon1/Admin/list_produks";
			}else if(pilihan=="Kapster"){
				document.getElementById("tujuan").innerHTML = '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.formlist.action = "<?php echo base_url(); ?>Salon1/Admin/list_kapster";
			}else if(pilihan=="Cashier"){
				document.getElementById("tujuan").innerHTML = '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.formlist.action = "<?php echo base_url(); ?>Salon1/Admin/list_cashier";
			}
        };
		
		
        
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
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/register_produk">Register Product</a></li>
        <li class="active"><a href="<?php echo base_url(); ?>Salon1/Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/report_kapster">Report Kapster</a></li>
		<li><a href="<?php echo base_url(); ?>Salon1/Admin/report_cashier">Report Cashier</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="<?php echo base_url(); ?>home/register">New Account</a></li>
            <li><a href="<?php echo base_url(); ?>Salon1/Kapster/logout">Logout</a></li>
          </ul>
        </li>	 
    </div>
  </div>
</nav>
<body id="page-top" class="index">
     <div class="form-group">
      
      <div class="col-lg-11"><h3>List Product</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
	  <div class="box-body centerbox">
		<form name="formlist" method="post" action="#">
		<div class="form-group">
            <label for="sel1">Product</label> <br/>
				<select class="form-control" name="pilihan" id="asal" onchange="pilih_produk(this.value);" required>
					<option value="Product">Product</option>
					<option value="Kapster">Kapster</option>
					<option value="Cashier">Cashier</option>
				</select><br>
			<div id="tujuan" ><label for="sel1">Jenis Product</label><select class="form-control" name="pilihan2" required>
			<?php
				if($_SESSION["produk"]=="Perawatan Rambut"){
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option>';
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option><option value="Paket">Paket</option></select>';
					echo '<br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_produk"></div>';
					echo '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				}else if($_SESSION["produk"]=="Perawatan Tubuh"){
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option><option value="Paket">Paket</option></select>';
					echo '<br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_produk"></div>';
					echo '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				}else if($_SESSION["produk"]=="Perawatan Wajah"){
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option>';
					echo '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option><option value="Paket">Paket</option></select>';
					echo '<br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_produk"></div>';
					echo '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				}else if($_SESSION["produk"]=="Paket"){
					echo '<option value="Paket">Paket</option>';
					echo '<option value="Perawatan Wajah">Perawatan Wajah</option><option value="Perawatan Tubuh">Perawatan Tubuh</option>';
					echo '<option value="Perawatan Rambut">Perawatan Rambut</option></select>';
					echo '<br><div class="form-group"><label for="exampleInputPassword1" >Nama Perawatan </label><br><input type="text" class="form-control" name="nama_produk"></div>';
					echo '<input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				}
			?>
			</div>
		</div>	</form>
		
	  </div>	
		<div class="box-body loginbox"><br><br><br>
<table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                  <th rowspan="2" style="vertical-align: middle;text-align:center;">Jenis Perawatan</th>
                  <th rowspan="2" style="vertical-align: middle;text-align:center;">Nama Perawatan</th>
                  <th colspan="4" style="text-align:center;">Category</th>
				  <th rowspan="2" style="vertical-align: middle;text-align:center;" align="center">Keterangan</th>
                  <th rowspan="2" style="vertical-align: middle;text-align:center;" align="center">Action</th>
                </tr>
				<tr>
				  <th style="text-align:center;">SS</td>
				  <th style="text-align:center;">S</td>
				  <th style="text-align:center;">M</td>
				  <th style="text-align:center;">L</td>
				  <th style="text-align:center;">XL</td>
				</tr>
                </thead>
                <tbody>

            <?php
            foreach ($p as $produk) {
                print "<tr>";
                print "<td>";
                print $produk->jenis_produk;
                print "<td>";
                print $produk->nama_produk;
                print "<td>";
				echo 'Rp. ' . number_format( $produk->harga_SS, 0 , '' , '.' ) ; 
				print "<td>";
				echo 'Rp. ' . number_format( $produk->harga_S, 0 , '' , '.' ) ; 
				print "<td>";
				echo 'Rp. ' . number_format( $produk->harga_M, 0 , '' , '.' ) ; 
				print "<td>";
				echo 'Rp. ' . number_format( $produk->harga_L, 0 , '' , '.' ) ; 
				echo "<td>";
				print "<td>";
				echo 'Rp. ' . number_format( $produk->harga_XL, 0 , '' , '.' ) ; 
				echo "<td>";
				if($produk->rate!=NULL){
					echo "Special (".$produk->rate."%)";
				}else{
					echo "Biasa";
				}
                echo '<td align="center">';
				echo "<a href='".site_url('Salon1/Admin/editProduk/'.$produk->id_produk)."')'><button>Edit</button></a> ";
				echo "<a onClick=\"javascript: return confirm('Are you sure to delete ?');\" href='".site_url('Salon1/Admin/hapusProduk/'.$produk->id_produk)."')'><button>X</button></a>";
            }
            ?>
			                </tfoot>
              </table>
		</div>
		
	
      </div>
	  
    </div>
	
</body>

</html>
