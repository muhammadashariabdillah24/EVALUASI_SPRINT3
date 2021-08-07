function ambilData() {
    
    let respon = 'https://www.omdbapi.com/?apikey=dca61bcc&s=avengers'

    if(respon == 200){
        console.log('Berhasil');
    } else {
        console.log('Gagal');
    }
}

async function sip() {
    
    try {
        let oke = await ambilData()
        console.log(oke);
    } catch (error) {
        console.log('Ada Error : ', error);
    }
}

sip()