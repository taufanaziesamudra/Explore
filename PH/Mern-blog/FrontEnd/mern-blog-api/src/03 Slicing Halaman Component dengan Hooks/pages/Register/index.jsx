import React from 'react'
import { RegisterBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import './register.scss'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    // Membuat variabel dnegan nama navigate dimana parameter berasal dari react-router-dom
    const navigate = useNavigate()
    return (
        <div className='main-page'>
            <div className="left">
                <img src={RegisterBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Register" onClick={() => navigate('/login')} />
                <Gap height={100} />
                <Link title="Kembali ke Login" onClick={() => navigate('/login')} />
            </div>
        </div>
    )
}
export default Register

