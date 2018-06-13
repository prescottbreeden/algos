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

    drawRightStars: (num, width=75) => {
        let stars = '';
        for(let i = width; i > 0; i--) {
            if (i > num) {
                stars+=' ';
            } else {
                stars+='*';
            }
        }
        return stars;
    },

    drawCenteredStars: (num, width=75) => {
        let stars = '';
        let whiteSpace = width-num;
        let leftSpace = Math.floor(whiteSpace/2);
        let rightSpace = whiteSpace - leftSpace;
        for (let i = 0; i < leftSpace; i++) {
            stars += ' ';
        }
        for (let i = 0; i < num; i++) {
            stars += '*';
        }
        for (let i = 0; i < rightSpace; i++) {
            stars += ' ';
        }
        return stars;
    }
}