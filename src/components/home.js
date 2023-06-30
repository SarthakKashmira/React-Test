import React,{useState} from 'react';
import Student from './student.js';

const Home = () => {
    const [data,setdata]=useState('No data passed');
    const handleClick=()=>{
         setdata('Sarthak KAshmira');
    }
    return (
        <div>
            <h1>Hello World!</h1>
            <button onClick={handleClick}>Click</button>
            <Student data={data} />
        </div>
    );
};

export default Home;