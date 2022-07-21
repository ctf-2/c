const u = 'khaled';
const p = 'password!'


function valid(username, password) {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);

    alert('نجحت في هذا التحدي !');
    location.href = './ctf1/index.html';
}


function validation(username, password) {

    if (username.value.length == 0 && password.value.length == 0) {
        alert('تأكد من ملئ جميع الحقول');
    } else {
        if (username.value != u && password.value != p) {
            alert('تاكد من صحة البيانات !')
        } else {
            valid(username.value, password.value);
        }
    }

}