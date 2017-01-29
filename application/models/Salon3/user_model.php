<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class user_model extends CI_Model {

		public function __construct() {
        parent::__construct();
		}
		public function cek_user($data) {
			$query = $this->db->get_where('user', $data);
			return $query;
		}
		public function createKapster(){
			$data = array('nama_kapster'=>$this->input->post('nama_kapster'),
						  'rate_kapster'=>$this->input->post('rate')
						  );
			$this->db->insert('kapster3',$data);
		}
		public function register($data) {
			$data['password'] = md5($data['password']);
			$data['level'] = 2;
			$this->db->set($data);
			$this->db->insert('user',$data);
			if($this->db->affected_rows() > 0) {
				return 1;
			} else {
				$this->session->set_flashdata('message', 'Gagal mendaftar '.$this->db->error()['message']);
				return 0;
			} 
		}		
		

		public function login($Username, $Password) {
			$pass = md5($Password);
		$this->db->from('user');
        $this->db->where('Username', $Username);
        $this->db->where('Password', $pass);
        $result = $this->db->get();
        if ($result->num_rows() == 1) {
            return $result->row(7)->Username;
        } else {
            return false;
        }
    }
		
		public function get_level($id){
			$this->db->from('user');
			$this->db->where('Username', $id);
			$query = $this->db->get();
			return $query->row(11)->Level;
		}
		
		public function loadData() {
		$this->db->where('Level', 1);
		$this->db->or_where('Level', 2);
		$query = $this->db->get('user');
        return $query->result();
    }

	
		Public function delete($username) {
		$this -> db -> where('Username',$username);
		return $this -> db -> delete('user');
	}


}