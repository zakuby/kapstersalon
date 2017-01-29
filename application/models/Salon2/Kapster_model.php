<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Kapster_model extends CI_Model {
	public function __construct() {
        parent::__construct();
		}
	public function create(){
		$data = array('nama_kapster'=>$this->input->post('nama_kapster'),
						 'rate_kapster'=>$this->input->post('rate')
					);
		$this->db->insert('kapster2',$data);
	}
	public function createCashier(){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
					);
		$this->db->insert('cashier2',$data);
	}
	public function loadData() {
		$query = $this->db->get('kapster2');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }
	public function loadDataCashier() {
		$query = $this->db->get('cashier2');
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
		$this->db->update('kapster2',$data);
	}
	function updateCashier($id){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
		);
		$this->db->where('id_cashier', $id);
		$this->db->update('cashier2',$data);
	}	
	function getKapster($id){
		$this->db->where('id_kapster', $id);
		$query = $this->db->get('kapster2');
        return $query->result();
	 }
	function getCashier($id){
		$this->db->where('id_cashier', $id);
		$query = $this->db->get('cashier2');
        return $query->result();
	 }	 
	function delete($id) {
	$this -> db -> where('id_kapster',$id);
	return $this -> db -> delete('kapster2');
	}
	function deleteCashier($id) {
	$this -> db -> where('id_cashier',$id);
	return $this -> db -> delete('cashier2');
	}
}
