import { useRef } from "react";
//Function of my app
function App() {
  const productDialog = useRef(null);
  return (
    <>
      <header>
        <h1>Inventory Management Application</h1>
        <span>Admin</span>
      </header>

      <main>
        <div>
          <h2>Product list</h2>
          <input
            type="search"
            aria-label="Search products by name"
            placeholder="Search products..."
          />
          <button
            type="button"
            onClick={() => productDialog.current.showModal()}
          >
            Add product
          </button>
        </div>

        <table className="product-table" aria-label="Product list">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Product</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>
                <h3>No products yet</h3>
                <p>Use Add product to create your first product.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      <dialog ref={productDialog} aria-labelledby="product-form-title">
        <h2 id="product-form-title">Add a product</h2>

        <form method="dialog">
          <p>
            <label htmlFor="product-name">Product name</label>
            <br />
            <input
              id="product-name"
              type="text"
              placeholder="Enter product name"
            />
          </p>

          <p>
            <label htmlFor="product-price">Price</label>
            <br />
            <input id="product-price" type="number" placeholder="Enter price" />
          </p>

          <p>
            <label htmlFor="product-category">Category</label>
            <br />
            <select id="product-category" defaultValue="">
              <option value="" disabled>
                Select category
              </option>
              <option>Electronics</option>
              <option>Home</option>
              <option>Accessories</option>
            </select>
          </p>

          <button type="button" disabled>
            Add
          </button>
          <button type="submit">Cancel</button>
        </form>
      </dialog>
    </>
  );
}

export default App;
