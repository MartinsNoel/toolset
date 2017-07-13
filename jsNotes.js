<!DOCTYPE html>
<html>
<body>

<script>

var pass = unescape("unescape%28%22String.fromCharCode%2528104%252C68%252C117%252C102%252C106%252C100%252C107%252C105%252C49%252C53%252C54%2529%22%29");

var pass = unescape(unescape(pass))

document.write(pass);

var test = String.fromCharCode(104,68,117,102,106,100,107,105,49,53,54);

document.write('</br>' + test);


###or just use eval func (exist in php too) var pass = eval(eval(pass))

</script>

</body>
</html>
