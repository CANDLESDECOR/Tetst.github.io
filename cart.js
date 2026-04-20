let cart = JSON.parse(localStorage.getItem("cart")) || [];

function save(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

function add(name, price){
  cart.push({name, price});
  save();
  alert("Додано");
}

function remove(i){
  cart.splice(i,1);
  save();
  render();
}

function render(){
  let box = document.getElementById("cart-items");
  let total = 0;

  if(!box) return;

  box.innerHTML = "";

  cart.forEach((item,i)=>{
    total += item.price;

    box.innerHTML += `
    <div class="item">
      ${item.name} - ${item.price} грн
      <button onclick="remove(${i})">✖</button>
    </div>
    `;
  });

  document.getElementById("total").innerText = "Разом: " + total + " грн";
}

function toggleCart(){
  document.getElementById("cart").classList.toggle("active");
  render();
}
