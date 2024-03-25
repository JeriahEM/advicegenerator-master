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
        <Button onClick={handleRndAdvice}  className='randomBtn'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg></Button>
        
      </Card.Body>
    </Card>
    </div>
  );
};

export default MainPageComponent;
