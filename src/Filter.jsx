import React, { useState } from 'react';
import mobilData from '../public/car.js';
import './Filter.css';

function Mobil() {
  const [showMerkOptions, setShowMerkOptions] = useState(false);
  const [showWarnaOptions, setShowWarnaOptions] = useState(false);
  const [showTipeOptions, setShowTipeOptions] = useState(false);

  const [selectedMerk, setSelectedMerk] = useState([]);
  const [selectedWarna, setSelectedWarna] = useState([]);
  const [selectedTipe, setSelectedTipe] = useState([]);

  const handleMerkChange = (event) => {
    const value = event.target.value;
    setSelectedMerk((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleWarnaChange = (event) => {
    const value = event.target.value;
    setSelectedWarna((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const handleTipeChange = (event) => {
    const value = event.target.value;
    setSelectedTipe((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const filteredMobil = mobilData.filter((mobil) => {
    return (
      (selectedMerk.length === 0 || selectedMerk.includes(mobil.merek)) &&
      (selectedWarna.length === 0 || selectedWarna.includes(mobil.warna)) &&
      (selectedTipe.length === 0 || selectedTipe.includes(mobil.tipe))
    );
  });

  return (
    <div className='filter'>
    <div className='pil-filter'>
    <div className='all-merk'>
      <div className='merk'>
      <label onClick={() => setShowMerkOptions(!showMerkOptions)}>Merk :</label>
      {showMerkOptions && (
        
        <div className='isi-merk'>
          {['Honda', 'Toyota', 'Suzuki', 'Porsche', 'Lamborghini', 'Bugatti', 'Mercedes'].map((merk) => (
            <label key={merk}>
              <input
                type="checkbox"
                value={merk}
                checked={selectedMerk.includes(merk)}
                onChange={handleMerkChange}
              />
              {merk}
            </label>
          ))}
        </div>
      )}
      </div>
      </div>
   
    <div className='all-warna'>
        <div className='warna'>
      <label onClick={() => setShowWarnaOptions(!showWarnaOptions)}>Warna :</label>
      {showWarnaOptions && (
        <div className='isi-warna'>
          {['Merah', 'Putih', 'Hitam', 'Orange', 'Biru Tua', 'Kuning', 'Abu-abu'].map((warna) => (
            <label key={warna}>
              <input
                type="checkbox"
                value={warna}
                checked={selectedWarna.includes(warna)}
                onChange={handleWarnaChange}
              />
              {warna}
            </label>
          ))}
        </div>
      )}
      </div>
      </div>

    <div className='all-tipe'>
      <div className='tipe'>
      <label onClick={() => setShowTipeOptions(!showTipeOptions)}>Tipe :</label>
      </div>
      {showTipeOptions && (
        <div className='isi-tipe'>
          {['Sedan', 'Mini Bus', 'Sport Car', 'SUV'].map((tipe) => (
            <label key={tipe}>
              <input
                type="checkbox"
                value={tipe}
                checked={selectedTipe.includes(tipe)}
                onChange={handleTipeChange}
              />
              {tipe}
            </label>
          ))}
        </div>
      )}
      </div>
      </div>

      <div className='result' id="result">
        {filteredMobil.length === 0 ? (
          <p style={{fontWeight: 'bold', fontSize: '35px', lineHeight: '24px', color: '#0599DE'}}>Tidak ada mobil yang sesuai dengan filter.</p>
        ) : (
          filteredMobil.map((mobil) => (
            <div className='hasil'>
            <img className='gambar'key={mobil.id} src={mobil.path} alt={mobil.nama} />
            <div className='text'>
            <h1 style={{fontWeight: 'bold', fontSize: '25px', lineHeight: '24px', color: 'black'}}>{mobil.nama}</h1>
            <div className='pil-text'>
            <p1>Merek : {mobil.merek}</p1>  
            <p1>Warna : {mobil.warna}</p1>  
            <p1>Tipe : {mobil.tipe}</p1>
            </div>
            </div>
            <button className='tombol'>LIHAT DETAIL</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Mobil;
