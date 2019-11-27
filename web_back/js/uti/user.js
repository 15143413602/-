{/* <script> */}
var dress='http://localhost:8000'
var user1={
  login:function(user,pass)
  { $.post(
    dress+'/admin/login',
{
    user_name:user,
    password:pass
} ,
function(res){
   console.log(res);
   if (res.code==200) {
      //  alert('登录成功')
      location.href='./index.html'
       
   }else{
      //  alert('登陆失败')
      $('#tishi').text('登陆失败')
    $('#myModal').modal('show')
   }
   
}

)
},

        logout:function () {
            $.post(
                dress+'/admin/logout',
                function(res){
                    console.log(res);
                    if (res.code==200) {
                        window.location.href='./login.html'
                    }
                }
            )
        }
    }
// </script>