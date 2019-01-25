$(document).ready(function(){
    let main_list = document.getElementById("money_matters_options");
    main_list.innerHTML="";
    var options_name =new Array();
        options_name = ["Stafford Loan Entrance Counseling",
                        "Stafford On-line Promissory Note",
                        "Student Account Inquiry", 
                        "Library Account",
                        "Medical Insurance", 
                        "Student Dental Plan",
                        "Federal Financial Aid Credit Authorization Status",
                        "Sports Pass",
                        "Student Account FAQ's",
                        "Your Financial Aid",
                        "General Financial Aid Information",
                        "Loan Deferment Notifications",
                        "Manage My Student Choice Refund Account"];
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