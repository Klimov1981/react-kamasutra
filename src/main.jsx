import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/redux-store.js'
import { BrowserRouter } from 'react-router-dom'


const root = createRoot(document.getElementById('root'))

export let rerenderEntireTree = (state) => {


  root.render(
    <StrictMode>
      <BrowserRouter>
        {/* в нашем хранилище данных есть функции для внесения изменений в эти данные, 
        чтобы наш UI законно их мог получить и отбразить. Здесь мы пропсами их передаём
        дальше в приложение, предварительно импортировав. Там мы их примем через props 
        bind() жестко привязывает метод к вызывающему объекту*/}
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </BrowserRouter>
    </StrictMode>,
  )
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  rerenderEntireTree(store.getState())
})