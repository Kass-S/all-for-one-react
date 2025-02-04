import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PagesComponent from './components/PagesComponent.jsx'
import SayHelloComponent from './components/SayHelloComponent.jsx'
import Add2NumbersComponent from './components/Add2NumbersComponent.jsx'
import AskingQuestionsComponent from './components/AskingQuestionsComponent.jsx'
import OddOrEvenComponent from './components/OddOrEvenComponent.jsx'
import MadLibComponent from './components/MadLibComponent.jsx'
import NumberReverseItComponent from './components/NumberReverseItComponent.jsx'
import AlphanumericReverseItComponent from './components/AlphanumericReverseItComponent.jsx'
import GreaterLessThanComponent from './components/GreaterLessThanComponent.jsx'
import Magic8BallComponent from './components/Magic8BallComponent.jsx'
import RestaurantPickerComponent from './components/RestaurantPickerComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/Pages' element={<PagesComponent />} />

        <Route path='/SayHello' element={<SayHelloComponent />} />
        <Route path='/Add2Numbers' element={<Add2NumbersComponent />} />
        <Route path='/AskingQuestions' element={<AskingQuestionsComponent />} />

        <Route path='/OddOrEven' element={<OddOrEvenComponent />} />
        <Route path='/MadLib' element={<MadLibComponent />} />
        <Route path='/NumberReverseIt' element={<NumberReverseItComponent />} />

        <Route path='/AlphanumericReverseIt' element={<AlphanumericReverseItComponent />} />
        <Route path='/GreaterLessThan' element={<GreaterLessThanComponent />} />
        <Route path='/Magic8Ball' element={<Magic8BallComponent />} />

        <Route path='/RestaurantPicker' element={<RestaurantPickerComponent />} />
      </Routes>    
    </BrowserRouter>
  </StrictMode>,
)
