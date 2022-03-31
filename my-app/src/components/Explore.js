import React, { Component } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class Explore extends Component {
    dataList=[
        {
            "id":1,
            "title":"Noteworthy technology acquisitions 2021",
            "description":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            "link":"https://www.google.com",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "id":2,
            "title":"Noteworthy technology acquisitions 2021",
            "description":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            "link":"https://www.google.com",
            "image":"https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true"
        },
        {
            "id":3,
            "title":"Noteworthy technology acquisitions 2021",
            "description":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            "link":"https://www.google.com",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        },
        {
            "id":4,
            "title":"Noteworthy technology acquisitions 2021",
            "description":"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
            "link":"https://www.google.com",
            "image":"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        }
    ]
  render() {
    return (
      <>
        <Navbar />

        <h1 className="text-4xl mx-3 siz text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    Explore the Collections of extraordinary NFTs
            </h1>

        <div className="grid explore-grid grid-cols-2 gap-4 px-10">
            {this.dataList.map((element)=>{
                return (
                <div className="max-w-sm h-50 w-50  border-4 rounded-lg border border-gray-700 shadow-md bg-gray-600 ">
          <a href="/">
            <img
              className="rounded-t-lg"
              src={element.image}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {element.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {element.description}
            </p>
            <a
              href={element.link}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>

             ) } )}
        
        
        </div>
        
        <Footer />
      </>
    );
  }
}
