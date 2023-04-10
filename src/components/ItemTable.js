import { ItemRow } from "./ItemRow";

export function ItemTable({ products,filterText, filter }) {
  const rows = [];
  products.forEach((product) => {
    if (
      product[filter].toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1 
    ) {
      return;
    }
    rows.push(
      <ItemRow
        product={product}
        key={product.id} />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>Image</th>
          <th>Year</th>
          <th>Company</th>
          <th>Model</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}