let currentPage = 1;
let recordsPerPage = 5;
let action = "Create";

function renderCourse(page, studentManagementStore){
    let pageMax = getTotalPage(studentManagementStore);
    if (page < 1) {
        page = 1;
    }
    if (page > pageMax) {
        page = pageMax;
    }
    let indexMinOnPage = (page - 1) * recordsPerPage;
    let indexMaxOnPage;
    if (page * recordsPerPage > studentManagementStore.length) {
        indexMaxOnPage = studentManagementStore.length;
    } else {
        indexMaxOnPage = page * recordsPerPage;
    }
    // let studentManagementStore = localStorage.getItem("studentManagementStore") ? JSON.parse(localStorage.getItem("studentManagementStore")) : [];
    let listCourse = document.getElementById("listCourse");
    listCourse.innerHTML ="";

for (let index = indexMinOnPage; index < indexMaxOnPage; index++) {
    debugger;
    listCourse.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${studentManagementStore[index].courseId}</td>
            <td>${studentManagementStore[index].courseName}</td>
            <td>${studentManagementStore[index].courseTime}</td>
            <td>${studentManagementStore[index].status}</td>
            <td>
                <button onclick=initEdit('${studentManagementStore[index].courseId}')>Edit</button>
                <button onclick=deleteCourse('${studentManagementStore[index].courseId}')>Delete</button>
            </td>
        </tr>
    `
}
let listPages = document.getElementById("listPages");
listPages.innerHTML = "";
for (let i = 1; i <= pageMax; i++) {
    listPages.innerHTML += `<li><a href="javascript:clickPage('${i}')">${i}</a></li>`;
}
// 3.5. Ẩn hiện Preview và Next
let preview = document.getElementById("preview");
let next = document.getElementById("next");
if (currentPage == 1) {
    preview.style.visibility = "hidden";
} else {
    preview.style.visibility = "visible";
}
if (currentPage == pageMax) {
    next.style.visibility = "hidden";
} else {
    next.style.visibility = "visible";
}
}
function clickPage(page) {
    currentPage = page;
    let studentManagementStore = localStorage.getItem("studentManagementStore") ? JSON.parse(localStorage.getItem("studentManagementStore")) : [];
    renderCourse(page, studentManagementStore);
}
function previewPage() {
    currentPage--;
    // render lại dữ liệu lên table
    let studentManagementStore = localStorage.getItem("studentManagementStore") ? JSON.parse(localStorage.getItem("studentManagementStore")) : [];
    renderCourse(currentPage, studentManagementStore);
}
// Hàm nextPage
function nextPage() {
    currentPage++;
    let studentManagementStore = localStorage.getItem("studentManagementStore") ? JSON.parse(localStorage.getItem("studentManagementStore")) : [];
    renderCourse(currentPage, studentManagementStore);
}


