document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, { edge: 'left' });
    var trigger = document.querySelector('.sidenav-trigger');
    if (trigger) {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            var instance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
            instance.open();
        });
    }
    document.querySelector('.custom-trigger').addEventListener('click', function() {
        document.getElementById('custom-nav').classList.toggle('show');
    });
    document.addEventListener('click', function(e) {
        const nav = document.getElementById('custom-nav');
        const trigger = document.querySelector('.custom-trigger');
        if (!nav.contains(e.target) && !trigger.contains(e.target)) {
            nav.classList.remove('show');
        }
    });
}); 