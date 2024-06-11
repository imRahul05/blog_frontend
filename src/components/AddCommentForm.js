import { useState } from "react";
import axios from 'axios';
import useUser from '../hooks/useUser';
import config from '../config/conf';

const AddCommentForm = ({articleName, onArticleUpdated }) => {
    
    const [name,setName] = useState('');
    const [commentText,setCommentText] = useState('');
    const {user} = useUser();

    const addcomment = async () => {
        const token = user && await user.getIdToken();
        const headers = token ? {authtoken:token} : {};
        const response = await  axios.post(`${config.BACKEND_URL}/api/articles/${articleName}/comments`, { 
            postedby: name,
            text: commentText,
        },{
          headers,
        });
        const updatedArticle = response.data
        onArticleUpdated(updatedArticle)
        setName('')
        setCommentText('')
    }
  return (
    <>
      <div id="add-comment-form">
        <h3>Add a comment</h3>
        {user && <p>You are posting as {user.email}</p>}
            <textarea 
            name="commennt" 
            rows="4" 
            cols="50"
            value={commentText}
            onChange={e=>setCommentText(e.target.value)}/>
        <button onClick={addcomment}>Add comment</button>
      </div>
    </>
  );

}

export default AddCommentForm;