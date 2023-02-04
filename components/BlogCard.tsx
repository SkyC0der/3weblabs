import React from 'react'

type BlogCardType = {
    title?: string;
    content?: string;
    className?: string;
}
const BlogCard = (props:BlogCardType) => {
  return (
    <div>
        <div>
            <img src="/assets/images/bg/card.png" alt="blog card background" />
        </div>
        <div>
            <h3>LTO Campaign</h3>
            <p>Dolor ad quaerat quis quam quo. In quod eius sit consequuntur quis. Provident […]</p>
        </div>
    </div>
  )
}

export default BlogCard