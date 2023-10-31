

const studentAPIURL = 'http://studentapi-team-one.apps.vapo-aws-sbx.va.gov/student';
class Student{
    constructor(id,fname,lname,email,age,dob)
    {        
        this.id = id;
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;        
        this.Age = age;
        this.dob = dob;
    }
};
//Instantiation of class
const student = new Student();
//Global Vairables
let apiMethod ={};
let navIndex=0;

//Global Defined HTML Elements
const mainEl = document.querySelector("main");
const navEl = document.querySelector("nav");


//FUNCTIONS USED
function verUtilized(){ return "version:1.0.0"}

const navChildClick=(event) =>{
    navIndex = Array.prototype.indexOf.call(navEl.children, event.target);
    if (navIndex==0)
    {        
        mainEl.innerHTML = null;
        console.log ("Students Nav clicked")
        mainEl.insertAdjacentHTML('afterbegin', homePageHTML);
        const btnViewEl = document.querySelector('#view');
        btnViewEl.addEventListener('click', clickViewStudents);     
        
    }
    
    if (navIndex==1)
    {        
        mainEl.innerHTML = null;
        console.log ("Students Nav clicked")
        mainEl.insertAdjacentHTML('afterbegin', studentPageHTML);
        const btnViewEl = document.querySelector('#view');
        btnViewEl.addEventListener('click', clickViewStudents);     
        
    }
    if (navIndex==2)
    {
        mainEl.innerHTML=null;
        console.log("Register Nav clicked");       
        mainEl.insertAdjacentHTML('afterbegin', registerPageHTML);
        const formEl = document.getElementById("form");
        formEl.addEventListener('submit', submitAddStudent);
    }
    if (navIndex==5)// bug added
    {
        mainEl.innerHTML=null;
        console.log("Register Nav clicked");       
        mainEl.insertAdjacentHTML('afterbegin', loginPageHTML);
        const formEl = document.getElementById("form");
        formEl.addEventListener('submit', submitAddStudent);

    }
    if(navIndex>=4  ){mainEl.innerHTML=null;}
}; 

//Function uses fetch to retrieve api data and works
//for both GET and POST
const apiCall = async (url, apiMeth,type) =>{        
        try{
           const response = await fetch(url,apiMeth);                     
            let data = (type='get' ? await response.json() : response.status);             
            if (!response.ok){
                console.log(data.description);
                return;
            }
            return data;            
        }
        catch(error){
            console.log(error);
        } 
};
//Click event retrieve registered students
function clickViewStudents(){     
    console.log("CLICK View Registered Students")
    const viewEl = document.querySelector("#tblDiv");
    const tbStudentEl_Length = (viewEl.querySelector("#tbStudent").children.length);    

    if(tbStudentEl_Length<=0) //Ensures table is created once only
    {
        let type="get";
        apiMethod = null;
        apiCall(studentAPIURL, apiMethod, type).then(data => { 

            let index = data.length;  
            
        
            //For each student fetched create a new object
            //of type student
            for (let i=0; i<index;i++){

            const student = new Student(
                data[i].id,
                data[i].firstName,
                data[i].lastName,
                data[i].email,
                data[i].age,
                data[i].dob
                )

            // Create a table row within the table
            //for each student
            let trEl = document.createElement('tr');
            trEl.setAttribute("id","tr"+[i]);
            document.getElementById("tbStudent").appendChild(trEl);

            //Create table data element for each property
            //in the new object of type student
            let sindex = Object.getOwnPropertyNames(student).length;
            for(let j =0; j<sindex; j++)
            {
                let sKey = Object.keys(student)[j];
                let stuVal = student[sKey];
                let tdEl = document.createElement('td');
                tdEl.textContent = stuVal;
                document.getElementById("tr"+[i]).appendChild(tdEl);
            }
            }

            //Create Table Headings based on each property in the class
            for (var idx in student){
            let thEl = document.createElement('th');
            thEl.textContent=idx;
            document.getElementById("theadTr").appendChild(thEl);
            }
        })
    }  
    
    viewEl.classList.add("studentView"); //adds class that sets height to the div that holds the table 
};
//Submit functions register a new student
function submitAddStudent(event){
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = Object.fromEntries(myFormData.entries());  
    
    
    let type="post";
    apiMethod={method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(formDataObj)};

    apiCall(studentAPIURL, apiMethod,type).then(data => {console.log(data); });    

    document.getElementById("form").reset();

    if (data ='200'){
        let pEL = document.createElement('p')
        pEL.textContent="Sudent Registered"
        document.getElementById("statMsg").appendChild(pEL);        
    }
    
};

navEl.addEventListener('click' , navChildClick);
