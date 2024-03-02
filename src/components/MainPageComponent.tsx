import React, { useEffect, useState } from 'react';
import { ApiCall } from '../services/DataService';
import RndAdvice from '../interfaces/interface';
import {Button, Card} from 'react-bootstrap'

const MainPageComponent: React.FC = () => {
  const [advice, setAdvice] = useState<RndAdvice>();
  const [newQuote, setNewQuote] = useState(true);

  const handleRndAdvice = () => {
    setNewQuote(!newQuote);
  }

  useEffect(() => {
    const adviceData = async () => {
      const fetchedData = await ApiCall();
      setAdvice(fetchedData);
    };

    adviceData();

  }, [newQuote]);

  return (
    <div className='bgColor font'>
      <Card className="text-center darkgray card-width" style={{borderRadius: '20px'}}>
      <Card.Body className='lightcyan body-padding'>
        <Card.Title  className='adviceNum neongreen'>ADVICE #{advice?.id}</Card.Title>
        <Card.Text style={{ fontSize: '28px' }}>
          {advice?.advice}
        </Card.Text>
        <Button onClick={handleRndAdvice}  className='randomBtn'></Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default MainPageComponent;
