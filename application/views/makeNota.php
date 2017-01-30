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
     $html = '<p style="text-align: center;">MICHIKA SALON<br>Jl. Apel Bunga Kembang No.47a</p><hr>';
     $this->writeHTMLCell($w = 0, $h = 0, $x = '', $y = '', $html, $border = 0, $ln = 1, $fill = 0, $reseth = true, $align = 'top', $autopadding = true);
  }
}
// create new PDF document
$width = 227;  
$height = 227; 
$pageLayout = array($width, $height); //  or array($height, $width) 
$pdf = new MYPDF('p', 'pt', $pageLayout, true, 'UTF-8', false);
$pdf->SetPrintFooter(false);
//$pdf = new MYPDF(PDF_PAGE_ORIENTATION, PDF_UNIT, PDF_PAGE_FORMAT, true, 'UTF-8', false);
// set document information
$pdf->SetCreator(PDF_CREATOR);
$pdf->SetAuthor('Admin');
$pdf->SetTitle('Nota');
$pdf->SetSubject('Nota');
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
// add a page
$pdf->AddPage();
$pdf->Write(0, '', '', 0, 'L', true, 0, false, false, 0);
$pdf->SetFont('helvetica', '', 7);
// -----------------------------------------------------------------------------
$tb1 = '<style>
	tr.border_bottom td {
		border-bottom:1pt solid black;
	}
	tr.border_top td {
		border-top:1pt solid black;
	}
	table { 
		border-spacing: 1.5px;
		border-collapse: separate;
	}
	td { 
		padding: 1.5px;
	}
</style>';
$kapster_explode = explode(",",$kapster);
$tb1 .= 'Cashier&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '.$nama_kasir;
$tb1 .= '<br>Kapster&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: ';
$i = 1;
date_default_timezone_set("Asia/Bangkok");
$kapster_count = count($kapster_explode);
foreach(array_slice($kapster_explode, 1) as $k)
{
	if($i == $kapster_count-1){
		$tb1 .= $k;
	}else{
		$tb1 .= $k .', ';
	}
	
	$i++;
};
$tb1 .= '<br>Customer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '.$nama_customer;
$tb1 .= '<br>Payment Type&nbsp;: '.$payment_method;
$tb1 .= '<br>Tanggal Transaksi&nbsp;: '.date("d F Y");
$tb1 .= '<br><br>
			<table border="0">
                <tr>
                  <th style="border-top:1pt solid black;">Nama Product</th>
				  <th style="border-top:1pt solid black;">Category</th>
				  <th style="border-top:1pt solid black;">Harga</th>
                </tr>';
$product_explode = explode(",",$product);
$harga_explode = explode(",",$harga);
$category_explode = explode(",",$category);
$total_item = 0;
foreach(array_slice($product_explode, 1) as $index => $p){
    $tb1 .= '<tr>';
    $tb1 .= '<td>'.$p.'</td>';
	$tb1 .= '<td>'.$category_explode[$index+1].'</td>';
    $tb1 .= '<td>'.$harga_explode[$index+1].'</td>';
	$tb1 .= '</tr>';
	$total_item++;
}
$total = (int)$total_harga;
if($persen_pajak!="kosong"){
	$pajak = ($total * ((int)$persen_pajak/100));
	$total = $total - $discount_harga;
	$total = $total + $pajak;	
	$tb1 .=  '<tr class="border_top">';
	$tb1 .=  '<td>Total Item</td>';
	$tb1 .=  '<td>'.$total_item.'</td>';
	$tb1 .=  '<td>Rp ' . number_format( $total, 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
	$tb1 .=  '<tr>';
	$tb1 .=  '<td colspan="2">Total Discount</td>';
	$tb1 .=  '<td>Rp '.number_format( $discount_harga, 0 , '' , '.' ).'</td>';
	$tb1 .=  '</tr>';	
	$tb1 .=  '<tr>';
	$tb1 .=  '<td colspan="2">Tunai</td>';
	$tb1 .=  '<td>Rp ' . number_format( $tunai, 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
	$tb1 .=  '<tr >';
	$tb1 .=  '<td colspan="2">Kembalian</td>';
	$tb1 .=  '<td>Rp ' . number_format( ($tunai-$total), 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
	$tb1 .=  '<tr>';
	$tb1 .=  '<td colspan="2" >PPN</td>';
	$tb1 .=  '<td>Rp '.number_format( $pajak, 0 , '' , '.' ).'</td>';
	$tb1 .=  '</tr>';
}else{
	$total = (int)$total_harga;
	$total = $total - $discount_harga;
	$tb1 .=  '<tr class="border_top">';
	$tb1 .=  '<td>Total Item</td>';
	$tb1 .=  '<td>'.$total_item.'</td>';
	$tb1 .=  '<td>Rp ' . number_format( $total, 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
	$tb1 .=  '<tr>';
	$tb1 .=  '<td colspan="2">Total Discount</td>';
	$tb1 .=  '<td>Rp '.number_format( $discount_harga, 0 , '' , '.' ).'</td>';
	$tb1 .=  '</tr>';	
	$tb1 .=  '<tr>';
	$tb1 .=  '<td colspan="2">Tunai</td>';
	$tb1 .=  '<td>Rp ' . number_format( $tunai, 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
	$tb1 .=  '<tr >';
	$tb1 .=  '<td colspan="2">Kembalian</td>';
	$tb1 .=  '<td>Rp ' . number_format( ($tunai-$total), 0 , '' , '.' ) .'</td>';
	$tb1 .=  '</tr>';
}
	
$tb1 .= '</table>';
$tb1 .= '<br><p style="text-align: center;">Terimakasih.</p>';
$pdf->writeHTML($tb1, true, false, false, false, '');

// -----------------------------------------------------------------------------

//Close and output PDF document
$pdf->Output('nota.pdf', 'I');

//============================================================+
// END OF FILE
//============================================================+
