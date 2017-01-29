<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class user_model extends CI_Model {

		public function __construct() {
        parent::__construct();
		}
		public function register($data) {
			$data['password'] = md5($data['password']);
			$data['level'] = 1;
			$this->db->set($data);
			if($this->db->insert('user',$data)) {
				$this->session->set_flashdata('message', 'Berhasil mendaftar '.$this->db->error()['message']);
				return 1;
			} else {
				$this->session->set_flashdata('message', 'Gagal mendaftar '.$this->db->error()['message']);
				return 0;
			} 
		}
		public function register2($data) {
			$data['password'] = md5($data['password']);
			$data['level'] = 1;
			$this->db->set($data);
			if($this->db->insert('user2',$data)) {
				$this->session->set_flashdata('message', 'Berhasil mendaftar '.$this->db->error()['message']);
				return 1;
			} else {
				$this->session->set_flashdata('message', 'Gagal mendaftar '.$this->db->error()['message']);
				return 0;
			} 
		}			
		public function register3($data) {
			$data['password'] = md5($data['password']);
			$data['level'] = 1;
			$this->db->set($data);
			if($this->db->insert('user3',$data)) {
				$this->session->set_flashdata('message', 'Berhasil mendaftar '.$this->db->error()['message']);
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
		public function login2($Username, $Password) {
			$pass = md5($Password);
		$this->db->from('user2');
        $this->db->where('Username', $Username);
        $this->db->where('Password', $pass);
        $result = $this->db->get();
        if ($result->num_rows() == 1) {
            return $result->row(7)->Username;
        } else {
            return false;
        }
		}
		public function login3($Username, $Password) {
			$pass = md5($Password);
		$this->db->from('user3');
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
		public function get_level2($id){
			$this->db->from('user2');
			$this->db->where('Username', $id);
			$query = $this->db->get();
			return $query->row(11)->Level;
		}		
		public function get_level3($id){
			$this->db->from('user3');
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