import axios from 'axios';
import React, { useEffect, useState } from 'react';
import quote from '../../Assest/icons/qouteyellow.png'
// import useReviews from '../hooks/useRevews';
import Review from './Review';
const Testimonials = () => {
    // const [reviews] = useReviews();
    const [reviews, setReviews] = useState([])

         useEffect(() => {

          axios.get(`reviews.json`)
               .then(data => {
                    setReviews(data.data)
               })

     }, [])
    
    return (
        <section  className='my-28 lg:px-20 px-10'>
            <div  className='flex justify-between'>
                <div>
                    <h4  className='text-2xl text-warning mb-2 font-bold'>Testimonials</h4>
                    <h2  className='text-5xl text-red-500'>What Our Clients say</h2>
                </div>
                <div>
                    <img src={quote}  className="w-24 lg:w-48 text-warning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  " alt=""></img>
                </div>
            </div>
            {/* <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div> */}
        </section>
    );
};

export default Testimonials;