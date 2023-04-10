import { ParentItemTable } from "./components/ParentItemTable";
import { PRODUCTS } from "./data/data";
export default function App() {
  return <ParentItemTable products={PRODUCTS} />;
}
