
import { useState, useEffect } from 'react';
import css from './Body.css'

function Body() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');
  const [openAccordions, setOpenAccordions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/items')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const filteredItems = items.filter(item => {
    if (filter === '') {
      return true;
    } else {
      return item.rating === parseInt(filter);
    }
  });

  const handleAccordionClick = (itemId) => {
    setOpenAccordions(prevOpenAccordions => {
      if (prevOpenAccordions.includes(itemId)) {
        return prevOpenAccordions.filter(id => id !== itemId);
      } else {
        return [...prevOpenAccordions, itemId];
      }
    });
  }

  return (
    <div>
      <div className="filter">
        <label htmlFor="filter">Filter by rating:</label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="row">
        {filteredItems.map(item => (
          <div className="col-md-4" key={item.id}>
            <div className="card" style={{ width: '18rem' }}>
              <img src={item.image} className="card-img-top" alt="Movie poster" />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                {/* <p className="card-text">Rating: {item.rating}</p> */}               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Body;
