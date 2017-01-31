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

        function pilih_kapster(pilihan) {
			if(pilihan=="Product"){                   
                var htmlOption = '<label for="sel1">Jenis Product</label><select class="form-control" name="pilihan2" required>';
                htmlOption += '<option value=""></option>';
				htmlOption += '<option value="Perawatan Rambut">Perawatan Rambut</option>';
				htmlOption += '<option value="Perawatan Tubuh">Perawatan Tubuh</option>';
				htmlOption += '<option value="Perawatan Wajah">Perawatan Wajah</option></select><br><input type="submit" class="btn btn-primary pull-right" value="Search" id="search">';
				document.getElementById("tujuan").innerHTML = htmlOption;
				document.formlist.action = "<?php echo base_url(); ?>Salon3/Admin/list_kapsters";
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
        <li class="active"><a href="<?php echo base_url(); ?>Salon3/Admin/list_kapster">List Product</a></li>
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
      
      <div class="col-lg-11"><h3>Edit Kapster</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
	  <div class="box-body centerbox">
			<?php
				foreach ($g as $gaji) {
					echo "<form method='post' action='".site_url('Salon3/Admin/updateRange/'.$gaji->id_range)."')'>";
				}
			?>
			<form method="post" action="">
				<div class="form-group">
				<label for="exampleInputPassword1" >Range Gaji </label><br>
				<div class="row">
					    <?php
							echo '<div class="col-sm-5"><input value="'.$gaji->range_bawah.'" type="text" class="form-control" name="range_bawah" placeholder="'.$gaji->range_bawah.'" required></div>';
							echo '<div class="col-sm-1"><span>~</span></div><div class="col-sm-5"><input value="'.$gaji->range_atas.'" type="text" class="form-control" name="range_atas" placeholder="'.$gaji->range_atas.'" required></div>';
						?>				
				</div>	
				</div>	
			
				<div class="form-group">
				<label for="exampleInputPassword1" >Rate Gaji (%) </label><br>
					    <?php
							echo '<input value="'.$gaji->rate_gaji.'" type="text" class="form-control" name="rate_gaji" placeholder="'.$gaji->rate_gaji.'" required>';
						?>				
					
				</div>			
			<div class="col-lg-4 pull-right">
				<input type="submit" class="btn btn-primary pull-right"value="Submit">
			</div>
			<div class="col-lg-1 pull-right">
				<a href="<?php echo base_url(); ?>Salon3/Admin/list_range" class="btn btn-primary" >Cancel</a>
			</div>
		</form>
		
	  </div>	
		
	
      </div>
	  
    </div>
	
</body>

</html>
