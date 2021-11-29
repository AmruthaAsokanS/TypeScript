var UserAutoIncId = 1000;
var enrolledAutoIncId = 100;
var currentUserId = null;
var User = /** @class */ (function () {
    function User(paramName, paramAge, paramPhoneNumber) {
        UserAutoIncId++;
        this.userId = "UI" + UserAutoIncId.toString();
        this.userName = paramName;
        this.age = paramAge;
        this.phoneNumber = paramPhoneNumber;
    }
    return User;
}());
var Course = /** @class */ (function () {
    function Course(paramUserId, paramCourseName, paramRequiredDays) {
        enrolledAutoIncId++;
        this.courseId = "EC" + enrolledAutoIncId.toString();
        this.userId = paramUserId;
        this.courseName = paramCourseName;
        this.requiredDays = paramRequiredDays;
    }
    return Course;
}());
var userList = new Array();
var enrolledList = new Array();
function createNewUser() {
    var mainPage = document.getElementById('mainDivId');
    var newUserPage = document.getElementById('newUserDivId');
    mainPage.style.display = "none";
    newUserPage.style.display = "block";
}
function userLogin() {
    var mainPage = document.getElementById('mainDivId');
    var loginPage = document.getElementById('loginDivId');
    var availableUsers = document.getElementById('availableUsersId');
    if (userList.length > 0) {
        for (var i = 0; i < userList.length; i++) {
            availableUsers.innerHTML = "\nUser Id : ".concat(userList[i].userId, "\nUser Name : ").concat(userList[i].userName, "\nAge : ").concat(userList[i].age, "\nPhone Number : ").concat(userList[i].phoneNumber);
        }
    }
    else {
        availableUsers.innerHTML = "No Available Users";
    }
    mainPage.style.display = "none";
    loginPage.style.display = "block";
}
function addNewUser() {
    var userName = document.getElementById('userNameId').value;
    var age = document.getElementById('ageId').value;
    var phoneNumber = document.getElementById('phoneNumberId').value;
    var user = new User(userName, +age, +phoneNumber);
    userList.push(user);
    alert("User Registration Successfull !!. \nYour UserId is " + user.userId);
    document.getElementById('userNameId').value = "";
    document.getElementById('ageId').value = "";
    document.getElementById('phoneNumberId').value = "";
    goTOMainMenu();
}
function login() {
    var existingUserId = document.getElementById('userId').value;
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userId == existingUserId) {
            currentUserId = existingUserId;
            var loginPage = document.getElementById('loginDivId');
            var optionPage = document.getElementById('optionDivId');
            loginPage.style.display = "none";
            optionPage.style.display = "block";
        }
        else {
            alert("Invalid UserId");
        }
    }
}
function availableCourse() {
    var optionPage = document.getElementById('optionDivId');
    var availableCoursePage = document.getElementById('availableCourseDivId');
    optionPage.style.display = "none";
    availableCoursePage.style.display = "block";
}
function enrollCourse() {
    var courseList = document.getElementById('courseListId');
    var requiredDays = document.getElementById('requiredDaysId').value;
    var courseName = courseList[courseList.selectedIndex].innerHTML;
    var enrollcourse = new Course(currentUserId, courseName, +requiredDays);
    enrolledList.push(enrollcourse);
    alert("Sucessfully enrolled to the course " + enrollcourse.courseName + ". Your CourseId is " + enrollcourse.courseId);
    document.getElementById('requiredDaysId').value = "";
    var availableCoursePage = document.getElementById('availableCourseDivId');
    var optionPage = document.getElementById('optionDivId');
    availableCoursePage.style.display = "none";
    optionPage.style.display = "block";
}
function enrolledCourse() {
    var enrolledCourseList = document.getElementById('enrolledCourseId');
    var daysRequired = document.getElementById('TotalDaysRequiredId');
    if (enrolledList.length > 0) {
        var totalRequiredDays = 0;
        for (var i = 0; i < enrolledList.length; i++) {
            enrolledCourseList.innerHTML = "\nCourse Id : ".concat(enrolledList[i].courseId, "\nCourse Name : ").concat(enrolledList[i].courseName);
            totalRequiredDays += enrolledList[i].requiredDays;
        }
        daysRequired.innerHTML = "Total Days Required is ".concat(totalRequiredDays);
    }
    else {
        daysRequired.innerHTML = "No Enrolled Courses";
    }
    var optionPage = document.getElementById('optionDivId');
    var enrolledCoursePage = document.getElementById('showEnrolledCourseDivId');
    optionPage.style.display = "none";
    enrolledCoursePage.style.display = "block";
}
function goTOMainMenu() {
    var newUserPage = document.getElementById('newUserDivId');
    var mainPage = document.getElementById('mainDivId');
    var availableCoursePage = document.getElementById('availableCourseDivId');
    newUserPage.style.display = "none";
    mainPage.style.display = "block";
    availableCoursePage.style.display = "none";
}
