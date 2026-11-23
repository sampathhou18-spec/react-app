import ListData from "./components/ListGroup.tsx";
import Button from "./components/Button.tsx";
import { useState } from "react";
import Alert from "./components/Alert.tsx";
import Products from "./components/Products.tsx";

export default function App() {
  const [isListVisible, setIsListVisible] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");

  const handleListVisibility = () => {
    if (isListVisible) {
      setIsListVisible(false);
      setSelectedItem("");
    } else {
      setIsListVisible(true);
    }
    // isListVisible ? setIsListVisible(false) : setIsListVisible(true);
  };

  return <Products />;

  return (
    <>
      {isListVisible && <Alert item={selectedItem} />}
      <Button
        onClick={handleListVisibility}
        heading={isListVisible ? "Hide List" : "Display List"}
      />
      {isListVisible && <ListData selectedItem={setSelectedItem} />}
    </>
  );
}

// import { useEffect, useState } from "react";

// type Product = {
//   id: string;
//   name: string;
//   data: Record<string, unknown> | null;
// };

// export default function App() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [search, setSearch] = useState<string>("");
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     const controller = new AbortController();

//     async function loadProducts() {
//       try {
//         const response = await fetch("https://api.restful-api.dev/objects", {
//           signal: controller.signal,
//         });
//         if (!response.ok) throw new Error(`Request failed: ${response.status}`);
//         const result: Product[] = await response.json();
//         setProducts(result);
//       } catch (err) {
//         if (controller.signal.aborted) return;
//         setError(err instanceof Error ? err.message : "Something went wrong");
//       } finally {
//         if (!controller.signal.aborted) setLoading(false);
//       }
//     }

//     void loadProducts();
//     return () => controller.abort();
//   }, []);

//   const filteredProducts = products.filter((product) =>
//     product.name.toLowerCase().includes(search.toLowerCase()),
//   );

//   return (
//     <main
//       style={{
//         maxWidth: 1000,
//         margin: "40px auto",
//         padding: 20,
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h1>Product List</h1>
//       <input
//         type="search"
//         placeholder="Search products..."
//         value={search}
//         onChange={(event) => setSearch(event.target.value)}
//         style={{
//           width: "100%",
//           boxSizing: "border-box",
//           padding: 12,
//           marginBottom: 20,
//         }}
//       />
//       {loading && <p>Loading products...</p>}
//       {error && <p role="alert">Error: {error}</p>}
//       {!loading && !error && (
//         <table
//           style={{
//             width: "100%",
//             borderCollapse: "collapse",
//             textAlign: "left",
//           }}
//         >
//           <thead>
//             <tr>
//               {(["ID", "Product Name", "Details"] as const).map((heading) => (
//                 <th
//                   key={heading}
//                   style={{ padding: 12, borderBottom: "2px solid #ccc" }}
//                 >
//                   {heading}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredProducts.map((product) => (
//               <tr key={product.id}>
//                 <td style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
//                   {product.id}
//                 </td>
//                 <td style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
//                   {product.name}
//                 </td>
//                 <td style={{ padding: 12, borderBottom: "1px solid #ddd" }}>
//                   {product.data ? JSON.stringify(product.data) : "N/A"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//       {!loading && !error && filteredProducts.length === 0 && (
//         <p>No products found.</p>
//       )}
//     </main>
//   );
// }
