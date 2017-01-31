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
		margin: 150px auto;
		max-width: 550px;
		position: relative;
		border-radius: 15px;
		background: #ffffff;
	}
	body{
		background-color: rgb(209,209,209);
	}
.center {
    text-align: center;
}
.btn-lg,
.btn-group-lg > .btn {
  padding: 50px 100px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 6px;
}

</style>
<body>
         <div class="box box-info loginbox">
            <!-- /.box-header -->
            <!-- form start -->
            <form action="<?php echo base_url(); ?>Home/login_user" method="post">
              <div class="box-body center">
                <a href="<?php echo base_url(); ?>Home/kapster1" class="btn btn-primary btn-lg">Salon Keps 1</a><br><br>
				<a href="<?php echo base_url(); ?>Home/kapster2" class="btn btn-primary btn-lg">Salon Keps 2</a>
              </div>
            </form>
          </div>
          <!-- /.box -->
</body>
</html>