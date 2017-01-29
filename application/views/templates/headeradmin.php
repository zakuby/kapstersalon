<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.css"; ?>" type="text/css">
<link rel="stylesheet" href="<?php echo base_url()."assets/bootstrap/css_header/bootstrap.min.css"; ?>" type="text/css">
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
      <ul class="nav navbar-nav">
        <li class="active" ><a href="<?php echo base_url(); ?>Admin/index">Dashboard <span class="sr-only">(current)</span></a></li>
        <li><a href="<?php echo base_url(); ?>Admin/register_produk">Register Product</a></li>
        <li><a href="<?php echo base_url(); ?>Admin/list_produk">List Product</a></li>
        <li><a href="<?php echo base_url(); ?>Admin/report_kapster">Report Kapster</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="<?php echo base_url(); ?>Kapster/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>