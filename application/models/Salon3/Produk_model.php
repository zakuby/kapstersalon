<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Produk_model extends CI_Model {
	public function __construct() {
        parent::__construct();
		}
	public function create(){
		$data = array('jenis_produk'=>$this->input->post('jenis_perawatan'),
						 'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga'=>$this->input->post('harga')
					);
		$this->db->insert('produk',$data);
	}
	public function special_create(){
		$data = array('jenis_produk'=>$this->input->post('jenis_perawatan'),
						 'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga'=>$this->input->post('harga'),
						 'rate'=>$this->input->post('rate')
					);
		$this->db->insert('produk',$data);
	}
	
	public function create_transaksi(){
		foreach($this->input->post("array_kapster") as $index => $kapster)  {
			$data = array('id_kapster'=>$kapster,
						   'id_produk'=>$this->input->post("array_product")[$index],
						   'id_cashier'=>$this->input->post("array_cashier")[$index],
						   'tanggal'=> date("Y-m-d")
					);
			$this->db->insert('transaksi3',$data);	
		}
	}
	
	public function loadData($jenis) {
		$this->db->where('jenis_produk', $jenis);
		$query = $this->db->get('produk');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}		
    }
	public function loadnamaData($jenis,$nama) {
		$this->db->where('jenis_produk', $jenis);
		$this->db->like('nama_produk', $nama);
		$query = $this->db->get('produk');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }
	public function loadTransaksi($nama,$first_date,$second_date){
    $this->db->select('t.id_transaksi, t.harga, t.id_kapster, t.id_produk, t.tanggal, k.nama_kapster, p.jenis_produk, p.nama_produk, p.rate as rate_produk ');
    $this->db->from('transaksi3 t');
    $this->db->join('kapster3 k','t.id_kapster = k.id_kapster', 'left outer');
    $this->db->join('produk p','t.id_produk = p.id_produk', 'left');
	$this->db->where('t.id_kapster',$nama);
	$first_date = DateTime::createFromFormat('d/m/Y', $first_date);
	$first_date = $first_date->format('Y-m-d');
	$second_date = DateTime::createFromFormat('d/m/Y', $second_date);
	$second_date = $second_date->format('Y-m-d');		
    $this->db->where('t.tanggal >=', $first_date);
	$this->db->where('t.tanggal <=', $second_date);
	$this->db->order_by('tanggal','ASC');
    $query = $this->db->get();
	if ($query->num_rows() > 0) {
		return $query->result();
	} else {
		return 0;
	}
    
  }
   	public function loadTransaksiCashier($nama,$first_date,$second_date){
    $this->db->select('t.id_transaksi, t.harga, t.id_cashier, t.id_produk, t.tanggal, c.nama_cashier, c.rate_cashier, p.jenis_produk, p.nama_produk, p.rate as rate_produk ');
    $this->db->from('transaksi3 t');
    $this->db->join('cashier3 c','t.id_cashier = c.id_cashier', 'left outer');
    $this->db->join('produk p','t.id_produk = p.id_produk', 'left');
	$this->db->where('t.id_cashier',$nama);
	$first_date = DateTime::createFromFormat('d/m/Y', $first_date);
	$first_date = $first_date->format('Y-m-d');
	$second_date = DateTime::createFromFormat('d/m/Y', $second_date);
	$second_date = $second_date->format('Y-m-d');		
    $this->db->where('t.tanggal >=', $first_date);
	$this->db->where('t.tanggal <=', $second_date);
	$this->db->order_by('tanggal','ASC');
    $query = $this->db->get();
	if ($query->num_rows() > 0) {
		return $query->result();
	} else {
		return 0;
	}
	} 
  function updateProduk($id){
	$data = array(	'nama_produk'=>$this->input->post('nama_perawatan'),
					'harga'=>$this->input->post('harga')
	);
	$this->db->where('id_produk', $id);
	$this->db->update('produk',$data);
	}
	function getProduk($id){
		$this->db->where('id_produk', $id);
       $query = $this->db->get('produk');
        return $query->result();
	 }

	function delete($id) {
	$this -> db -> where('id_produk',$id);
	return $this -> db -> delete('produk');
	}	
	function deleteTrans($id) {
	$this -> db -> where('id_produk',$id);
	return $this -> db -> delete('transaksi3');
	}
}
