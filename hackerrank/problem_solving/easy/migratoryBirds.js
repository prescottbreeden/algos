// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value. Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest ID number.

/*
The first line contains an integer denoting , the number of birds sighted and reported in the array . 
The second line describes  as  space-separated integers representing the type numbers of each bird sighted.

Constraints

It is guaranteed that each type is , , , , or .
Output Format

Print the type number of the most common bird; if two or more types of birds are equally common, choose the type with the smallest ID number.
*/

function migratoryBirds(ar) {
    let birds = {};
    let maxOccurrence = 0;
    let birdType = '';
    ar.filter(el => {
        if(birds[el] == null) {
            birds[el] = 1;
        }
        else {
            birds[el] += 1;
        }
    })
    // console.log(birds);
    for(let k in birds) {
        if(birds[k] == maxOccurrence) {
            if (k < birdType) {
                birdType = k;
            }
        }
        else if (birds[k] > maxOccurrence) {
            birdType = k;
            maxOccurrence = birds[k];
        }
    }
    console.log(birdType);
    console.log(maxOccurrence);
    return birdType;
}

migratoryBirds([1,2,2,3,4,5,5]);
