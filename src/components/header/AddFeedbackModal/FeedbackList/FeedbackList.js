import React, { useState } from 'react';
import axios from 'axios';
// import { Rating } from 'react-simple-star-rating';
import { useSelector } from 'react-redux';
import FeedbackEdit from '../FeedbackEdit/FeedbackEdit';
// import { selectUser } from '../../../../redux/authorization/selectors';
// import Icons from '../../../../images/svg/sprite.svg';

// const FeedbackList = ({fetchData, setReviewsList}) => {
//     const [updateReview, setUpdateReview] = useState('');
//     const [isOpened, setIsOpened] = useState(false);

//     const { name, avatarURL } = useSelector(selectUser);

//     const firstLetter = name?.charAt(0).toUpperCase();

//     const deleteReview = async (item) => {
//     await axios.delete(`api/reviews/${item._id}`).then(() => {
//       fetchData();
//     });
//     };

//     const forUpdateRaview = (item) => {
//     setUpdateReview(item);
//     };

//     const handleToggleModal = () => {
//     setIsOpened(!isOpened);
//     };
    
//     return (
//       <div>
        
//         {setReviewsList &&
//           setReviewsList.map(
//             (item, index) => {
//               return (
//                 <div key={index}> 
//                 <div>
//                 <button
//                     type="button"
//                     onClick={() => {
//                       forUpdateRaview(item);
//                       handleToggleModal();
//                     }}>
//                     <svg width="16" height="16"><use href={`${Icons}#pencil`}/></svg>
//                 </button>
//                 <button type="button" onClick={() => deleteReview(item)}>
//                     <svg width="16" height="16"><use href={`${Icons}#trash`}/></svg>
//                 </button>
//             </div>

//              {avatarURL ? (
//                 <img src={item.owner.avatarURL} alt="user avatar" />) : (
//                 <div>{firstLetter}</div>)}
            
//             <div>
//                 <p>{item.owner.name}</p>

//                 <p>Rating</p>
//             {/* <Rating
//               onClick={e => onStarClickClick(e)}
//               initialValue={newRate}
//               iconsCount={5}
//               transition={true}
//               size={24}
//             /> */}
//                 <p>{item.comment}</p>
//             </div>
//             </div>

//               )
//             }
//           )}

//         {isOpened && (
//         <FeedbackEdit
//           toFetch={fetchData}
//           updateItem={updateReview}
//           onCloseModal={handleToggleModal}
//           isOpened={isOpened}
//         />
//       )}
//         </div>
//     )
// };

// export default FeedbackList;
