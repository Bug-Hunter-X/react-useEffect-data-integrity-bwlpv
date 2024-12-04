```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic to fetch data only once
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        // Directly modifying data can cause unexpected issues
        data.push({ id: 3, name: 'New Item' });
        setData(data); 
      });
  }, []);

  const data = []; // Initial empty state
  const [data, setData] = useState([]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
```