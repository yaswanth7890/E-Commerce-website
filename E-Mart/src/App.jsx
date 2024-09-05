
import React from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css';
import Landinpage from './stores/pages/Landinpage'
import Mobilepage from './stores/pages/Mobilepage';
import Kitchenpage from './stores/pages/Kitchenpage';
import Acpage from './stores/pages/Acpage';
import Bookspage from './stores/pages/Bookspage';
import Comppage from './stores/pages/Comppage';
import Fridgepage from './stores/pages/Fridgepage';
import Furniturepage from './stores/pages/Furniturepage';
import Menpage from './stores/pages/Menpage';
import Speakerspage from './stores/pages/Speakerspage';
import { Watchpage } from './stores/pages/Watchpage';
import Womanpage from './stores/pages/Womanpage';
import Tvpage from './stores/pages/Tvpage';
import Mobilesingle from './singles/Mobilesingle';
import Usercart from './stores/Usercart';
import Acsingle from './singles/Acsingle';
import Computersingle from './singles/Computersingle';
import Mensingle from './singles/Mensingle';
import Womansingle from './singles/Womansingle';
import Furnituresingle from './singles/Furnituresingle';
import Kitchensingle from './singles/Kitchensingle';
import Watchsingle from './singles/Watchsingle';
import Booksingle from './singles/Booksingle';
import Fridgesingle from './singles/Fridgesingle';
import Speakersingle from './singles/Speakersingle';
import Tvsingle from './singles/Tvsingle';



const App = () => {
  return (
    <div>
      <Routes>
      <Route path='/'  element = { <Landinpage />} />
      <Route path='/kitchen'  element = { <Kitchenpage />} />
      <Route path='/ac'  element={<Acpage />}/>
      <Route path='/books' element ={<Bookspage />} />
      <Route path='/mobiles' element={<Mobilepage />}/>
      <Route path='/computer' element={<Comppage />} />
      <Route path='/fridge'  element={<Fridgepage />} />
      <Route path='/furniture' element={<Furniturepage />}/>
      <Route path='/menwear' element={<Menpage />} />
      <Route path='/speakers' element={<Speakerspage />}/>
      <Route path='/watches' element={<Watchpage />} />
      <Route path='/womanwear' element={<Womanpage />} />
      <Route path='/tv'   element={<Tvpage/>}/>


      <Route path='/mobiles/:id' element={<Mobilesingle />} />
      <Route path='/cartitem'   element={<Usercart />} />
      <Route path='/ac/:id' element = {<Acsingle />} />
      <Route path='/computer/:id' element = {<Computersingle />} />
      <Route path='/menwear/:id'   element={<Mensingle />} />
      <Route path='/womanwear/:id'  element={<Womansingle /> } />
      <Route path='/furniture/:id'    element={<Furnituresingle />}/>
      <Route path='/kitchen/:id'    element={<Kitchensingle />}/>
      <Route path='/watches/:id'  element={<Watchsingle />}/>
      <Route path='/books/:id'  element={<Booksingle />}/>
      <Route path='/fridge/:id'  element={<Fridgesingle />}/>
      <Route path='/speaker/:id' element={<Speakersingle />}/>
      <Route path='/tv/:id'   element={<Tvsingle />}/>
      </Routes>
    </div>
  )
}

export default App