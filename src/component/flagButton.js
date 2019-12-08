import React from "react";
import { MDBBtn, MDBIcon} from 'mdbreact';
import { APIendpoint } from '../config/variables'

const handleFlag = (props) => {
    const id = props.post.articleId || props.post.gifId
    if(!id){
        console.log('Invalid ID');
        return
    }
    const APIlink = APIendpoint + '/articles/' + id + '/flag'
    console.log("LINK DES..", APIlink);
    fetch(APIlink, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')} ${localStorage.getItem('userId')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            postId: id,
            flag: true,
        })
    })
        .then(res => {
            res.json().then((data) => {
                console.log('FLAGGED DATA:', data)
                props.reRender()
            }).catch((err) => console.log('ERROR!!!!', err))
        })
        .catch(err => {
            console.log(err)
            alert('Invalid flag')
        });
}
const FeedArticle = (props) => {
    console.log('FLAG STATUS: ',props.post.flag);
    const flagDisabled = () => { return (props.post.flag && props.post.flag) == true ? true : false }
    return (
        <MDBBtn disabled={flagDisabled()} onClick={() => handleFlag(props)}><MDBIcon icon="flag" /> Flag</MDBBtn>
    );
};

export default FeedArticle;


/*

*/