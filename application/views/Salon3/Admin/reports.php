<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Salon Kapster 3</title>

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
table {
    border:1px solid #CCC;
    border-collapse:collapse;
}
td {
    border:none;
}
.bg-black {
  background-color: #8e8d8d;
  color: #ffffff;
}
</style>
 <link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css/datepicker.css"; ?>">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap2/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-1.7.2.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/js/bootstrap-datepicker.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/jsPDF-master/dist/jspdf.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/jsPDF-master/dist/jspdfautotable.js"; ?>"></script>
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
        <li ><a href="<?php echo base_url(); ?>Salon3/Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li><a href="<?php echo base_url(); ?>Salon3/Admin/register_produk">Register Product</a></li>
        <li><a href="<?php echo base_url(); ?>Salon3/Admin/list_produk">List Product</a></li>
        <li class="active"><a href="<?php echo base_url(); ?>Salon3/Admin/report_kapster">Report Kapster</a></li>
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
      
      <div class="col-lg-11">
	  <h3>Report Kapster</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
		<div class="box-body centerbox">
		<form name="formlist" method="post" action="<?php echo base_url(); ?>Salon3/Admin/list_transaksi">
			<label for="sel1">Nama Kapster</label> <br/>
            <select class="form-control" name="nama" id="asal" >
			<option value="<?php echo $_SESSION["nama"]?>"><?php echo $n[0]->nama_kapster?></option>
			    <?php
					foreach ($k as $kapster) {
						if($_SESSION["nama"]!=$kapster->id_kapster){
							echo "<option value='$kapster->id_kapster'>$kapster->nama_kapster</option>";
						}
						
					}
				?>
				
			</select>
			<div class="form-group">
                <label for="sel1">Start Date</label>
                <div class="well">
                    <input value="<?php echo $_SESSION["first_date"]?>" class="datepicker" type="text" name="date1" placeholder="<?php echo $_SESSION["first_date"]?>" >
                </div>
            </div>
			<div class="form-group">
                <label for="sel1">End Date</label>
                <div class="well">
                    <input value="<?php echo $_SESSION["second_date"]?>" class="datepicker" type="text" name="date2" placeholder="<?php echo $_SESSION["second_date"]?>">
                </div>
            </div>	<input type="submit" class="btn btn-primary pull-right"value="Submit">	</form>		
		</div>	
		<div class="box-body loginbox"><br><br><br>
		<table id="example2" class="table ">
            <thead>
                <tr>
                  <th>Tanggal Transaksi</th>
				  <th>Jenis Perawatan</th>
                  <th>Nama Perawatan</th>
                  <th>Harga</th>
                </tr>
             </thead>
             <tbody>

            <?php
			$total = 0;
			$total2 = 0;
            foreach ($t as $transaksi) {
                print "<tr>";
                print "<td>";
				echo date("d F Y", strtotime($transaksi->tanggal));
                print "<td>";
                print $transaksi->jenis_produk;
                print "<td>";
                print $transaksi->nama_produk;
                print "<td>";
				echo 'Rp. ' . number_format( $transaksi->harga, 0 , '' , '.' ) ; 	
				$total = $total + $transaksi->harga;
            }
			?>
			</tr>
			<?php
			$isRateFound = false;
			foreach($g as $gaji){
				if($total > $gaji->range_bawah && $total <= $gaji->range_atas ){
					$total2 = $total * ($gaji->rate_gaji/100);
					$rate_gaji = $gaji->rate_gaji;
					$gaji_bawah = $gaji->range_bawah;
					$gaji_atas = $gaji->range_atas;
					
					$isRateFound = true;
				} 
			}	
			
			// if rate found not found
			if(!$isRateFound){
				foreach($g as $gaji){
					if($total > $gaji->range_atas){
						$total2 = $total * ($gaji->rate_gaji/100);
						$rate_gaji = $gaji->rate_gaji;
						$gaji_bawah = $gaji->range_bawah;
						$gaji_atas = $gaji->range_atas;
						break;
					}
				}
			}
			
			print '<tr class="bg-black">';
			print '<td  class="table-danger borderless" colspan="3">Total</td><td>';
			echo 'Rp. ' . number_format( $total, 0 , '' , '.' ) ; 
			print '<tr class="bg-black">';
			print '<td  class="table-danger borderless" colspan="3">Range Gaji</td><td>';
			print 'Rp. ' . number_format( $gaji_bawah, 0 , '' , '.' ).' ~ '. number_format( $gaji_atas, 0 , '' , '.' ).' ('.$rate_gaji .'%)</td>';
			print '</tr>';
			print '<tr class="bg-black">';
			print '<td colspan="3">Gaji Kapster ('.$rate_gaji .'%)</td><td>';
			echo 'Rp. ' . number_format( $total2, 0 , '' , '.' ) ; 
			print '</td></tr>';
            ?></tbody></table><a href="<?php echo base_url(); ?>Salon3/Admin/createPDF" class="btn btn-primary pull-right" id="cmd"  target="_blank">Save PDF</a>
		</div>
      </div>
    </div>
</body>
</html>