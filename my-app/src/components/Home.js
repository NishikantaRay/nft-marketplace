import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="h-90 grid grid-cols-1 md:grid-cols-2 grid-flow-col gap-4">
          <div className="grid  h-screen">
            <h1 className="text-4xl mx-3 siz font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Discover, collect, and sell extraordinary NFTs
            </h1>
            <p className="text-1xl mx-10">
              OpenSea is the world's first and largest NFT marketplace
            </p>
            <div className="mb-40   mx-10 ">
              <button className=" justify-items-auto  bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-10 rounded-full">
                Create
              </button>
            </div>
          </div>
          <div className="grid  h-screen">
            <div className="py-4 mt-5 invisible md:visible">
              <img
                className="imghome"
                src="https://lh3.googleusercontent.com/YyzGD0VC3GvFafiWQwIQ_M4U8XauTI28S8VTImMLXkQ4DrJh-1AzGejZLQ5Q9uUluw7KMads8FdzfwtWBC8_jwvaOGxMkWZAY6KQNQ=s550"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
