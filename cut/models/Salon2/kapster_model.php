<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class kapster_model extends CI_Model {
	public function __construct() {
        parent::__construct();
		}
	public function create(){
		$data = array('nama_kapster'=>$this->input->post('nama_kapster'),
						 'rate_kapster'=>$this->input->post('rate')
					);
		$this->db->insert('kapster',$data);
	}
	public function createCashier(){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
					);
		$this->db->insert('cashier',$data);
	}
	public function loadData() {
		$query = $this->db->get('kapster');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }
	public function loadDataCashier() {
		$query = $this->db->get('cashier');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }	
	function updateKapster($id){
		$data = array(	'nama_kapster'=>$this->input->post('nama_kapster'),
					'rate_kapster'=>$this->input->post('rate')
		);
		$this->db->where('id_kapster', $id);
		$this->db->update('kapster',$data);
	}
	function updateCashier($id){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
		);
		$this->db->where('id_cashier', $id);
		$this->db->update('cashier',$data);
	}	
	function getKapster($id){
		$this->db->where('id_kapster', $id);
		$query = $this->db->get('kapster');
        return $query->result();
	 }
	function getCashier($id){
		$this->db->where('id_cashier', $id);
		$query = $this->db->get('cashier');
        return $query->result();
	 }	 
	function delete($id) {
	$this -> db -> where('id_kapster',$id);
	return $this -> db -> delete('kapster');
	}
	function deleteCashier($id) {
	$this -> db -> where('id_cashier',$id);
	return $this -> db -> delete('cashier');
	}
}