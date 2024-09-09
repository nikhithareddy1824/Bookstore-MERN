import React from "react";


function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="max-h-64 overflow-hidden">  
          <img
            src={item.imageURL}
            alt={item.title}
            className="w-full h-auto object-cover"  
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.bookTitle}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>by {item.authorName}</p>
          <p></p>
          <div className="card-actions justify-between">
            
            <a href={item.bookPDFURL} target="_blank" rel="noopener noreferrer" className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Cards;
