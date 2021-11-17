/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    // let zeroCount = grid.flat().filter(item => item == 0).length;
    let start;
    let zeroCount = 0;
    for(let i = 0; i< grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === 1){
                start = [i, j];
            }
            if(grid[i][j] === 0){
                zeroCount++
            }
        }
    }
    return moveRobot(start[0], start[1], grid, zeroCount)
    
    
};

// recursive func
const moveRobot = (i, j, grid, zeroCount, moves = 0) => {
    if( grid[i] === undefined || grid[i][j] === undefined){
        return 0;
    }
    if(grid[i][j] === 2 ){
        if(moves == zeroCount + 1){
            return 1;

        }
        return 0;
        
    }
    if (grid[i][j] === 1 && moves > 0){
        return 0;
    }
    if(grid[i][j] === -1){
        return 0;
    }
    
    if(grid[i][j] === 0){
        grid[i][j] = -1;
    }
    
    
    moves++
    // the number of valid paths is equal to ->
    let paths = moveRobot(i+1, j, grid, zeroCount, moves ) + moveRobot(i - 1, j, grid, zeroCount, moves) + moveRobot(i, j+1, grid, zeroCount, moves) + moveRobot(i, j-1, grid, zeroCount, moves)
    
    grid[i][j] = 0;
    
    return paths;
    
    
}