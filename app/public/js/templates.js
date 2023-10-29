/**/
const homePageHTML =`
    <div class="heading"><h3>Home Page</h3>         
    </div>
    `;  

const studentPageHTML = `
    <div class="heading"><h3>View Registered Students</h3>
        <button id="view" type="button" class="button">View</button> 
    </div>
    <div id=tblDiv>
        <table id="table" class="tblStudents">
            <thead>
                <tr id="theadTr"></tr>
            </thead>
            <tbody id="tbStudent"></tbody>       
        </table></div>`;  
const registerPageHTML =`
    <div class="main">
        <div class="heading">
            <h3>Register a Student</h3>
        </div>
        <div style="padding: 1em;">
            <form id="form" method="post" class="form">
                <label for="firstName">First Name</label>
                <div><input type="text" id="firstName" name="firstName"></div>
                <label>Last Name</label>
                <div><input type="text" id="lastName" name="lastName"></div>
                <label for="studentEmail">Email</label>
                <div><input type="email" id="studentEmail" name="email"></div>
                <label for="dob">Date of Birth</label>
                <div><input type="date" id="dob" name="dob"></div>
                <div style="padding: 1em;"><input type="submit" value="Add Student"></div>
            </form>            
        <div><h3 id="statMsg"></h3>`;
const loginPageHTML = `
    <div class="main">
        <div class="heading">
            <h3>Login User</h3>
        </div>
        <div style="padding: 1em;">
        <form id="login" method="post" class="form">
        <label for="studentEmail">Email</label>
        <div><input type="email" id="studentEmail" name="email"></div>
        <label>Password</label>
        <div><input type="text" id="password" name="password"></div>       
        <div style="padding: 1em;"><input type="submit" value="Login User"></div>
    </form>            
<div><h3 id="statMsg"></h3>`;


