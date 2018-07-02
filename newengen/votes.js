let votes = ['harry', 'alex', 'alex', 'joe'];

let dict = {
    'name': votes
}

votes.filter(el => {
    for (k in dict) {
        if (k === el) {
            votes +=1;
        }
        else {
            dict[el] = 1;
        }
    }
})