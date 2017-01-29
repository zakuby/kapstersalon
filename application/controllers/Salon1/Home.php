<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
 
class Home extends CI_Controller {
 
 public function index()
 {
	 if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3 &&  $_SESSION["salon"]==1){
			redirect('Admin');
		}else if($_SESSION["Level"] == 1 && $_SESSION["salon"]==1){
			redirect('Kapster');
		}else if($_SESSION["Level"] == 3 && $_SESSION["salon"]==2){
			redirect('Admin2');
		}else if($_SESSION["Level"] == 1 && $_SESSION["salon"]==2){
			redirect('Kapster2');
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
      
      $this->load->model('Salon1/user_model');
      
      if(!$this->user_model->register($data)) {
        echo $this->session->flashdata('message');
        $this->load->view('registrasi');
      } else {
        $this->login();
      }
    } else
      $this->load->view('registrasi');
	}
 public function login()
 {
	if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3){
			redirect('Admin');
		}else if($_SESSION["Level"] == 1){
			redirect('Kapster');
		}
	}else{
		$this->load->view('Home/login');
	}
 }
 public function login2()
 {
	if($this->session->userdata('Level')){
		if($_SESSION["Level"] == 3){
			redirect('Admin2');
		}else if($_SESSION["Level"] == 1){
			redirect('Kapster2');
		}
  
	}else{
		$this->load->view('Home/login2');
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
     public function analisis(){
  $this->load->view('Home/analisis.php');
     }
	 
	 public function login_user(){
	 if(isset($_POST['login'])){
		 $Username = $this->input->post('Username');
		 $Password = $this->input->post('Password');
		 $this->load->model('Salon1/user_model');
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
			redirect('Admin');
			 }else if($Level==1){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Kapster');
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
		 $this->load->model('Salon1/user_model');
		 $Userid = $this->user_model->login($Username, $Password);
		 $Level = $this->user_model->get_level($Userid);
		 $_SESSION["salon"]=2;
		 if($Userid){
			 if($Level==3){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Admin2');
			 }else if($Level==1){
				 $data = array(
						'Username' =>$Username,
						'Level' =>$Level
						
				);
			$this->session->set_userdata($data);
			redirect('Kapster2');
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
	 
	
}