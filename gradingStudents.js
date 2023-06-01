function gradingStudents(grades) {
    // Write your code here
    for(let i = 0; i < grades.length; i++){
        if(grades[i] < 38){
            continue
        }
        
        if(grades[i] % 5 > 2 && grades[i] % 5 != 0){
            if(grades[i] % 5 > 3){
                grades[i] += 1;
                continue
            }
            grades[i] += 2;
        }
    }
    
    return grades
}