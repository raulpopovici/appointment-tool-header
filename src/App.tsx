import { useState } from 'react';
import { Button } from './components/ui/button';
import Header from './components/header';

export type HeaderProps = {
  onButtonClick: (route: string) => void;
};

function App({ onButtonClick }: HeaderProps) {
  return <Header onButtonClick={onButtonClick} />;
}

export default App;
