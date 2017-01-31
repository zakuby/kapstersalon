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
		margin: 10px;
		margin-left: 130px;
		max-width: 950px;
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
 <link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css/datepicker.css"; ?>">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
<script type="text/javascript" src="<?php echo base_url()."assets/js/jquery-3.1.1.min.js"; ?>"></script>
<script src="<?php echo base_url()."assets/bootstrap/js/bootstrap.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/js/bootstrap-datepicker.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/jsPDF-master/dist/jspdf.min.js"; ?>"></script>
<script type="text/javascript" src="<?php echo base_url()."assets/jsPDF-master/dist/jspdfautotable.js"; ?>"></script>
<script>
function tableToJson(table) {
    var data = [];

    // first row needs to be headers
    var headers = [];
    for (var i=0; i<table.rows[0].cells.length; i++) {
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi,'');
    }
    data.push(headers);
    // go through cells
    for (var i=1; i<table.rows.length; i++) {

        var tableRow = table.rows[i];
        var rowData = {};

        for (var j=0; j<tableRow.cells.length; j++) {

            rowData[ headers[j] ] = tableRow.cells[j].innerHTML;

        }

        data.push(rowData);
    }       

    return data;
}
function genPDF(e){
	e.preventDefault()
	var table = tableToJson($('#example2').get(0));
	var doc = new jsPDF('l','pt','letter',true);


	$.each(table, function(i, row){
		$.each(row, function(j,cell){
			if(j=="email" | j==1){
				doc.cell(1,10,190,20,cell,i);	
			}
			else{
				doc.cell(1,10,90,20,cell,i);
			}
		});
	});

doc.save('test.pdf');
}
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
      
      <div class="col-lg-11">
	  <h3>Report Cashier</h3><h5 class="text-right"><?php echo "Time Server " . date("d F Y") . "<br>";?></h5>
		<div class="box-body centerbox">
		<form name="formlist" method="post" action="<?php echo base_url(); ?>Salon1/Admin/list_transaksi_cashier">
			<label for="sel1">Nama Cashier</label> <br/>
            <select class="form-control" name="nama" id="asal" >
			<option value="<?php echo $_SESSION["nama"]?>"><?php echo $t[0]->nama_cashier?></option>
			    <?php
					foreach ($c as $cashier) {
						if($_SESSION["nama"]!=$cashier->id_cashier){
							echo "<option value='$cashier->id_cashier'>$cashier->nama_cashier</option>";
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
				  <th>Rate</th>
				  <th>Komisi</th>
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
                print "<td>";
				if($transaksi->rate_produk!=NULL){
					print $transaksi->rate_produk .'%</td>';
					print '<td>Rp. '. number_format( ($transaksi->harga * ($transaksi->rate_produk/100)), 0 , '' , '.' ) .'</td>';
					$total = $total + ($transaksi->harga * ($transaksi->rate_produk/100));
				}else{
					print $transaksi->rate_cashier .'%</td>';
					print '<td>Rp. '. number_format( ($transaksi->harga * ($transaksi->rate_cashier/100)), 0 , '' , '.' ) .'</td>';
					$total = $total + ($transaksi->harga * ($transaksi->rate_cashier/100));
				}				
				$total2 = $total2 + $transaksi->harga;
            }
			?>
			</tr>
			<?php
			print '<tr class="bg-black">';
			print '<td  class="table-danger borderless" colspan="3">Total</td><td>';
			echo 'Rp. ' . number_format( $total2, 0 , '' , '.' ) ; 
			print '</td><td colspan="2">'.$transaksi->rate_cashier .'%</td></tr>';
			print '<tr class="bg-black">';
			print '<td colspan="3">Gaji Cashier</td><td colspan="2">';
			echo 'Rp. ' . number_format( $total, 0 , '' , '.' ) ; 
			print '</td><td></td></tr>';
            ?></tbody></table><a href="<?php echo base_url(); ?>Salon1/Admin/createPDFCashier" class="btn btn-primary pull-right" id="cmd"  target="_blank">Save PDF</a>
		</div>
      </div>
    </div>
</body>
</html>