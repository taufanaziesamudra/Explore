import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components/atoms'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    // Membaut variabel dnegan nama navigate dimana parameter berasal dari react-router-dom
    const navigate = useNavigate()
    return (
        <div className='main-page'>
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="imageBg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" onClick={() => navigate('/')} />
                <Gap height={100} />
                <Link title="Belum punya aku? Silahkan Daftar" onClick={() => navigate('/register')} />
            </div>
        </div>
    )
}

export default Login
