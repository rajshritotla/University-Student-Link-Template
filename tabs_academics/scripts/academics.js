function option(name,link,subOption){
    this.name= name;
    this.link= link;

    this.createOption= function(){
                let main_list = document.getElementById("academics_options");
                let create_option_li;
                let create_option_a;
    
                create_option_li = document.createElement("li");
                    create_option_li.setAttribute("class","nav-item active");
                    if(subOption=="true"){
                        create_option_li.setAttribute("style","margin-left: 10%;");
                    }
                
                create_option_a = document.createElement("a");
                    create_option_a.setAttribute("class","nav-link");
                    create_option_a.setAttribute("href",this.link);
                    create_option_a.innerHTML= this.name;

                    
                    create_option_li.appendChild(create_option_a);
                    main_list.appendChild(create_option_li);
    }
    return this.createOption();
}

$(document).ready(function(){

    // these variables will be connected to DATABASE and will receive values from there
    var options_name =new Array();
        options_name = ["University Class Schedule",
                        "University Course Description Search",
                        "University Final Exam Schedule",
                        "Academic Summary",
                        "Academic Advising",
                        "Diploma And Graduation Information",
                        "Class And Grade Information",
                        "General Information"];
    var options_link = new Array();
        options_link = ["university_class_schedule.html",
                        "https://www.bu.edu/phpbin/course-search/index.php",
                        "#","#","#","#","#","#"];
    
    var sub_option_class_and_grade_info = new Array();
        sub_option_class_and_grade_info = ["Current Schedule", 
                                            "Registration", 
                                            "Final Exam Schedule", 
                                            "Classes", 
                                            "Grades", 
                                            "External Credits & Test Scores",
                                            "Transcript Preview and Ordering" ];
    var sub_option_class_and_grade_info_links = new Array();
        sub_option_class_and_grade_info_links = ["#","#","#","#","#","#","#"];

    var sub_option_general_info = new Array();
        sub_option_general_info = ["Academic Calendar", 
                                    "Registrar's Office FAQ's", 
                                    "Registrar's Office Downloadable Forms",
                                    "BU Libraries",
                                    "Summer Term"];
    var sub_option_general_info_links = new Array();
        sub_option_general_info_links = ["#","#","#","#","#"];

  
    
    
            options_name.forEach(function(name, id){
                option(name,options_link[id],"false");
                
                    if(name === "Class And Grade Information"){
                        sub_option_class_and_grade_info.forEach(function(name,id){
                            option(name,sub_option_class_and_grade_info_links[id],"true");    
                            
                        });
                        
                    }
                    else
                    if(name === "General Information"){
                        sub_option_general_info.forEach(function(name,id){
                            option(name,sub_option_general_info_links[id],"true");    
                            
                        });
                    }
                    
                
            });

});