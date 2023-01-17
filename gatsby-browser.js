export const onRouteUpdate = () => {
    const main = document.querySelector('main');

    if (main) {
        main.className = 'active';
    }
};
