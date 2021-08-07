function Login(username,password) {
    
    if(username == 'qwerty' && password == '123'){

        return function goHome() {
            
            console.log('halaman home');
        }

    } else {

        if(username == 'qwerty'){
            if(password == '123'){

                return function goHome() {
                    
                    console.log('halaman home');
                }
            } else {

                return function backLogin() {
                    
                    console.log('login gagal');
                }
            }
        } else {

            return function backLogin() {
                
                console.log('login gagal');
            }
        }
    }
}

let user = prompt('Masukan Username')
let pass = prompt('Masukan Password')

let cobaLogin = Login(user,pass)

cobaLogin()