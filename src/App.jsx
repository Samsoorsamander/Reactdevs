import { foods, filterItems } from "./Components/Data";
import { useState } from "react";

export default function App() {
  return (
    <>
      <FilterableList />
    </>
  );

  function FilterableList() {
    const [query, setQuery] = useState("");
    const result = filterItems(foods, query);

    function handleChange(e) {
      setQuery(e.target.value);
    }

    return (
      <>
        <SearchBar qry={query} onChange={handleChange} />
        <hr />
        <List items={result} />
      </>
    );
  }

  function SearchBar({ onChange, qry }) {
    return (
      <label>
        Search: <input value={qry} onChange={onChange} />
      </label>
    );
  }

  function List({ items }) {
    return (
      <table>
        <tbody>
          {items.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
