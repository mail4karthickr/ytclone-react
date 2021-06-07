class MediaQuery {
    static Small(callback) {
         window.matchMedia("(min-width: 0px) and (max-width: 799px)")
        .addEventListener('change', (e) => {
            if (e.matches) {
                callback()
            }
        });
    }

    static Large(callback) {
        window.matchMedia("(min-width: 800px) and (max-width: 1299px)")
        .addEventListener('change', (e) => {
            if (e.matches) {
                callback()
            }
        });
    }

    static XLarge(callback) {
        window.matchMedia("(min-width: 1300px)")
        .addEventListener('change', (e) => {
            if (e.matches) {
                callback()
            }
        });
    }

    static isSmall =  window.matchMedia("(min-width: 0px) and (max-width: 799px)").matches
    static isLarge =  window.matchMedia("(min-width: 800px) and (max-width: 1299px)").matches
    static isXLarge = window.matchMedia("(min-width: 1300px)").matches
}

export default MediaQuery;