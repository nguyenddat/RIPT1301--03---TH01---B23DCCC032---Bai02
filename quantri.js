var students = [
    { stt: 1, name: "A", age: 20, address: "Hà Nội", phone: "0123456789", email: "a@gmail.com", class: "03" },
    { stt: 2, name: "B", age: 21, address: "Hồ Chí Minh", phone: "0987654321", email: "b@gmail.com", class: "04" }
];
function displayStudents() {
    var table = document.getElementById("student-list");
    table.innerHTML = "";
    students.forEach(function(student) {
        var row = table.insertRow();
        row.innerHTML = `
            <td>${student.stt}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.address}</td>
            <td>${student.phone}</td>
            <td>${student.email}</td>
            <td>${student.class}</td>
            <td>
                <button onclick="editStudent(${student.stt})">Sửa</button>
                <button onclick="deleteStudent(${student.stt})">Xóa</button>
            </td>
        `;
    });
}

function openAddForm() {
    document.getElementById("add-form").style.display = "block";
}
function closeAddForm() {
    document.getElementById("add-form").style.display = "none";
}

document.getElementById("add-student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var className = document.getElementById("class").value;

    if (!validateName(name)) {
        alert("Tên không hợp lệ!");
        return;
    }

    if (!validateAge(age)) {
        alert("Tuổi không hợp lệ!");
        return;
    }

    if (!validateEmail(email)) {
        alert("Email không hợp lệ!");
        return;
    }

    if (!validateAddress(address)) {
        alert("Địa chỉ không hợp lệ!");
        return;
    }

    var newStudent = {
        stt: students.length + 1,
        name: name,
        age: age,
        address: address,
        phone: phone,
        email: email,
        class: className
    };

    students.push(newStudent);
    displayStudents();
    closeAddForm();
});

function editStudent(stt) {
    var student = students.find(function(s) {
        return s.stt === stt;
    });
    if (student) {
        var newName = prompt("Nhập tên mới:", student.name);
        if (newName !== null) {
            if (!validateName(newName)) {
                alert("Tên không hợp lệ!");
                return;
            }
            student.name = newName;
            displayStudents();
        }
    }
}

function deleteStudent(stt) {
    var index = students.findIndex(function(s) {
        return s.stt === stt;
    });
    if (index !== -1) {
        students.splice(index, 1);
        displayStudents();
    }
}

function validateName(name) {
    var regex = /[1-9]/;
    return !regex.test(name);
}

function validateAge(age) {
    return !isNaN(parseFloat(age)) && isFinite(age) && age > 0 && age < 100;
}

function validateEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateAddress(address) {
    return address.trim() !== "";
}

window.onload = function() {
    displayStudents();
};
