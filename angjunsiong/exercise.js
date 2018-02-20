var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
    // salary is the upper limit that the user keys inside the box
};

console.log(exercise.salaries)

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a filtered list of salaries.
    //     Return salaries larger than exercise.salary
    //
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------

    var hello = exercise.largerSalary();
    var SalaryList = [];

    var dataLength = exercise.salaries.length;
    
    for (i=0; i < dataLength; i++) {    
            if (hello[i] === "True"){
            SalaryList.push(exercise.salaries[i][18]);
            }
    }

return SalaryList;

};

// filter function
exercise.largerSalary = function largerSalary(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

    var BooleanIndicator = [];
    dataLength = exercise.salaries.length;

    for (i=0; i < dataLength; i++) {    
        currentSalary = Number(exercise.salaries[i][18])
    
        if (currentSalary > exercise.salary){
            BooleanIndicator.push("True");
            }
        else{
        BooleanIndicator.push("False");
            }
        console.log(BooleanIndicator);
    }
    return BooleanIndicator;
}
