import React, { useState,useCallback, useMemo } from 'react';
import Counter from './Counter';

export default function DemoHook() {
  const [showCounter, setShowCounter] = useState(true);
  const [randomNumber, setRandomNumber] = useState(0);

  // useCallback: lỡ gọi function ở component dùng để test function xử lý việc reRender lại, trả về 1 func được cached
  // []: không tạo lại funtion mới giống userEffect
  // const renderBigChart =() =>{}
  // const renderBigChartMemozied =  useCallback(renderBigChart, []);
  const renderBigChartMemozied =  useCallback(()=>{}, [randomNumber]);

  // useMemo: tương tự useCallback nhưng chỉ cached cái giá trị của funtion đó
  const student = useMemo(()=>({
    fullname: 'Trang',
    class: 'BC12',
    random:randomNumber,
  }),[randomNumber] );


  console.log('DemoHook > render');

  return (
    <>
      <h1>DemoHook</h1>
      <p>Random number: {randomNumber}</p>
      <button
        className="btn btn-success"
        onClick={() => setRandomNumber(Math.random())}
      >
        Random Number
      </button>
      <button className="btn btn-danger" onClick={() => setShowCounter(false)}>
        Remove Counter
      </button>
      {showCounter && (<Counter 
      //renderBigChart ={renderBigChartMemozied}
        student={student}
      />)}
    </>
  );
}