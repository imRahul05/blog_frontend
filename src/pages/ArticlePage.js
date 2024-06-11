import  {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./NotFoundPage";
import axios from 'axios';
import CommentsList from '../components/commnetList';
import AddCommentForm from '../components/AddCommentForm';
import useUser from '../hooks/useUser';
import config from '../config/conf';

const ArticlePage = () => {
    const [articleInfo ,setArticleInfo] = useState({upvotes :0 ,comments:[],canUpvote:false});
    const {canUpvote} =articleInfo;
    const {articleId} = useParams();
    const {user,isLoading} = useUser();

useEffect(() => {
    const loadArticleInfo = async () => {
        try {
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken:token} : {};
            const response = await axios.get(`${config.BACKEND_URL}/api/articles/${articleId}`,{headers});
            const newArticleInfo = response.data;
            setArticleInfo(newArticleInfo);
        } catch (error) {
            console.error('Error fetching article info:', error);
        }
    };
 if(!isLoading) {
    loadArticleInfo();
 }
    
}, [articleId,isLoading,user]);
 
    const article = articles.find((article) => article.name === articleId);

    const addUpvote = async () => {
        try {
            const token = user && await user.getIdToken();
            const headers = token ? {authtoken:token} : {};
            const response = await axios.put(`${config.BACKEND_URL}/api/articles/${articleId}/upvote`,null,{headers});
            const updatedArticle = response.data;
            setArticleInfo(updatedArticle);
        } catch (error) {
            console.error('Error adding upvote:', error);
        }
    }

    if(!article)
     return <NotFoundPage/>
     else
    return (
       <>
       <h1>{article.title}</h1>
       <div className='upvotes-section'>
         {user?
         <button onClick ={addUpvote}>{canUpvote? 'Upvote': 'already upvoted'} </button> :
         <button>Login to Upvote</button>}
      
       <p> This article has {articleInfo.upvotes} upvote(s)</p>
       </div>
       {article.content.map((paragraph , i) =>  ( 
       <p key = {i}>{paragraph}</p>
   ))}
  
  {user ?
  <AddCommentForm
   articleName={articleId}
   onArticleUpdated={updateArticle =>setArticleInfo(updateArticle)}/>:
   <button>Login to Comment</button>}

    <CommentsList comments ={articleInfo.comments }/>
   </>
    )
}

export default ArticlePage;