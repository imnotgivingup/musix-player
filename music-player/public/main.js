function upload() {
    var formData = new FormData();
    var song = document.querySelector('#file1');
    if (song.files[0].size / 1048576 < 5) {
        formData.append("song_name", document.getElementById('sname').value);
        formData.append("song", song.files[0]);
        axios.post('/uploadSong', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });
    }
    else{
        alert("too big");
        
    }
}