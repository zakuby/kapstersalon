<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class kapster_model extends CI_Model {
	public function __construct() {
        parent::__construct();
		}
	public function create(){
		$data = array('nama_kapster'=>$this->input->post('nama_kapster')
					);
		$this->db->insert('kapster3',$data);
	}
	public function createCashier(){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
					);
		$this->db->insert('cashier3',$data);
	}	
	public function createRange(){
		$this->db->select('range_atas, range_bawah, rate_gaji, id_range');
		$this->db->from('range_gaji');
		$this->db->where('rate_gaji',$this->input->post('rate_gaji'));
		$query = $this->db->get();
		if($query->num_rows() > 0){			
			return false;
		}else{
			$data = array('range_atas'=>$this->input->post('range_atas'),
					'range_bawah'=>$this->input->post('range_bawah'),
					'rate_gaji'=>$this->input->post('rate_gaji')
				);
			$this->db->insert('range_gaji',$data);
			return true;			
		}


	}
	public function loadData() {
		$query = $this->db->get('kapster3');
		
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }
	public function loadDataCashier() {
		$query = $this->db->get('cashier3');
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }	
	public function loadRange() {
		$this->db->select('range_atas, range_bawah, rate_gaji, id_range');
		$this->db->from('range_gaji');
		$this->db->order_by('range_atas','DESC');
		$query = $this->db->get();
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }
	public function loadRange2() {
		$this->db->select('range_atas, range_bawah, rate_gaji, id_range');
		$this->db->from('range_gaji');
		$this->db->order_by('range_atas','ASC');
		$query = $this->db->get();
		if ($query->num_rows() > 0) {
			return $query->result();
		} else {
			return 0;
		}	
    }	
	function updateKapster($id){
		$data = array(	'nama_kapster'=>$this->input->post('nama_kapster')
		);
		$this->db->where('id_kapster', $id);
		$this->db->update('kapster3',$data);
	}
	function updateCashier($id){
		$data = array('nama_cashier'=>$this->input->post('nama_cashier'),
						 'rate_cashier'=>$this->input->post('rate')
		);
		$this->db->where('id_cashier', $id);
		$this->db->update('cashier3',$data);
	}		
	function getKapster($id){
		$this->db->where('id_kapster', $id);
		$query = $this->db->get('kapster3');
        return $query->result();
	 }
	function getCashier($id){
		$this->db->where('id_cashier', $id);
		$query = $this->db->get('cashier3');
        return $query->result();
	 }	 
	function delete($id) {
	$this -> db -> where('id_kapster',$id);
	return $this -> db -> delete('kapster3');
	}
	function updateRange($id){
		$data = array('range_atas'=>$this->input->post('range_atas'),
						'range_bawah'=>$this->input->post('range_bawah'),
						'rate_gaji'=>$this->input->post('rate_gaji')
		);
		$this->db->where('id_range', $id);
		$this->db->update('range_gaji',$data);
	}
	function getRange($id){
		$this->db->where('id_range', $id);
		$query = $this->db->get('range_gaji');
        return $query->result();
	 }
	function deleteRange($id) {
	$this -> db -> where('id_range',$id);
	return $this -> db -> delete('range_gaji');
	}
	function deleteCashier($id) {
	$this -> db -> where('id_cashier',$id);
	return $this -> db -> delete('cashier3');
	}	
}