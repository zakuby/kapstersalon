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
		max-width: 450px;
	}
	.loginbox{
		margin: 40px;
		margin-left: 100px;
		max-width: 450px;
	}
</style>
 <link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css/datepicker.css"; ?>">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/js/bootstrap-datepicker.js"; ?>"></script>
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>

<script>
$(function() {
     $('.datepicker').datepicker({
		format: 'dd/mm/yyyy'
	});
});
</script>

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
        <li ><a href="<?php echo base_url(); ?>Salon1/Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/register_produk">Register Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon1/Admin/report_kapster">Report Kapster</a></li>
		<li class="active"><a href="<?php echo base_url(); ?>Salon1/Admin/report_cashier">Report Cashier</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Admin <span class="caret"></span></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="<?php echo base_url(); ?>home/register">New Account</a></li>
            <li><a href="<?php echo base_url(); ?>Salon1/Kapster/logout">Logout</a></li>
          </ul>
        </li>	  
        
	</ul>
    </div>
  </div>
</nav>
<body id="page-top" class="index">
     <div class="form-group">
      
      <div class="col-lg-11"><h3>Report Cashier</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
		<div class="box-body centerbox">
		<form name="formlist" method="post" action="<?php echo base_url(); ?>Salon1/Admin/list_transaksi_cashier">
			<label for="sel1">Nama Cashier</label> <br/>
            <select class="form-control" name="nama" id="asal" required>
			<option value=""></option>
			    <?php
					foreach ($c as $cashier) {
						echo "<option value='$cashier->id_cashier'>$cashier->nama_cashier</option>";
					}
				?>
				
			</select>
			<div class="form-group">
                <label for="sel1">Start Date</label>
                <div class="well">
                    <input class="datepicker" type="text" name="date1" required>
                </div>
            </div>
			<div class="form-group">
                <label for="sel1">End Date</label>
                <div class="well">
                    <input class="datepicker" type="text" name="date2" required>
                </div>
            </div>	<input type="submit" class="btn btn-primary pull-right"value="Submit"></form>
		</div>	
		<div class="box-body loginbox">
		<div id="tujuan">
		</div>
	</div>
      </div>
	  
    </div>
	
</body>

</html>
