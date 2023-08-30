import Heading from './components/Heading';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';

import { useState } from 'react';

import './App.css';

function App() {

  const [count, setCount] = useState<number>(1)

  return (
    <div>
      <Heading title = { "Hello You" }/>
      <Section title={ "Another title then default value" }> This is my Section.</Section>
      <Counter setCount={setCount}> Count is {count}  </Counter>
      <List items={["coffe", "Tacos", "code"]} 
      render={(item: string) =><span className='gold'>{item}</span>}/>
    </div>
  );
}

export default App;
