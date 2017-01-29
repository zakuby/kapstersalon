<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

	class User_model extends CI_Model {

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
			$this->db->insert('kapster',$data);
		}
		public function create_pasien(){
			$data = array('First_Name'=>$this->input->post('First_Name'),
						  'Last_Name'=>$this->input->post('Last_Name'),
						  'Alamat'=>$this->input->post('Alamat'),
						  'Kota'=>$this->input->post('Kota'),
						  'Propinsi'=>$this->input->post('Propinsi'),
						  'Jenis_Kelamin'=>$this->input->post('Jenis_kelamin'),
						  'Username'=>$this->input->post('Username'),
						  'Password'=>MD5($this->input->post('Password')),
						  'Tanggal_Lahir'=>$this->input->post('Hari')." ".$this->input->post('Bulan')." ".$this->input->post('Tahun') ,
						  'Email'=>$this->input->post('Email'),
						  'Level'=>1
						  );
			$this->db->insert('user',$data);
		}
		public function create_dokter(){
			$data = array('First_Name'=>$this->input->post('First_Name'),
						  'Last_Name'=>$this->input->post('Last_Name'),
						  'Alamat'=>$this->input->post('Alamat'),
						  'Kota'=>$this->input->post('Kota'),
						  'Propinsi'=>$this->input->post('Propinsi'),
						  'Spesialis'=>$this->input->post('Spesialis'),
						  'Jenis_Kelamin'=>$this->input->post('Jenis_kelamin'),
						  'Username'=>$this->input->post('Username'),
						  'Password'=>MD5($this->input->post('Password')),
						  'Tanggal_Lahir'=>$this->input->post('Hari')." ".$this->input->post('Bulan')." ".$this->input->post('Tahun') ,
						  'Email'=>$this->input->post('Email'),
						  'File'=>$this->input->post('Dokumen'),
						  'Level'=>2
						  );
			$this->db->insert('konfirmasi_dokter',$data);
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
		
		public function create_janji($usernameDK){
			$data = array('Dokter'=>$this->db->get_where('user',$usernameDK),
						  'Tanggal_Janji'=>$this->input->post('tanggal'),
						  'Jam_Janji'=>$this->input->post('jam'),
						  'Pasien'=>$this->session->userdata('Username')																  
						 ) ;
			$this->db->insert('janji',$data);
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

    	public function loadDataDokter() {	
				$this->db->where('Level', 2);			
			   $query = $this->db->get('user');
				return $query->result();
			}
		public function loadDataProfil($username) {
		$this->db->where('Username', $username);
       $query = $this->db->get('user');
        return $query->result();
    }

    	public function getall() {
       $query = $this->db->get('konfirmasi_dokter');
        return $query->result();
    }
	
		Public function delete($username) {
		$this -> db -> where('Username',$username);
		return $this -> db -> delete('user');
	}

		Public function deleteUser($username) {
		$this -> db -> where('Username',$username);
		return $this -> db -> delete('konfirmasi_dokter');
	}

		public function addUser($data){
			$datas = array('First_Name'=>$data['ffn'],
						  'Last_Name'=>$data['fln'],
						  'Alamat'=>$data['fAlamat'],
						  'Kota'=>$data['fKota'],
						  'Propinsi'=>$data['fPropinsi'],
						  'Spesialis'=>$data['fSpesialis'],
						  'Jenis_Kelamin'=>$data['fjk'],
						  'Username'=>$data['fUname'],
						  'Password'=>$data['fpass'],
						  'Tanggal_Lahir'=>$data['ftl'],
						  'Email'=>$data['femail'],
						  'Level'=>$data['flvl']
						  );

			$this->db->insert('user',$datas);
		}

		Public function Search($spesialis){
			$this->db->where('Spesialis', $spesialis);
			$query = $this->db->get('user');
			return $query->result();
		}
		public function update($data){        
        $arr = array(        
            'First_Name' => $data['nama_depan'],
            'Last_Name' => $data['nama_belakang'],
			'Alamat' => $data['alamat'],
			'Spesialis' => $data['spesialis'],
			'Jenis_Kelamin' => $data['jenis_kelamin'],
			'Username' => $data['username'],			
			'Email' => $data['email']   
        );
		
		$this->db->where('Username', $data['username']);
	$this->db->update('user',$arr);
	 }

		function getByUsername($username) {
         $query = $this->db->get_where('konfirmasi_dokter',array('Username'=>$username));
	 	return $query->row_array();
	     }

		public function getbyuser($dokter){
		$query = $this->db->get_where('user',array('Username'=>$dokter));
	 	return $query->row_array();
		}
}