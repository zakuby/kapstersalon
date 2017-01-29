<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class Home extends CI_Controller {
 
 public function index()
 {
	 if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3 &&  $_SESSION["salon"]==1){
			redirect('Salon1/Admin');
		}else if($_SESSION["Level"] == 1 && $_SESSION["salon"]==1){
			redirect('Salon1/Kapster');
		}else if($_SESSION["Level"] == 3 && $_SESSION["salon"]==2){
			redirect('Salon3/Admin');
		}else if($_SESSION["Level"] == 1 && $_SESSION["salon"]==2){
			redirect('Salon3/Kapster');
		}else if($_SESSION["Level"] == 3 && $_SESSION["salon"]==3){
			redirect('Salon2/Admin');
		}else if($_SESSION["Level"] == 1 && $_SESSION["salon"]==3){
			redirect('Salon2/Kapster');
		}
	}else{
		$this->load->view('Home/Home_view');
	}
 }
 public function register() {
    if($this->session->has_userdata('user'))
      redirect('home/', 'location');
    
    if( !empty($this->input->post('username')) &&
        !empty($this->input->post('password')) )  {
      $data = array('username'=>$this->input->post('username'),
                    'password'=>$this->input->post('password')
      );      
      
      $this->load->model('user_model');
      
      if(!$this->user_model->register($data)) {
        ?>
				 <script type="text/javascript">
     			alert("Gagal mendaftar!");
     			</script>
		<?php
        $this->load->view('registrasi');
      } else {
        ?>
				 <script type="text/javascript">
     			alert("Berhasil mendaftar!");
     			</script>
		<?php
        $this->load->view('registrasi');
      }
    } else
 $this->load->view('registrasi');}
	
 public function register2() {
    if($this->session->has_userdata('user'))
      redirect('home/', 'location');
    
    if( !empty($this->input->post('username')) &&
        !empty($this->input->post('password')) )  {
      $data = array('username'=>$this->input->post('username'),
                    'password'=>$this->input->post('password')
      );      
      
      $this->load->model('user_model');
      
      if(!$this->user_model->register2($data)) {
        ?>
				 <script type="text/javascript">
     			alert("Gagal mendaftar!");
     			</script>
		<?php
        $this->load->view('registrasi2');
      } else {
        ?>
				 <script type="text/javascript">
     			alert("Berhasil mendaftar!");
     			</script>
		<?php
        $this->load->view('registrasi2');
      }
    } else
      $this->load->view('registrasi2');
	}	
 public function login()
 {
	if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3){
			redirect('Salon1/Admin');
		}else if($_SESSION["Level"] == 1){
			redirect('Salon1/Kapster');
		}
	}else{
		$this->load->view('Home/login');
	}
 }
 public function login2()
 {
	if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3){
			redirect('Salon3/Admin');
		}else if($_SESSION["Level"] == 1){
			redirect('Salon3/Kapster');
		}
  
	}else{
		$this->load->view('Home/login2');
	}
 }
 public function login3()
 {
	if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3){
			redirect('Salon2/Admin');
		}else if($_SESSION["Level"] == 1){
			redirect('Salon2/Kapster');
		}
  
	}else{
		$this->load->view('Home/login3');
	}
 } 
 public function kapster1()
 {
  $this->load->view('Home/login.php');
 }
public function kapster2()
 {
  $this->load->view('Home/login2.php');
 }
public function kapster3()
 {
  $this->load->view('Home/login3.php');
 } 
	 
	 public function login_user(){
	 if(isset($_POST['login'])){
		 $Username = $this->input->post('Username');
		 $Password = $this->input->post('Password');
		 $this->load->model('user_model');
		 $Userid = $this->user_model->login($Username, $Password);
		 $Level = $this->user_model->get_level($Userid);
		 $_SESSION["salon"]=1;
		 if($Userid){
			 if($Level==3){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon1/Admin');
			 }else if($Level==1){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon1/Kapster');
			 }
			 
		 }else{
			 ?>
				 <script type="text/javascript">
     			alert("Username dan Password tidak terdaftar!");
     			</script>
		<?php
			 redirect(base_url('Home/login'),'refresh');
		 }
	 }
	}
	public function login_user2(){
	 if(isset($_POST['login'])){
		 $Username = $this->input->post('Username');
		 $Password = $this->input->post('Password');
		 $this->load->model('user_model');
		 $Userid = $this->user_model->login2($Username, $Password);
		 $Level = $this->user_model->get_level2($Userid);
		 $_SESSION["salon"]=2;
		 if($Userid){
			 if($Level==3){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon3/Admin');
			 }else if($Level==1){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon3/Kapster');
			 }
			 
		 }else{
			 ?>
				 <script type="text/javascript">
     			alert("Username dan Password tidak terdaftar!");
     			</script>
		<?php
			 redirect(base_url('Home/login2'),'refresh');
		 }
	 }
	}
	public function login_user3(){
	 if(isset($_POST['login'])){
		 $Username = $this->input->post('Username');
		 $Password = $this->input->post('Password');
		 $this->load->model('user_model');
		 $Userid = $this->user_model->login3($Username, $Password);
		 $Level = $this->user_model->get_level3($Userid);
		 $_SESSION["salon"]=3;
		 if($Userid){
			 if($Level==3){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon2/Admin');
			 }else if($Level==1){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Salon2/Kapster');
			 }
			 
		 }else{
			 ?>
				 <script type="text/javascript">
     			alert("Username dan Password tidak terdaftar!");
     			</script>
		<?php
			 redirect(base_url('Home/login3'),'refresh');
		 }
	 }
	}	
	public function printNota(){
		$data['nama_kasir'] = $this->input->post("nama_kasir");
		$data['nama_customer'] = $this->input->post("nama_customer");
		$data['total_harga'] = $this->input->post("total_harga");
		$data['payment_method'] = $this->input->post("payment_method");
		$data['persen_pajak'] = $this->input->post("persen_pajak");
		$data['discount_harga'] = $this->input->post("discount_harga");	
		$data['product'] = $this->input->post("array_product");
		$data['harga'] = $this->input->post("array_harga");
		$this->load->library('Pdf');
		$this->load->view('makeNota.php', $data);
	}		 
	
}