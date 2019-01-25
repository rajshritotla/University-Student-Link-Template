$(document).ready(function(){
    let main_list = document.getElementById("personal_options");
    main_list.innerHTML="";
    var options_name =new Array();
        options_name = ["Personal Profile", 
                        "Manage Access to Your Academic Information",
                        "Compliance Status",
                        "Address and Phone",
                        "Identification (Your Name)",
                        "MBTA Semester Pass",
                        "Commuter Parking Permits",
                        "International Verification",
                        "Proof of Enrollment",
                        "FitRec Membership",
                        "FitRec Usage Agreement",
                        "Mass Motor Vehicle Law Acknowledgement",
                        "Check Your Email"];
    var options_link = new Array();
        options_link = ["#","#","#","#","#","#","#","#","#","#","#","#","#"];
    
    var sub_option_manage_access_to_your_academic_information = new Array();
        sub_option_manage_access_to_your_academic_information = ["Consent-to-Disclosure",
                                                                "Directory Information",
                                                                "External ID",
                                                                "ShareLink Access"];
    var sub_option_manage_access_to_your_academic_information_links = new Array();
        sub_option_manage_access_to_your_academic_information_links = ["#","#","#","#"];


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

                if(name === "Manage Access to Your Academic Information"){
                    let create_sub_option_li;
                    let create_sub_option_a;

                    sub_option_manage_access_to_your_academic_information.forEach(function(name,id){
                        
                        create_sub_option_li = document.createElement("li");
                            create_sub_option_li.setAttribute("class","nav-item active");
                            create_sub_option_li.setAttribute("style","margin-left: 10%;");
                        create_sub_option_a = document.createElement("a");
                            create_sub_option_a.setAttribute("class","nav-link");
                            create_sub_option_a.setAttribute("href",sub_option_manage_access_to_your_academic_information_links[id]);
                            
                            create_sub_option_a.innerHTML= name;
                        create_sub_option_li.appendChild(create_sub_option_a);
                        main_list.appendChild(create_sub_option_li);
                    });
                    
                }

                
    });

                

    });