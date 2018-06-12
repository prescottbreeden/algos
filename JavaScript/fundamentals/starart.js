module.exports = {

    drawLeftStars: (num, width=75) => {
        let stars = '';
        for(let i = 0; i < width; i++) {
            if (i <= num) {
                stars+='*';
            } else {
                stars+=' ';
            }
        }
        return stars;

    },

    drawRightStars: (num) => {
        const width = 75;
    },

    drawCenteredStars: (num) => {
        const width = 75;
    }
}