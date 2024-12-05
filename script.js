// Fungsi untuk menangani submit form dan menambahkan animasi
document.querySelector('form').addEventListener('submit', function(e) {
    // Menjaga agar form tidak langsung dikirimkan
    e.preventDefault();

    // Mendapatkan tombol submit
    const submitButton = document.querySelector('input[type="submit"]');
    
    // Menambahkan kelas loading untuk memberi animasi
    submitButton.classList.add('loading');
    submitButton.value = 'Sedang Mengirim...'; // Mengubah teks tombol

    // Mengirim data form menggunakan Fetch API atau AJAX
    const formData = new FormData(this);

    fetch(this.action, {
        method: this.method,
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Jika berhasil, beri animasi sukses
            submitButton.classList.remove('loading');
            submitButton.classList.add('success');
            submitButton.value = 'Data Terkirim!';

            // Opsi untuk mengatur tombol kembali ke default setelah beberapa detik
            setTimeout(function() {
                submitButton.classList.remove('success');
                submitButton.value = 'Simpan Data';
            }, 2000);
        } else {
            // Jika gagal, beri tahu pengguna (misalnya: alert atau class error)
            alert('Gagal mengirim data. Silakan coba lagi!');
            submitButton.classList.remove('loading');
            submitButton.value = 'Coba Lagi';
        }
    })
    .catch(error => {
        // Menangani error jika fetch gagal
        alert('Terjadi kesalahan saat mengirim data.');
        submitButton.classList.remove('loading');
        submitButton.value = 'Coba Lagi';
    });
});
