import React, { useState } from 'react'
import { increment, decrement, reset, incrementByAmount } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home() {

    const [amnt, setAmnt] = useState(0)
    const count = useSelector((state) => state.counterReducer.count)
    const dispatch = useDispatch()

    return (
        <>
            <div className='w-100 bg-dark d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
                <div className='w-50 p-3 border border-light border-3 shadow'>
                    <h3 className='text-danger text-center' >Counter App</h3>
                    <div className='text-center text-white'>{count}</div>
                    <div className='d-flex justify-content-between mt-4'>
                        <button className='btn btn-success' onClick={() => (dispatch(increment()))}>Increment +</button>
                        <button className='btn btn-info' onClick={() => (dispatch(reset()))}>Reset</button>
                        <button className='btn btn-danger' onClick={() => (dispatch(decrement()))}>Decrement -</button>
                    </div>
                    <div className='mt-3 d-flex align-items-center'>
                        <input className='form-control me-2 mt-2' type="text" onChange={(e) => setAmnt(e.target.value)} style={{ width: '65%' }} />
                        <button onClick={() => (dispatch(incrementByAmount(Number(amnt))))} className="btn btn-secondary mt-2 text-center">Increment by amount</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
