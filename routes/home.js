<!DOCTYPE html>
<html>
<head>
  <title>instagram</title>
  <link type="text/css"rel="stylesheet"href="/stylesheets/home.css">
  <meta http-equiv="content-type"content="text/htm; charset=UTF-8"/>
  <script>

  window.onload=function(){
    var po=document.getElementById('essetional-option');
    po.style.visibility="hidden";
    var abcd=document.getElementById('buttonlogin');
    abcd.onclick=function(){

      var a=document.getElementsByClassName('user')[0];
      var b=document.getElementsByClassName('user')[1];
      var c=document.getElementsByClassName('user')[2];
      var d=document.getElementsByClassName('user')[3];
    var mail_pattern=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail_pattern.test(a.value)==false)
    {
      var counter=1;
      a.style.border="3px solid red";
    }
    var hangeul_pattern=/[가-힣]{2,5}/;
    if(hangeul_pattern.test(b.value)==false)
    {
        var counter=1;
        b.style.border="3px solid red";
    }
    var idname_pattern=/^[a-z]+[a-z0-9]{5,19}$/;
    if(idname_pattern.test(c.value)==false)
    {
        var counter=1;
        c.style.border="3px solid red";
    }
    var password_pattern=/^[a-zA-Z]\w{3,14}$/;
    if(password_pattern.test(d.value)==false)
    {
        var counter=1;
        d.style.border="3px solid red";
    }
if(counter==1)
po.style.visibility="visible";

}

}


  </script>
</head>
<body>
  <div id="all">
    <div id="left">
      <img id="pic"src="fe.jpg"/>
      <audio id="wow" src="BLACKPINK-Fire.mp3"controls></audio>
    </div>
    <div id="right">
      <div id ="right_top">
        <h1 id="center1"><img src="sungjin.jpg"> </h1>
        <p class="col"><font size="5"><b>친구들의 사진과 동영상을 보려면 <br/>가입하세요.</b></p>
          <button class="login"type ="button" onclick="alert()">
            <img id="face"src="face.jpg"><b><font size="5">Facbook으로 로그인</b></button>
              <br/>
              <br/>
              <form  action="input.jsp" method="post">
                <input class="user" type="text" name="text" placeholder="휴대폰 번호 또는 이메일 주소"></input>
                <input class="user"  type="text" name="text" placeholder="성명"></input>
                <input class="user"type="text" name="text" placeholder="사용자 이름"></input>
                <input class="user" type="password" name="text" placeholder="비밀번호"></input>
              </form>
              <br/>
              <button id="buttonlogin"class="login"type ="button" ><b><font size="5">가입</b></button><br/>
                <p id="essetional-option">필수 항목입니다!!</p>
                <p class="col" id="last"><font size="4">가입하면 Instagram의 <b>약관</b> 및 <b>개인<br/>정보처리방침</b>에 동의하게 됩니다</p>
                </div>
                <div id="bot">
                  <p><font size="4">계정이 있으신가요?
                    <a href="file:///C:/Users/AtivBook/Desktop/%EC%9B%B9%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/Instagram-login2.html">로그인</a>
                  </p>
                </div>
                <div id="man">
                  <p>앱을 다운로드하세요.</p>
                  <button id="ac"class="ban"type ="button" onclick="alert()">
                    <img src="apple.jpg"><b>AppStore에서</b><br/><b>다운로드하기</button>
                      <button id="ab"class="ban"type ="button" onclick="alert()">
                        다운로드 하기 <br/><img src="google.jpg"><b>Google Play</b></button>

                      </div>
                    </div>
                    <br/>
                    <br/>



                  </div>
                </body>


                </html>
