// Run when the webpage is loaded
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Selamat Hari Ibu Ma:)',
        // text: "You won't be able to revert this!",
        icon: 'Kejutan:D',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'iya',
        cancelButtonText: 'tidak',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            resolveFetch().then(animationTimeline());
        } else {
            resolveFetch().then(animationTimeline());
        }
    })
})