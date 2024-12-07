function StudentGrade(marks){
    if(marks < 0 || marks > 100){
        return  'error:marks must be between 0 and 100'  ;
    }
    if(marks >79){
        return 'A'
    }else if(marks >=60 && marks <=79){
        return 'B'
    }else if(marks >=50 && marks <=59){
        return 'C'
    }else if(marks >=40 && marks <=49){
        return 'D'
    }else if(marks >=30 && marks <=39){
        return 'E'
    }
}




