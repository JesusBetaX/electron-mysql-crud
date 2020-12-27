const { remote } = require("electron");
const Product = remote.require("./model/product");
const { notify } = remote.require("./app/main");


const productForm = document.querySelector("#productForm");
const productsList = document.querySelector("#products");

const productId = document.querySelector("#id");
const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const productDescription = document.querySelector("#description");

let products = [];


window.onload = function() {
  updateList();
}

productForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const product = {
      id: productId.value,
      name: productName.value,
      price: productPrice.value,
      description: productDescription.value,
    };

    const savedProduct = await Product.updateOrCreate(product);
    
    console.log(savedProduct);
    notify("Electron Mysql", "Product Saved Successfully");

    productForm.reset();
    productName.focus();
    updateList();

  } catch (error) {
    console.log(error);
  }
});

const deleteProduct = async (id) => {
  const response = confirm("Are you sure you want to delete it?");
  if (response) {
    await Product.destroy({
      where: {'id': id}
    });    
    await updateList();
  }
};

const editProduct = async (id) => {
  const product = await Product.findByPk(id);

  productId.value = product.id;
  productName.value = product.name;
  productPrice.value = product.price;
  productDescription.value = product.description;
};

const updateList = async () => {
  products = await Product.findAll({
    order: [
      ['id', 'DESC']
    ]
  });
  renderProducts(products);
};

function renderProducts(tasks) {
  productsList.innerHTML = "";
  
  tasks.forEach((t) => {
    productsList.innerHTML += `
      <div class="card card-body my-2 animated fadeInLeft">
        <h4>${t.name}</h4>
        <p>${t.description}</p>
        <h3>${t.price}$</h3>
        <p>
        <button class="btn btn-danger btn-sm" onclick="deleteProduct('${t.id}')">
          DELETE
        </button>
        <button class="btn btn-secondary btn-sm" onclick="editProduct('${t.id}')">
          EDIT 
        </button>
        </p>
      </div>
    `;
  });
}
