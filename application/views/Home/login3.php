<?php defined('BASEPATH') OR exit('No direct script access allowed');?>
<!DOCTYPE html>
<html lang="en-us">
<meta charset="utf-8" />
<head>
<title>Login</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap3/css/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/dist/css/AdminLTE.min.css"; ?>" type="text/css">
</head>
<style>
	.loginbox{
		margin: 0px auto;
		width: 550px;
		position: relative;
		border-radius: 15px;
		background: #ffffff;
	}
	.headbox{
		margin: 30px auto;
		width: 550px;
		color: white;
	}
	body{
		background-color: rgb(209,209,209);
	}
	.navbar-default {
    background-color:#2c3e50;
    border-color: #2c3e50;
	    background-image: linear-gradient(#2c3e50, #2c3e50 60%, #2c3e50);
}
	.navbar-default .navbar-collapse, .navbar-default .navbar-form {
    border-color: #2c3e50;
}
</style>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	
		<h3 class="box-title headbox" >Salon Kapster 2</h3>
    </div>
  </div>
</nav>
<body>
         <div class="box loginbox">
            <div class="box-header with-border">
              <h3 class="box-title">Sign In</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form action="<?php echo base_url(); ?>Home/login_user3" method="post">
              <div class="box-body">
                <div class="form-group">
                  <label for="inputEmail3" class="col-sm-2 control-label">Account</label>

                  <div class="col-sm-10">
                    <input type="text" class="form-control" name="Username" placeholder="Account">
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputPassword3" class="col-sm-2 control-label">Password</label>

                  <div class="col-sm-10">
                    <input type="password" class="form-control" name="Password" placeholder="Password">
                  </div>
                </div>
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <a href="<?php echo base_url(); ?>Home" class="btn btn-default">Cancel</a>
                <input type="submit" value="Login" name="login" class="btn btn-info pull-right"></p>
              </div>
              <!-- /.box-footer -->
            </form>
          </div>
          <!-- /.box -->
</body>
</html>