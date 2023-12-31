
import Link from 'next/link'
import '@/styles/app.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'description',
}
export default function Home(){
  return(
    <div>
      <ul>
        <li className='red'>
          <Link href={"/facebook"}>
            Facebook
          </Link>
        </li>
        <li style={{margin:"20px 0"}}>
         <Link href={"/youtube"}>
          Youtube
         </Link>
        </li>
        <li>
        <Link href={"/tiktok"}>
          Tiktok
        </Link>
        </li>
      </ul>   
    </div>
  )
}