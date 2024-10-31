
import { Link, useNavigate } from 'react-router-dom';
import './post.css'
const Post = ({post}) => {

    const {id,title} = post;
    const navigate = useNavigate();
    const postStyle = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px'   
    }
    const handleDetailsBtn = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div>
            <div className='back' style={postStyle}>
                <h3>{title}</h3>
                <p>ID: {id}</p>
                <Link to={`/post/${id}`}>Post Details</Link>
                <Link to={`/post/${id}`}><button>post Detail</button></Link>
                <button onClick={handleDetailsBtn} >Detail btn to see</button>
            </div>
        </div>
    );
};

export default Post;