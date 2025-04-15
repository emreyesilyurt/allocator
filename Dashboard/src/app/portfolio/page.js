'use client';
import { useState } from 'react';

export default function PortfolioForm() {
  const [risk, setRisk] = useState('Balanced');
  const [holdings, setHoldings] = useState([{ asset: '', percentage: '' }]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/save-portfolio', {
      method: 'POST',
      body: JSON.stringify({ risk, holdings }),
      headers: { 'Content-Type': 'application/json' },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={risk} onChange={(e) => setRisk(e.target.value)}>
        <option value="Conservative">Conservative</option>
        <option value="Balanced">Balanced</option>
        <option value="Aggressive">Aggressive</option>
      </select>
      {holdings.map((h, idx) => (
        <div key={idx}>
          <input
            placeholder="Asset"
            value={h.asset}
            onChange={(e) => {
              const newHoldings = [...holdings];
              newHoldings[idx].asset = e.target.value;
              setHoldings(newHoldings);
            }}
          />
          <input
            placeholder="Percentage"
            value={h.percentage}
            onChange={(e) => {
              const newHoldings = [...holdings];
              newHoldings[idx].percentage = e.target.value;
              setHoldings(newHoldings);
            }}
          />
        </div>
      ))}
      <button type="submit">Save Portfolio</button>
    </form>
  );
}
