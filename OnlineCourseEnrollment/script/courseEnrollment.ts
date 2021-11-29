let UserAutoIncId = 1000;
let enrolledAutoIncId = 100;

let currentUserId = null;

class User {
    userId : string;
    userName : string;
    age : number;
    phoneNumber : number;

    constructor(paramName : string, paramAge : number, paramPhoneNumber : number) {
        UserAutoIncId++;
        this.userId = "UI" + UserAutoIncId.toString();
        this.userName = paramName;
        this.age = paramAge;
        this.phoneNumber = paramPhoneNumber;
    }
}

class Course {  
    courseId : string;
    userId : string;
    courseName : string;
    requiredDays : number;
    
    constructor(paramUserId : string, paramCourseName : string, paramRequiredDays : number) {
        enrolledAutoIncId++;
        this.courseId = "EC" + enrolledAutoIncId.toString();
        this.userId = paramUserId;
        this.courseName = paramCourseName;
        this.requiredDays = paramRequiredDays;
    }
}

let userList : Array<User> = new Array<User>();
let enrolledList : Array<Course> = new Array<Course>(); 

function createNewUser() {
    let mainPage = document.getElementById('mainDivId') as HTMLDivElement;
    let newUserPage = document.getElementById('newUserDivId') as HTMLDivElement;

    mainPage.style.display = "none";
    newUserPage.style.display = "block";
}

function userLogin() {
    let mainPage = document.getElementById('mainDivId') as HTMLDivElement;
    let loginPage = document.getElementById('loginDivId') as HTMLDivElement;
    let availableUsers = document.getElementById('availableUsersId') as HTMLLabelElement;
    if(userList.length > 0 ){
        for(let i=0; i<userList.length; i++){
            availableUsers.innerHTML = `\nUser Id : ${userList[i].userId}\nUser Name : ${userList[i].userName}\nAge : ${userList[i].age}\nPhone Number : ${userList[i].phoneNumber}`
        } 
    }
    else{
        availableUsers.innerHTML = "No Available Users"
    }
    mainPage.style.display = "none";
    loginPage.style.display = "block";
}

function addNewUser() {
    let userName = (document.getElementById('userNameId') as HTMLInputElement).value;
    let age = (document.getElementById('ageId') as HTMLInputElement).value;
    let phoneNumber = (document.getElementById('phoneNumberId') as HTMLInputElement).value;
    let user = new User(userName, +age, +phoneNumber);
    userList.push(user);
    alert("User Registration Successfull !!. \nYour UserId is " + user.userId);
    (document.getElementById('userNameId') as HTMLInputElement).value = "";
    (document.getElementById('ageId') as HTMLInputElement).value = "";
    (document.getElementById('phoneNumberId') as HTMLInputElement).value = "";
    goTOMainMenu();   
}

function login() {
    let existingUserId = (document.getElementById('userId') as HTMLInputElement).value;
    for(let i=0; i<userList.length; i++){
        if(userList[i].userId == existingUserId){
            currentUserId = existingUserId;
            let loginPage = document.getElementById('loginDivId') as HTMLDivElement;
            let optionPage = document.getElementById('optionDivId') as HTMLDivElement;
            loginPage.style.display = "none";
            optionPage.style.display = "block"; 
        }
        else{
            alert("Invalid UserId");
        }
    } 
}

function availableCourse() {
    let optionPage = document.getElementById('optionDivId') as HTMLDivElement;
    let availableCoursePage = document.getElementById('availableCourseDivId') as HTMLDivElement;
    optionPage.style.display = "none";
    availableCoursePage.style.display = "block";  
}

function enrollCourse() {
    let courseList = document.getElementById('courseListId') as HTMLSelectElement;
    let requiredDays = (document.getElementById('requiredDaysId') as HTMLInputElement).value;
    let courseName = courseList[courseList.selectedIndex].innerHTML;

    let enrollcourse = new Course(currentUserId, courseName, +requiredDays);
    enrolledList.push(enrollcourse);
    alert("Sucessfully enrolled to the course "+ enrollcourse.courseName +". Your CourseId is " + enrollcourse.courseId); 
    (document.getElementById('requiredDaysId') as HTMLInputElement).value = "";
    let availableCoursePage = document.getElementById('availableCourseDivId') as HTMLDivElement;
    let optionPage = document.getElementById('optionDivId') as HTMLDivElement;
    availableCoursePage.style.display = "none";
    optionPage.style.display = "block";
}

function enrolledCourse() {
    let enrolledCourseList = document.getElementById('enrolledCourseId') as HTMLLabelElement;
    let daysRequired = document.getElementById('TotalDaysRequiredId') as HTMLLabelElement;

    if(enrolledList.length > 0 ){
        let totalRequiredDays = 0;
        for(let i=0; i< enrolledList.length; i++){
            enrolledCourseList.innerHTML = `\nCourse Id : ${enrolledList[i].courseId}\nCourse Name : ${enrolledList[i].courseName}`;
            totalRequiredDays += enrolledList[i].requiredDays;
        }
        daysRequired.innerHTML = `Total Days Required is ${totalRequiredDays}`
    }
    else{
        daysRequired.innerHTML = "No Enrolled Courses"
    }
    let optionPage = document.getElementById('optionDivId') as HTMLDivElement;
    let enrolledCoursePage = document.getElementById('showEnrolledCourseDivId') as HTMLDivElement;
    optionPage.style.display = "none";
    enrolledCoursePage.style.display = "block"; 
}

function goTOMainMenu() {
    let newUserPage = document.getElementById('newUserDivId') as HTMLDivElement;
    let mainPage = document.getElementById('mainDivId') as HTMLDivElement;
    let availableCoursePage = document.getElementById('availableCourseDivId') as HTMLDivElement;
    newUserPage.style.display = "none";
    mainPage.style.display = "block";
    availableCoursePage.style.display = "none";
}