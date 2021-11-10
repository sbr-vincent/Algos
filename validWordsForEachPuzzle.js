const findNumOfValidWords = (words, puzzles) => {

    let map = {}, output = []
    for (let i = 0; i < words.length; i++) {
        let mask = 0;
        for (let j = 0; j < words[i].length; j++) {


            mask |= 1 << words[i].charCodeAt(j) - 'a'.charCodeAt(0)
        }
        map[mask] ? map[mask] += 1 : map[mask] = 1;
    }
    console.log(map)
    for (let k = 0; k < puzzles.length; k++) {
        output.push(0)
        let currentMask = 0;
        for (let l = 0; l < puzzles[k].length; l++) {
            currentMask |= 1 << puzzles[k].charCodeAt(l) - 'a'.charCodeAt(0)

        }
        const firstChar = 1 << puzzles[k].charCodeAt(0) - 'a'.charCodeAt(0)

        let start = currentMask
        while (start > 0) {
            if ((start & firstChar) === firstChar && map.hasOwnProperty(start)) {
                output[k] += map[start];
            }
            start = (start - 1) & currentMask
        }


    }

    return output

}