$(document).ready(function(){
    let main_list = document.getElementById("work_options");
    main_list.innerHTML="";
    var options_name =new Array();
        options_name = ["Eligibility Requirements for Student Employees",
                        "Student Employment Office Website",
                        "Quick Jobs",
                        "Part-time Jobs", 
                        "Search - Quick and Part-time Jobs",
                        "Work-Study Award Information",
                        "Work-Study Job Listings",
                        "Work-Study Job Evaluations",
                        "Center for Career Development", 
                        "Career Advisory Network",
                        "Employee Time Entry",
                        "View Salary Statement", 
                        "Direct Deposit Authorization", 
                        "Form I-9 Compliance - Section 1"];
    var options_link = new Array();
        options_link = ["#","#","#","#","#","#","#","#","#","#","#","#","#"];
    
    var create_option_li;
    var create_option_a;
    
    
    
        options_name.forEach(function(name, id){
            create_option_li = document.createElement("li");
                create_option_li.setAttribute("class","nav-item active");
        
            create_option_a = document.createElement("a");
                create_option_a.setAttribute("class","nav-link");
                create_option_a.setAttribute("href",options_link[id]);
                create_option_a.innerHTML= name;

                if(id==0){
                    create_option_a.setAttribute("style","margin-top: initial;");
                }

                create_option_li.appendChild(create_option_a);
                main_list.appendChild(create_option_li);


                
    });

                

    });