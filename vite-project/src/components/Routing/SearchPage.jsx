import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get value of 'q' query parameter
  const q = searchParams.get("q") ?? "";

  function onSearch(newQ) {
    // Update the query parameter in URL
    setSearchParams({ q: newQ });
  }

  return (
    <div>
      <h2>Search Page</h2>
      <input
        type="text"
        value={q}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Type to search..."
      />
      <p>Searching for: {q}</p>
    </div>
  );
}
