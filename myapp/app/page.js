import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  function ListItems() {
    const ints = [1, 2, 3];
    return (
      <>
        {
          ints.map((int) => {
            return (
              <li>{int}</li>
            )
          }
          )
        }
      </>
    )
  }

  return (
    <ul>
      <ListItems />
    </ul>
  )
}
