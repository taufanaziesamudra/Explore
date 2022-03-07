import { useNavigate } from 'react-router'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './CreateBlog.scss'
import { useSelector, useDispatch } from 'react-redux'
import { postToAPI, setForm, setImgPreview } from '../../config/redux/action'

const CreateBlog = () => {
    const { form, imgPreview } = useSelector(state => state.createBlogReducer)
    const { title, body } = form
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const onSubmit = () => {
        postToAPI(form)
    }

    const onImageUplaod = (e) => { // Funciton untuk mengirimkan gambar
        const file = e.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file))) // Untuk menerima file
    }
    return (
        <div className='blog-post'>
            <Link title='kembali' onClick={() => navigate('/')} />
            <p className='title'>Create Blog</p>
            <Input label='Post Title' value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUplaod(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title='Save' onClick={onSubmit} />
            </div>
            <Gap height={10} />
        </div>
    )
}

export default CreateBlog
