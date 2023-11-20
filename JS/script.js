//Compliting task 1 

const studentId = '200520835';
const studentName = 'Vishal Chavda';

const studentInfoParagraph = document.getElementById('studentInfo');
studentInfoParagraph.textContent = `Student ID: ${studentId} | Name: ${studentName}`;

// function creastion for event to order btn
document.querySelector('.order_btn').addEventListener('click', function(event) {
    event.preventDefault(); 

   // taking values from input 
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const number = document.getElementById('customerNumber').value;
    const address = document.getElementById('deliveryAddress').value;
    const pizzaSize = document.getElementById('pizzaSize').value;
    const crustType = document.querySelector('input[name="crustType"]:checked').value;
    const pizzaIngredients = [];
    const selectedIngredients = document.getElementById('pizzaIngredients').selectedOptions;
    for (const option of selectedIngredients) {
        pizzaIngredients.push(option.value);
    }

    // Creating  pizza obeject and class 
    const pizza = new Pizza(name, email, number, foodName, address, pizzaSize, crustType, pizzaIngredients);

   // printing the result in end of page
    document.getElementById('orderResult').innerHTML = `
      <h2>Thank you for your order, ${name}!</h2>
      <p>Your pizza details:</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Number:</b> ${number}</p>
      <p><b>Food Name:</b> ${foodName}</p>
      <p><b>Address:</b> ${address}</p>
      <p><b>Pizza Size:</b> ${pizzaSize}</p>
      <p><b>Crust Type:</b> ${crustType}</p>
      <p><b>Pizza Ingredients:</b> ${pizzaIngredients.join(', ')}</p>
    `;
});

// pizza Class 
class Pizza {
    constructor(name, email, number, foodName, address, pizzaSize, crustType, pizzaIngredients) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.foodName = foodName;
        this.address = address;
        this.pizzaSize = pizzaSize;
        this.crustType = crustType;
        this.pizzaIngredients = pizzaIngredients;
    }
}



