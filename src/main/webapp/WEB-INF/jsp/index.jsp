<%@ page language="java" contentType="text/html; charset=utf-8"  
    pageEncoding="utf-8"%>  
<!DOCTYPE html>  
<html lang="zh-cn">
<head>  
<meta charset="utf-8">  
<meta http-equiv="X-UA-Compatible" content="IE=edge">  
<meta name="viewport" content="width=device-width, initial-scale=1.0">  
<meta name="description" content="">  
<meta name="author" content="">  
  
<title>用户登录</title>  
</head>
<script type="text/javascript">
    function do_login() {
        //window.location.href = "index.html";
        alert("login---");
        document.form1.submit();
    }
</script>
<!-- CSS件 -->  
<body>
    <div class="container">  
        <form class="form-signin" action="/authentication" name="form1" method="POST">
            <h2 class="form-signin-heading">Please sign in</h2>  
            <input type="username" class="form-control" placeholder="Email address" required autofocus>
            <input type="password" class="form-control" placeholder="Password" required>   
            <button class="btn btn-lg btn-primary btn-block" type="submit" onclick="do_login();">Sign in</button>
        </form>  
    </div>  
  
</body>
</html>  