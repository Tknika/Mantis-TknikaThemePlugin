// btn btn-primary btn-sm bigger-110
$(document).ready(function() {
  // Change login-logo
  $('div.login-logo img').attr('src','/plugin_file.php?file=TknikaTheme/img/tknika_logo.png');

  // Change Google button class
  $("#sign_with_google").attr('class','loginBtn loginBtn-google');

  // Replace Google a with button but keep its properties
  var replacementTag = 'button';
  $('a#sign_with_google').each(function() {
      var outer = this.outerHTML;

      // Replace opening tag
      var regex = new RegExp('<' + this.tagName, 'i');
      var newTag = outer.replace(regex, '<' + replacementTag);

      // Replace closing tag
      regex = new RegExp('</' + this.tagName, 'i');
      newTag = newTag.replace(regex, '</' + replacementTag);

      $(this).replaceWith(newTag);
  });
  $("#sign_with_google").attr('type','button');
  var lform = $('#login-form');
  lform.children('#sign_with_google').on('click', function(){
    window.location.href = $('#sign_with_google').attr('href');
  });

  // Add Mantis login button and form
  $('<br /><br /> \
     <button type="button" class="loginBtn loginBtn-mantis" \
        id="sign_with_mantis"> \
        Sign in with mantis \
     </button>').appendTo(lform);

  $('<br /><form id="login-mantis" method="post" action="login.php" > \
     <input id="username" name="username" type="text" placeholder="Username" /> \
     <input id="password" name="password" type="password" placeholder="Password" /> \
     <input type="submit" value="Login" />\
     </form>').appendTo(lform);

  lform.children('#sign_with_mantis').on('click', function(){
    if($("#login-mantis").is(":visible")){
      $("#login-mantis").hide();
    } else {
      $("#login-mantis").show();
    }
  })

  /*
    General style
  */
  $('.widget-color-blue2').addClass('widget-color-green').removeClass('widget-color-blue2');
})
