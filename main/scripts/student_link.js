let express_tasks=['Check your Email','MBTA Semester Pass','Registeration','University Class Schedule'];
let express_tasks_links=['#','#','#','#'];
$(document).ready(function(){

    var express = document.getElementById("expressLinks");
    express_tasks.forEach(function(task_name,tasks){
        let x= document.createElement("a");
        x.setAttribute("href",express_tasks_links[tasks]);
        x.setAttribute("class","badge badge-pill badge-warning");
        x.innerHTML=task_name;
        express.appendChild(x);
    });

});