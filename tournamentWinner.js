const competitions = [["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]
const results = [0,0,1]

function tournament(game, total) {
    let winner = ''
    let score = Number.MIN_SAFE_INTEGER;
    let obj = {}

    for(let i = 0; i < competitions.length; i++){
        if(results[i] === 0){

            if(obj[competitions[i][1]] === undefined){
                obj[competitions[i][1]] = 3
            }else{
                obj[competitions[i][1]] += 3
            }

        }else{
            if(obj[competitions[i][0]] === undefined){
                obj[competitions[i][0]] = 3
            }else{
                obj[competitions[i][0]] += 3
            }
        }
    }

    for(let x in obj){
        if(obj[x] > score){
            score = obj[x]
            winner = x
        }
    }

    return winner

}


console.log(tournament(competitions, results))