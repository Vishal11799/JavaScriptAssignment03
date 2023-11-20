const studentId = '200520835';
const studentName = 'Vishal Chavda';

const studentInfoParagraph = document.getElementById('studentInfo');
studentInfoParagraph.textContent = `Student ID: ${studentId} | Name: ${studentName}`;

// Event listener for the 'Order Now' button
document.querySelector('.order_btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default link behavior

    // Get values from form inputs
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const number = document.getElementById('customerNumber').value;
    const address = document.getElementById('deliveryAddress').value;
    const pizzaSize = document.getElementById('pizzaSize').value;

    // Get selected crust type
    const crustType = document.querySelector('input[name="crustType"]:checked').value;

    // Get selected pizza ingredients
    const pizzaIngredients = [];
    const selectedIngredients = document.getElementById('pizzaIngredients').selectedOptions;
    for (const option of selectedIngredients) {
        pizzaIngredients.push(option.value);
    }

    // Other values you may want to include in your Pizza object
    const foodName = "Custom Pizza"; // You can customize this based on user selection

    // Create a Pizza object using the Pizza class
    const pizza = new Pizza(name, email, number, foodName, address, pizzaSize, crustType, pizzaIngredients);

    // Display the pizza description on the HTML page
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

// Pizza class definition
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



