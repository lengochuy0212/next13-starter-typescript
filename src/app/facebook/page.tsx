'use client'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/navigation'
const Facebook = () => {
    const router = useRouter()

    const handleBtn = () =>{
        router.push('/')
    }
    return(
        <div>
        <a href="https://www.facebook.com/nhuy0212/">Facebook page</a>
        <div>
            <Button variant='primary' > Continue</Button>
            <button onClick={() => handleBtn()}>Back home</button>
        </div>
        </div>
    )
}
export default Facebook;