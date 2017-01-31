<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en-us">
<meta charset="utf-8" />
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/dist/css/AdminLTE.min.css"; ?>" type="text/css">
</head>
<style>
	.loginbox{
		margin: 100px auto;
		max-width: 550px;
		position: relative;
		background: #ffffff;
	}
	body{
		background-color: #f6f3f3;
	}
.center {
    text-align: center;
	border-width: 2px;
	background-color: #f8f1f1;
	border-style: solid;
	border-color: black;
	border-radius: 20px;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 50px 100px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 10px;
  border-width: 2px;
}
.button2{
	background-image: linear-gradient(#e84f19, #e84f19 60%, #e84f19);
    background-repeat: no-repeat;
	background-color: #d34615;
    border-color: #d34615;
	color:white;
}
.button2:hover, .button2:active, .button2.hover {
    background-color: #d34615;
	color:white;
}
.button2:hover, .button2:focus, .button2.focus {
    color: white;
    text-decoration: none;
}
.button3{
	background-image: linear-gradient(#2c3e50, #233140 60%, #2c3e50);
    background-repeat: no-repeat;
	background-color: #2c3e50;
    border-color: #2c3e50;
	color:white;
}
.button3:hover, .button3:active, .button3.hover {
    background-color: #2c3e50;
	color:white;
}
.button3:hover, .button3:focus, .button3.focus {
    color: white;
    text-decoration: none;
}
</style>
<body>
         <div class="loginbox">
            <!-- /.box-header -->
            <!-- form start -->
            <form action="<?php echo base_url(); ?>Home/login_user" method="post">
              <div class="box-body center">
                <a href="<?php echo site_url(); ?>Home/kapster1" class="btn btn-primary btn-lg">Salon Keps 1</a><br><br>
				<a href="<?php echo site_url(); ?>Home/kapster3" class="btn button3 btn-lg">Salon Keps 2</a><br><br>
				<a href="<?php echo base_url(); ?>Home/kapster2" class="btn button2 btn-lg">Salon Keps 3</a>
              </div>
            </form>
          </div>
          <!-- /.box -->
</body>
</html>