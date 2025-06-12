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
});