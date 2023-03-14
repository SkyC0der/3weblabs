import { useEffect, useState } from "react";
import axios from "axios";
import SEO from "../../components/SEO";
import SecondaryButton from "../../components/Button/Secondary";
import { API_URL } from "../../utils/constants";
import { useRouter } from "next/router";
import BlogCard from "../../components/BlogCard";
import BlogMediumCard from "../../components/BlogMediumCard";

type SingleArticle = {
  id: string;
  title: string;
  image: string;
  url: string;
  body: string;
  author: string;
};

export default function BlogPosts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setLoading(true);

    const url = `${API_URL}/blogs`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <SEO
        title="Blog "
        description="Checkout our well curated articles to help you take your career to the next level."
      />

      <div className="h-60 flex px-40 sm:px-4 justify-between items-center border-2 border-b-white border-r-0 border-t-0 border-l-0 sm:h-42">
        <h1 className="text-4xl font-semibold sm:text-2xl text-b">Blog</h1>
      </div>

      {/* contact info */}

      {/* <div className="w-screen">
        <div className="flex mx-24 p-14 py-14rounded-3xl mt-[0rem] sm:mx-4 sm:flex-col justify-end"> */}
      {/* <SecondaryButton className="">Apply as a Writer</SecondaryButton> */}
      {/* <SecondaryButton className="sm:mt-4">Sign In</SecondaryButton> */}

      {/* 
        </div>
      </div> */}
      {/* contact info end */}

      {/* blog post */}

      <div className="px-40 sm:px-4">
        <div className="grid grid-cols-3 sm:grid-cols-1 gap-6">
          {/* {data && data.length && !loading ? data.map((article: SingleArticle) => {
            return (<div className="flex flex-col w-[24rem] sm:w-full" key={article.id}>
              <img src={article.image} className='h-[20rem] w-full' />
              <span className="text-xs font-light my-3">{article.author}</span>
              <h2 className="font-semibold text-md">{article.title}</h2>
              <p className="w-full font-light my-3 text-sm">{article.body}</p>
              <div className="w-full font-light my-3 text-xs" onClick={() => push(`/blog/${article.url}`)}>Read more</div>

            </div>)
          }): <div className="w-full text-center text-3xl"><h1>No Post Yet!</h1></div>}
          
          */}
          <BlogMediumCard
          imgSrc={"/assets/images/bg/ethereum.webp"}
            title={"Ethereum Merge Simplified"}
            content={
              "Blockchain technology is a next-generation tool powered by distributed computing. For some persons, the name evokes the genesis of decentralized power structures, a revolution of the global financial system and a redefinition of ownership in the digital space."
            }
            url={"https://medium.com/3weblabs/ethereum-merge-simplified-efca25efd89a"}
          />
          <BlogMediumCard
                    imgSrc={"/assets/images/bg/community.webp"}
            title={"Notes on Communities: How to make the most out of communities"}
            content={
              "Communities are very powerful tools. In fact, when people say ideas change the world, the actual truth is that ideas change the world because it gathers the community around itself and when people believe in a course so much they begin to channel their collective energy."
            }
            url={"https://medium.com/3weblabs/notes-on-communities-how-to-make-the-most-out-of-communit-e66ced4174e6"}
          />
        </div>
      </div>

      {/* {blog post } */}
    </div>
  );
}
