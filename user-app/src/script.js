document.getElementById('active').addEventListener('click',
function(){
    const appheader = document.querySelector('App-header');
    appheader.classList.toggle('script');
    appheader.removeClass('script');
})