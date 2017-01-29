<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class Kapster extends CI_Controller {
	public function index()
 {
		$this->load->model('Salon2/kapster_model');
		$this->load->model('Salon2/produk_model');
		$kapster = $this->kapster_model->loadData();
		$produkrambut = $this->produk_model->loadData("Perawatan Rambut");
		$produkwajah = $this->produk_model->loadData("Perawatan Wajah");
		$produktubuh = $this->produk_model->loadData("Perawatan Tubuh");
		$produkpaket = $this->produk_model->loadData("Paket");
		$this->load->vars('k', $kapster); 
		$this->load->vars('pr', $produkrambut); 
		$this->load->vars('pw', $produkwajah); 
		$this->load->vars('pt', $produktubuh); 
		$this->load->vars('pp', $produkpaket); 
		$this->load->view('Salon2/Kapster/Kapster_view');
 }
 public function logout() {
		$this->session->sess_destroy();
		redirect('Home');
	}


}