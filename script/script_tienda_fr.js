function toggleMenu() {
            document.body.classList.toggle('menu-open');
        }

        // Evitar que se cierre el menú si se hace clic dentro del menú
        const menuContainer = document.querySelector('.menu-container');
        document.addEventListener('click', function (event) {
            if (document.body.classList.contains('menu-open') && event.target !== menuContainer && event.target !== document.querySelector('.menu-toggle')) {
                document.body.classList.remove('menu-open');
            }
        });