import { Link } from 'react-router-dom'

function Home() {
    return (
        <div style={{ height: '100vh' }} className='d-flex align-items-center justify-content-center'>
            <div className='w-75'>
                <h1 className='mb-4'>API Call Techniques</h1>
                <ul>
                    <li className='mb-3'>
                        <Link className='fs-5' to={'/fetch'}>API Call Using <span className='fw-bold'>Fetch</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='fs-5' to={'/axios'}>API Call Using <span className='fw-bold'>Axios</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='fs-5' to={'/async-await/fetch'}>API Call Using <span className='fw-bold'>Fetch with async/await</span></Link>
                    </li>
                    <li className='mb-3'>
                        <Link className='fs-5' to={'/async-await/axios'}>API Call Using <span className='fw-bold'>Axios with async/await</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home