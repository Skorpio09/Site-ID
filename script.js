const people = [
    { id: 1, name: "Иван Иванов", age: 25, city: "София" },
    { id: 2, name: "Мария Петрова", age: 30, city: "Пловдив" },
    { id: 3, name: "Георги Георгиев", age: 35, city: "Варна" },
    { id: 4, name: "Елена Димитрова", age: 28, city: "Бургас" }
];
document.getElementById("search-btn").addEventListener("click", () => {
    const personId = parseInt(document.getElementById("person-id").value);
    console.log("Въведено ID:", personId);
    const resultDiv = document.getElementById("result");
    const person = people.find(p => p.id === personId);
    console.log("Намерен човек:", person);
    if (person) {
        resultDiv.innerHTML = `
            <p><strong>Име:</strong> ${person.name}</p>
            <p><strong>Възраст:</strong> ${person.age}</p>
            <p><strong>Град:</strong> ${person.city}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>Човек с това ID не е намерен.</p>";
    }
});