'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HomePage() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/api/building')
      .then((res) => res.json())
      .then((data) => setShoes(data));
  }, []);

  return (
    <div className="container" style={{
      padding: '16px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        textAlign: 'center',
        color: '#111',
      }}>Jujutsu Kaisen Merchandise</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px'
      }}>
        {shoes.map((shoe, index) => (
          <div key={index}
            style={{
              border: '1px solid #333',
              borderRadius: '8px',
              padding: '40px',
              width: '100%',
              textAlign: 'center',
              color: '#111',
              backgroundColor: '#f9f9f9'
            }} >
            <Image
              src={shoe.image}
              alt={shoe.name}
              width={150}
              height={100}
              style={{ width: '100%', height: '400px', marginBottom: '8px', objectFit: 'cover' }}
              priority={index < 4} />
            <div style={{ height: '100px', overflow: 'hidden' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', margin: '10px 0' }}>{shoe.name}</h3>
              </div>
              <div>
                <p>{shoe.description}</p>
              </div>
            </div>
            <p><strong>PHP {shoe.price.toLocaleString()}</strong></p>
            <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
              <button style={{
                padding: '8px 16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
