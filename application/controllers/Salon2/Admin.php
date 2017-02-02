<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Admin extends CI_Controller {


 public function index()
 {
	 if($this->session->userdata('Level')==3 &&  $_SESSION["salon"]==3){
		$this->load->model('Salon2/kapster_model');
		$this->load->model('Salon2/produk_model');
		$kapster = $this->kapster_model->loadData();
		$cashier = $this->kapster_model->loadDataCashier();
		$produkrambut = $this->produk_model->loadData("Perawatan Rambut");
		$produkwajah = $this->produk_model->loadData("Perawatan Wajah");
		$produktubuh = $this->produk_model->loadData("Perawatan Tubuh");
		$produkpaket = $this->produk_model->loadData("Paket");
		$this->load->vars('k', $kapster); 
		$this->load->vars('c', $cashier); 
		$this->load->vars('pr', $produkrambut); 
		$this->load->vars('pw', $produkwajah); 
		$this->load->vars('pt', $produktubuh); 
		$this->load->vars('pp', $produkpaket); 
		$this->load->view('Salon2/Admin/Admin_view');
	 }else{
		redirect('Home','refresh');
	 }
 }
  public function list_produk()
 {
	 if($this->session->userdata('Level')==3 &&  $_SESSION["salon"]==3){
		$this->load->view('Salon2/Admin/list.php');
	 }else{
		redirect('Home','refresh');
	 }
 }
   public function report_kapster()
 {
	 if($this->session->userdata('Level')==3 &&  $_SESSION["salon"]==3){
		$this->load->model('Salon2/kapster_model');
		$kapster = $this->kapster_model->loadData();
		$this->load->vars('k', $kapster);
		$this->load->view('Salon2/Admin/report.php');
	 }else{
		redirect('Home','refresh');
	 }
 }
    public function report_cashier()
 {
	 if($this->session->userdata('Level')==3 &&  $_SESSION["salon"]==3){
		$this->load->model('Salon2/kapster_model');
		$cashier = $this->kapster_model->loadDataCashier();
		$this->load->vars('c', $cashier);
		$this->load->view('Salon2/Admin/reportc.php');
	 }else{
		redirect('Home','refresh');
	 }
 }
  public function register_produk()
 {
	 if($this->session->userdata('Level')==3 &&  $_SESSION["salon"]==3){
		$this->load->view('Salon2/Admin/register.php');
	 }else{
		redirect('Home','refresh');
	 }
 }
   public function registerProduk($jenis)
 {
	 $_SESSION["jenis"]=$jenis;
	 $this->load->view('Salon2/Admin/newregister.php');
 }
	public function list_produks(){
		if(isset($_POST["pilihan2"])){
			$_SESSION["produk"] = $this->input->post('pilihan2');
		}
		$this->load->model('Salon2/produk_model');
		if(isset($_POST["nama_produk"])){
			if($produk = $this->produk_model->loadnamaData($_SESSION["produk"],$_POST["nama_produk"])){
				$this->load->vars('p', $produk);
				$this->load->view('Salon2/Admin/list_produk.php');		
			}else{
				?><script>alert("Product tidak ditemukan");</script><?php
				redirect('Salon2/Admin/list_produk','refresh');					
			}
	
		}else{
			if($produk = $this->produk_model->loadData($_SESSION["produk"])){
				$this->load->vars('p', $produk);
				$this->load->view('Salon2/Admin/list_produk.php');
			}else{
				?><script>alert("Product tidak ditemukan");</script><?php
				redirect('Salon2/Admin/list_produk','refresh');	
			}

		}

	}
	
	public function list_kapster(){
		$this->load->model('Salon2/kapster_model');
        if($kapster = $this->kapster_model->loadData()){
			 $this->load->vars('k', $kapster);
			$this->load->view('Salon2/Admin/list_kapster.php');
		}else{
			?><script>alert("Kapster tidak ditemukan");</script><?php
			redirect('Salon2/Admin/list_produk','refresh');				
		}

	}
	public function list_cashier(){
		$this->load->model('Salon2/kapster_model');
        if($cashier = $this->kapster_model->loadDataCashier()){
			 $this->load->vars('c', $cashier);
			$this->load->view('Salon2/Admin/list_cashier.php');
		}else{
			?><script>alert("Cashier tidak ditemukan");</script><?php
			redirect('Salon2/Admin/list_produk','refresh');				
		}

	}	
	public function list_transaksi(){
		if(isset($_POST["nama"])){
			$_SESSION["nama"] = $this->input->post('nama');
		}
		if(isset($_POST["date1"])){
			$_SESSION["first_date"] = $this->input->post('date1');
		}
		if(isset($_POST["date2"])){
			$_SESSION["second_date"] = $this->input->post('date2');
		}		
		$this->load->model('Salon2/produk_model');
		$this->load->model('Salon2/kapster_model');
		if($transaksi = $this->produk_model->loadTransaksi($_SESSION["nama"],$_SESSION["first_date"],$_SESSION["second_date"])){
			$this->load->vars('t', $transaksi);
			$kapster = $this->kapster_model->loadData();
			$this->load->vars('k', $kapster);
			$this->load->view('Salon2/Admin/reports.php');
		}else{
			?><script>alert("Transaksi tidak ditemukan");</script><?php
			redirect('Salon2/Admin/report_kapster','refresh');
		}
	}
	public function list_transaksi_cashier(){
		if(isset($_POST["nama"])){
			$_SESSION["nama"] = $this->input->post('nama');
		}
		if(isset($_POST["date1"])){
			$_SESSION["first_date"] = $this->input->post('date1');
		}
		if(isset($_POST["date2"])){
			$_SESSION["second_date"] = $this->input->post('date2');
		}		
		$this->load->model('Salon2/produk_model');
		$this->load->model('Salon2/kapster_model');
		if($transaksi = $this->produk_model->loadTransaksiCashier($_SESSION["nama"],$_SESSION["first_date"],$_SESSION["second_date"])){
			$this->load->vars('t', $transaksi);
			$discount = $this->produk_model->loadDiscount($_SESSION["nama"],$_SESSION["first_date"],$_SESSION["second_date"]);
			$cashier = $this->kapster_model->loadDataCashier();
			$this->load->vars('c', $cashier);
			$this->load->vars('d', $discount);
			$this->load->view('Salon2/Admin/report_cashier.php');
		}else{
			?><script>alert("Transaksi tidak ditemukan");</script><?php
			redirect('Salon2/Admin/report_cashier','refresh');
		}
	}
	public function hapusProduk($idproduk) {
		$this->load->model('Salon2/produk_model');
		$this->produk_model->delete($idproduk);
		$this->load->model('Salon2/produk_model');
		$this->produk_model->deleteTrans($idproduk);
		redirect("Salon2/Admin/list_produks", 'refresh');
	}
	public function hapusKapster($idkapster) {
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->delete($idkapster);
		redirect("Admin/list_kapster", 'refresh');
	}
	public function hapusCashier($idkapster) {
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->deleteCashier($idkapster);
		redirect("Admin/list_cashier", 'refresh');
	}	
	public function tambah_kapster(){
		$this->load->database();
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->create();
		?><script>alert("Kapster Berhasil Ditambahkan");</script><?php
		redirect('Salon2/Admin/register_produk','refresh');
	}
	public function tambah_cashier(){
		$this->load->database();
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->createCashier();
		?><script>alert("Cashier Berhasil Ditambahkan");</script><?php
		redirect('Salon2/Admin/register_produk','refresh');
	}	
	public function tambah_produk(){
		$this->load->database();
		$this->load->model('Salon2/produk_model');
		if($this->produk_model->create()){
			?><script>alert("Product Berhasil Ditambahkan");</script><?php
		}else{
			?><script>alert("Product Gagal Ditambahkan");</script><?php
		}
		redirect('Salon2/Admin/register_produk','refresh');
	}	
	public function tambah_specialproduk(){
	 $this->load->database();
	 $this->load->model('Salon2/produk_model');
	 $this->produk_model->special_create();
	 ?><script>alert("Product Berhasil Ditambahkan");</script><?php
	 redirect('Salon2/Admin/register_produk','refresh');
	}
	
	public function editProduk($id){
	 $this->load->database();
	 $this->load->model('Salon2/produk_model');
	 $produk = $this->produk_model->getProduk($id);
	 $this->load->vars('p', $produk);
	 $this->load->view('Salon2/Admin/edit_produk.php');
	}
	public function editKapster($id){
	 $this->load->database();
	 $this->load->model('Salon2/kapster_model');
	 $kapster = $this->kapster_model->getKapster($id);
	 $this->load->vars('k', $kapster);
	 $this->load->view('Salon2/Admin/edit_kapster.php');
	}
	public function editCashier($id){
	 $this->load->database();
	 $this->load->model('Salon2/kapster_model');
	 $cashier = $this->kapster_model->getCashier($id);
	 $this->load->vars('c', $cashier);
	 $this->load->view('Salon2/Admin/edit_cashier.php');
	}	
	public function tambah_transaksi(){
	 $this->load->database();
	 $this->load->model('Salon2/produk_model');
	 $this->produk_model->create_transaksi();
	 $this->produk_model->create_diskon();
	 redirect('Salon2/Admin/index','refresh');
	}
	public function updateProduk($id){
		if(isset($_POST["pilihan2"])){
			$_SESSION["produk"] = $this->input->post('pilihan2');
		}
		$this->load->model('Salon2/produk_model');
		$this->produk_model->updateProduk($id);
		redirect('Salon2/Admin/list_produks','refresh');
	}
	public function updateKapster($id){
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->updateKapster($id);
		redirect('Salon2/Admin/list_kapster','refresh');
	}
	public function updateCashier($id){
		$this->load->model('Salon2/kapster_model');
		$this->kapster_model->updateCashier($id);
		redirect('Salon2/Admin/list_cashier','refresh');
	}	
	public function logout() {
		$this->session->sess_destroy();
		redirect('Home');
	}
	public function createPDF(){
		$this->load->model('Salon2/produk_model');
		$this->load->model('Salon2/kapster_model');
		$transaksi = $this->produk_model->loadTransaksi($_SESSION["nama"],$_SESSION["first_date"],$_SESSION["second_date"]);
		$this->load->vars('t', $transaksi);
		$kapster = $this->kapster_model->getKapster($_SESSION["nama"]);
		$this->load->vars('k', $kapster);
		$this->load->library('Pdf');
		$this->load->view('Salon2/makepdf.php');
	}
	public function createPDFCashier(){
		$this->load->model('Salon2/produk_model');
		$this->load->model('Salon2/kapster_model');
		$transaksi = $this->produk_model->loadTransaksiCashier($_SESSION["nama"],$_SESSION["first_date"],$_SESSION["second_date"]);
		$this->load->vars('t', $transaksi);
		$cashier = $this->kapster_model->getCashier($_SESSION["nama"]);
		$this->load->vars('c', $cashier);
		$this->load->library('Pdf');
		$this->load->view('Salon2/makepdfC.php');
	}	
}