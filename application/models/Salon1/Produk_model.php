<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Produk_model extends CI_Model {
	public function __construct() {
        parent::__construct();
		}
	public function create(){
		$data = array('jenis_produk'=>$this->input->post('jenis_perawatan'),
						 'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga_SS'=>$this->input->post('harga_SS'),
						 'harga_S'=>$this->input->post('harga_S'),
						 'harga_M'=>$this->input->post('harga_M'),
						 'harga_L'=>$this->input->post('harga_L')
					);
		$this->db->insert('produk',$data);
		if($this->db->affected_rows() > 0) {
			return 1;
		} else {
			return 0;
		}
	}
	public function special_create(){
		$data = array('jenis_produk'=>$this->input->post('jenis_perawatan'),
						 'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga_SS'=>$this->input->post('harga_SS'),
						 'harga_S'=>$this->input->post('harga_S'),
						 'harga_M'=>$this->input->post('harga_M'),
						 'harga_L'=>$this->input->post('harga_L')
					);
		$this->db->insert('produk',$data);
	}
	
	public function create_transaksi(){
		foreach($this->input->post("array_kapster") as $index => $kapster)  {
			$data = array('id_kapster'=>$kapster,
						   'id_produk'=>$this->input->post("array_product")[$index],
						   'id_cashier'=>$this->input->post("array_cashier")[$index],
						   'harga'=>$this->input->post("array_harga")[$index],
						   'tanggal'=> date("Y-m-d")
					);
			$this->db->insert('transaksi',$data);	
		}

	}
	public function create_diskon(){
		$data = array('id_cashier'=>$this->input->post("cashier_name"),
					   'discount'=>$this->input->post("total_discount"),
					   'tanggal'=> date("Y-m-d")
				);
		$this->db->insert('discount_cashier',$data);	

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
    $this->db->select('t.id_transaksi, t.harga, t.id_kapster, t.id_produk, t.tanggal, k.nama_kapster, k.rate_kapster, p.jenis_produk, p.nama_produk, p.rate as rate_produk ');
    $this->db->from('transaksi t');
    $this->db->join('kapster k','t.id_kapster = k.id_kapster', 'left outer');
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
    $this->db->from('transaksi t');
    $this->db->join('cashier c','t.id_cashier = c.id_cashier', 'left outer');
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
	if($this->input->post('rate')!=""){
		$data = array(	'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga_SS'=>$this->input->post('harga_SS'),
						 'harga_S'=>$this->input->post('harga_S'),
						 'harga_M'=>$this->input->post('harga_M'),
						 'harga_L'=>$this->input->post('harga_L'),
						 'rate'=>$this->input->post('rate'),
		);		
	}else{
		$data = array(	'nama_produk'=>$this->input->post('nama_perawatan'),
						 'harga_SS'=>$this->input->post('harga_SS'),
						 'harga_S'=>$this->input->post('harga_S'),
						 'harga_M'=>$this->input->post('harga_M'),
						 'harga_L'=>$this->input->post('harga_L')
		);		
	}

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
	return $this -> db -> delete('transaksi');
	}
}
