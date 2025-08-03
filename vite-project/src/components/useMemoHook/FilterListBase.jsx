import React, { useMemo, useState } from 'react';

function FilterListBase() {
  const names = [
    "Alice", "Bob", "Charlie", "David", "Eve",
    "Frank", "Grace", "Hannah", "Ivy", "Jack",
    "Karan", "Lily", "Maya", "Nina", "Oscar",
    "Paul", "Quinn", "Rachel", "Steve", "Tina",
    "Uma", "Vikram", "Will", "Xavier", "Yara", "Zane"
  ];

  const [searchQ, setSearchQ] = useState("");

  const filterData = useMemo(() => {
    return names.filter(name =>
      name.toLowerCase().includes(searchQ.toLowerCase())
    );
  }, [searchQ]);

  return (
    <>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchQ}
        onChange={(e) => setSearchQ(e.target.value)}
        className="border p-2 w-full rounded mb-4"
      />

      <ul>
        {filterData.length > 0 ? (
          filterData.map((name, index) => (
            <li key={index}>{name}</li>
          ))
        ) : (
          <li>No match found.</li>
        )}
      </ul>
    </>
  );
}

export default FilterListBase;
