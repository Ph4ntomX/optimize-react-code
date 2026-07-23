import { useState, useEffect, useMemo } from 'react';

const App = () => {
  const [filters, setFilters] = useState(['active', 'recent']);
  // removed unused data state
  const [fetchCount, setFetchCount] = useState(0);

  const filteredData = useMemo(() => {
    return ['item1', 'item2', 'item3'].filter(item => {
      // Some filtering logic based on filters
      return filters.length > 0;
    });
  }, [filters]);

  useEffect(() => {
    console.log('Fetching data...');
    setFetchCount(prev => prev + 1);
  }, [filters]);

  const toggleFilter = (filter) => {
    setFilters(prev => (
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    ));
  };

  return (
    <div>
      <h1>Filter Data</h1>
      <p>Fetch Count: {fetchCount}</p>
      <button onClick={() => toggleFilter('active')}>
        Toggle Active
      </button>
      <button onClick={() => toggleFilter('recent')}>
        Toggle Recent
      </button>
      <p>Active Filters: {filters.join(', ')}</p>
      <p>Data: {filteredData.join(', ')}</p>
    </div>
  );
};

export default App;
