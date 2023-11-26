import React, { useState } from 'react';
import Announcement from './Announcement';
import Navbar from './Navbar';
import './index.css';

const App = () => {
  const [brightness, setBrightness] = useState({
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });

  const [contrast, setContrast] = useState({
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });

  const [saturation, setSaturation] = useState({
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: '%',
  });
  const [grayscale, setGrayscale] = useState({
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });

  const [sepia, setSepia] = useState({
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: '%',
  });
  const [hueRotate, setHueRotate] = useState({
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: 'deg',
  });

  const [blur, setBlur] = useState({
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: 'px',
  });

  const [background, setBackground] = useState(
    'https://media.cnn.com/api/v1/images/stellar/prod/221221005245-01-messi-world-cup-celebration-121822-restricted.jpg?c=original'
  );

  const handleReset = () => {
      setBrightness({...brightness, value: 100 })
      setContrast({...contrast, value: 100})
      setSaturation({ ...saturation, value: 100 })
      setGrayscale({ ...grayscale, value: 0 })
      setSepia({ ...sepia, value: 0 })
      setHueRotate({ ...hueRotate, value: 0 })
      setBlur({ ...blur, value: 0 })
  }

  return (
    <div>
      <Announcement />
      <Navbar setBackground={setBackground} />
      <div className='wrapper'>
        <div className='image-wrapper'>
          <div className='image'>
            <img
              src={background}
              alt='leo-messi'
              style={{
                filter: `${brightness.property}(${brightness.value}${brightness.unit})
            ${contrast.property}(${contrast.value}${contrast.unit})
            ${saturation.property}(${saturation.value}${saturation.unit})
            ${grayscale.property}(${grayscale.value}${grayscale.unit})
            ${sepia.property}(${sepia.value}${sepia.unit})
            ${hueRotate.property}(${hueRotate.value}${hueRotate.unit})
            ${blur.property}(${blur.value}${blur.unit})
          `,
              }}
            />
          </div>
        </div>
        <div className='options'>
          <div className='button-wrapper'>
            <button className='button' onClick={handleReset}>Reset Button</button>
          </div>
        <div className='mode'>
          <span>Brightness</span>
          <input
            type='range'
            min={brightness.range.min}
            max={brightness.range.max}
            value={brightness.value}
            onChange={(e) => {
              setBrightness({ ...brightness, value: `${e.target.value}` });
            }}
          />
          <span>Contrast</span>
          <input
            type='range'
            min={contrast.range.min}
            max={contrast.range.max}
            value={contrast.value}
            onChange={(e) => {
              setContrast({ ...contrast, value: `${e.target.value}` });
            }}
          />
        </div>
        <div className='mode'>
          <span>Saturation</span>
          <input
            type='range'
            min={saturation.range.min}
            max={saturation.range.max}
            value={saturation.value}
            onChange={(e) => {
              setSaturation({ ...saturation, value: `${e.target.value}` });
            }}
          />
          <span>Grayscale</span>
          <input
            type='range'
            min={grayscale.range.min}
            max={grayscale.range.max}
            value={grayscale.value}
            onChange={(e) => {
              setGrayscale({ ...grayscale, value: `${e.target.value}` });
            }}
          />
        </div>
        <div className='mode'>
          <span>Sepia</span>
          <input
            type='range'
            min={sepia.range.min}
            max={sepia.range.max}
            value={sepia.value}
            onChange={(e) => {
              setSepia({ ...sepia, value: `${e.target.value}` });
            }}
          />
          <span>Hue Rotate</span>
          <input
            type='range'
            min={hueRotate.range.min}
            max={hueRotate.range.max}
            value={hueRotate.value}
            onChange={(e) => {
              setHueRotate({ ...hueRotate, value: `${e.target.value}` });
            }}
          />
        </div>
        <div className='mode blur'>
          <span>Blur</span>
          <input
            type='range'
            min={blur.range.min}
            max={blur.range.max}
            value={blur.value}
            onChange={(e) => {
              setBlur({ ...blur, value: `${e.target.value}` });
            }}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default App;
