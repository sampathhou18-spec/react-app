import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  data: any;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, serError] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch("https://api.restful-api.dev/objects");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await res.json();

        setProducts(data);
      } catch (err) {
        serError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <h2>Products List</h2>
      <input
        type="text"
        placeholder="Search product by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      {loading && <p>Products Loading</p>}

      {error && <p>{error}</p>}

      {!loading && !error && (
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.data ? JSON.stringify(item.data) : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
