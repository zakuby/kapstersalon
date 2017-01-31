<?php
//============================================================+
// File name   : example_048.php
// Begin       : 2009-03-20
// Last Update : 2013-05-14
//
// Description : Example 048 for TCPDF class
//               HTML tables and table headers
//
// Author: Nicola Asuni
//
// (c) Copyright:
//               Nicola Asuni
//               Tecnick.com LTD
//               www.tecnick.com
//               info@tecnick.com
//============================================================+

/**
 * Creates an example PDF TEST document using TCPDF
 * @package com.tecnick.tcpdf
 * @abstract TCPDF - Example: HTML tables and table headers
 * @author Nicola Asuni
 * @since 2009-03-20
 */

// Include the main TCPDF library (search for installation path).
class MYPDF extends TCPDF {

  public function Header(){
     $html = '<b>Salon Kapster 2 <br>Gaji Kapster</b> <br><p style="border-bottom: 2px solid black;"></p>';
     $this->writeHTMLCell($w = 0, $h = 0, $x = '', $y = '', $html, $border = 0, $ln = 1, $fill = 0, $reseth = true, $align = 'top', $autopadding = true);
  }
}

// create new PDF document
$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);

// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Admin');
$pdf->SetTitle('Gaji Kapster');
$pdf->SetSubject('Gaji Kpester');
$pdf->SetKeywords('TCPDF, PDF, example, test, guide');

// set default header data
$pdf->SetHeaderData(PDF_HEADER_LOGO, PDF_HEADER_LOGO_WIDTH, PDF_HEADER_TITLE.'', PDF_HEADER_STRING);

// set header and footer fonts
$pdf->setHeaderFont(Array(PDF_FONT_NAME_MAIN, '', PDF_FONT_SIZE_MAIN));
$pdf->setFooterFont(Array(PDF_FONT_NAME_DATA, '', PDF_FONT_SIZE_DATA));

// set default monospaced font
$pdf->SetDefaultMonospacedFont(PDF_FONT_MONOSPACED);

// set margins
$pdf->SetMargins(PDF_MARGIN_LEFT, PDF_MARGIN_TOP, PDF_MARGIN_RIGHT);
$pdf->SetHeaderMargin(PDF_MARGIN_HEADER);
$pdf->SetFooterMargin(PDF_MARGIN_FOOTER);

// set auto page breaks
$pdf->SetAutoPageBreak(TRUE, PDF_MARGIN_BOTTOM);

// set image scale factor
$pdf->setImageScale(PDF_IMAGE_SCALE_RATIO);

// set some language-dependent strings (optional)
if (@file_exists(dirname(__FILE__).'/lang/eng.php')) {
	require_once(dirname(__FILE__).'/lang/eng.php');
	$pdf->setLanguageArray($l);
}

// ---------------------------------------------------------

// set font
$pdf->SetFont('helvetica', 'B', 20);

// add a page
$pdf->AddPage();

$pdf->Write(0, '', '', 0, 'L', true, 0, false, false, 0);

$pdf->SetFont('helvetica', '', 10);

// -----------------------------------------------------------------------------

$tb1 = '<style>
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
		border: none;
		background-color: #ffffee;
	}
.bg-black {
  color: #ffffff;
}
</style>
Nama Kapster : ';

$tb1 .= $k[0]->nama_kapster;
$myDateTime1 = DateTime::createFromFormat('d/m/Y', $_SESSION["first_date"]);
$myDateTime2 = DateTime::createFromFormat('d/m/Y', $_SESSION["second_date"]);
$newDateString1 = $myDateTime1->format('d F Y');
$newDateString2 = $myDateTime2->format('d F Y');
$tb1 .= '<br>Start Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '.$newDateString1;
$tb1 .= '<br>End Date&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '.$newDateString2;
$tb1 .= '<br>Rate Kapster&nbsp;&nbsp;&nbsp;: '.$k[0]->rate_kapster.'%';
$tb1 .= '<br><br><br><br><table border="1" id="example2" class="table ">
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
             <tbody>';
$total = 0;		
$total2 = 0;	 
foreach($t as $transaksi){
    $tb1 .= '<tr>';
    $tb1 .= '<td border-style:none>'.date("d F Y", strtotime($transaksi->tanggal)).'</td>';
    $tb1 .= '<td>'.$transaksi->jenis_produk.'</td>';
	$tb1 .= '<td>'.$transaksi->nama_produk.'</td>';
    $tb1 .= '<td>Rp. '.number_format( $transaksi->harga, 0 , '' , '.' ) .'</td>';

	if($transaksi->rate_produk!=NULL){
		$tb1 .= '<td>'.$transaksi->rate_produk .'%</td>';
		$tb1 .= '<td>Rp. '. number_format( ($transaksi->harga * ($transaksi->rate_produk/100)), 0 , '' , '.' ) .'</td>';
		$total = $total + ($transaksi->harga * ($transaksi->rate_produk/100));
	}else{
		$tb1 .= '<td>'.$transaksi->rate_kapster .'%</td>';
		$tb1 .= '<td>Rp. '. number_format( ($transaksi->harga * ($transaksi->rate_kapster/100)), 0 , '' , '.' ) .'</td>';
		$total = $total + ($transaksi->harga * ($transaksi->rate_kapster/100));
	}
	
	$tb1 .= '</tr>';	
	$total2 = $total2 + $transaksi->harga;
}
$tb1 .=  '<tr class="bg-black">';
$tb1 .=  '<td bgcolor="#8e8d8d" class="table-danger borderless" colspan="3">Total</td>';
$tb1 .=  '<td bgcolor="#8e8d8d">Rp. ' . number_format( $total2, 0 , '' , '.' ) .'</td>';
$tb1 .= '<td bgcolor="#8e8d8d" colspan="2">'.$transaksi->rate_kapster .'%</td>';
$tb1 .=  '</tr>';
$tb1 .=  '<tr class="bg-black">';
$tb1 .=  '<td  bgcolor="#8e8d8d" colspan="3">Gaji Kapster</td>';
$tb1 .=  '<td  bgcolor="#8e8d8d" colspan="3">Rp. ' . number_format( $total, 0 , '' , '.' ).'</td>';
$tb1 .=  '</tr>';		
$tb1 .= '</tbody></table>';
$pdf->writeHTML($tb1, true, false, false, false, '');

// -----------------------------------------------------------------------------

//Close and output PDF document
$pdf->Output('gaji_kapster.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
