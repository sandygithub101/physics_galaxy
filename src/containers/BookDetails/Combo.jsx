import React from 'react';
import { useNavigate } from 'react-router-dom'
import RelatedCard from './RelatedCard';

export default function Combo({ data }) {
  const navigate = useNavigate();
  // const handleBookBuyNowClick= (value) =>{
  //     navigate(`//bookdetails/${value}`)
  //   }
  return (
    <div className="row d-flex align-items-center ">
      {console.log(data, "cardData")}

      {data && data.map((item, i) => {

        return (
          <RelatedCard
            id={item.id}
            key={i}
            book_name={item.title}
            image={item.cover_image}
            //  buyNowClick={handleBookBuyNowClick}
            //  rating={Number(item.avg_rating).toFixed(2)}
            //  user_rated={item.user_rated}
            price={item.mrp}
            special_price={item.course_sp}
          />
        )

      })}

    </div>
  )
}
