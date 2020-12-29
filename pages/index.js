import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animals from '../public/animals.json'
import Animal from './src/Animal'

export default function Home() {

  const animalMaker = p => <animal type = {p.type} state = {p.state} img = {p.img} adoption_fee = {p.adoption_fee}/>
  const names = Animals.map(animalMaker)

  const stateAnimalsOnly = p => p.state == "sad"
  const stateAnimals = Animals.filter(stateAnimalsOnly)
  const stateAnimalsFormat = stateAnimals.map(animalMaker)

  const sum = (x,y) => x + y.adoption_fee
  const statePrice = stateAnimals.reduce(sum,0)
  
  return (
    <html>
      <div>
        <h1 class="text-center text-4xl font-bold bg-red-300 p-6">Animal Assignment</h1>
        <p class="text-center text-2xl p-2">
          Animals that aren't sad were filtered out.
        </p>
      </div>

      <div class="text-center">
        {stateAnimalsFormat}
      </div>

      <div>
        <h1 class="text-center text-2xl font-bold bg-green-500 p-6">Cost of adoption: {statePrice}</h1>
      </div>

    </html>
  )
}
