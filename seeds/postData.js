const { Post } = require("../models");

// Creating Post seed data
const postData = [
  {
    title: "Need Help Today",
    offer: "Will give a box of bananas",
    need: "Need transportation to ER",
    post: "This may be a long shot, but I am really sick and don't have a vehicle. I need to see an emergency doctor now.",
    post_date: "Posted on 3/23/2023 at 15:26",
    user_id: 1,
    category_id: 1,
  },
  {
    title: "Need Help Tomorrow",
    offer: "Will give a gift of box of Chocolates",
    need: "Need help reviewing my essay for College Admissions",
    post: "Hello, I am trying to get into Harvard, and finished writing the essay requirement for admissions. Can someone who is experiences wiht the admissions process or writing, please help proof read my essage?",
    post_date: "Posted on 3/24/2023 at 10:18",
    user_id: 2,
    category_id: 2,
  },
  {
    title: "Need help next week",
    offer: "Will give a box of bananas",
    need: "Need transportation to ER",
    post: "This may be a long shot, but I am really sick and don't have a vehicle. I need to see an emergency doctor now.",
    post_date: "Posted on 3/25/2023 at 8:00",
    user_id: 3,
    category_id: 3,
  },
  {
    title: "Need help in the evening today",
    offer: "Will give a fresh baked apple pie",
    need: "Need help moving new furniture from one room to another",
    post: "Hello, I am hoping someone can assist with helping me to move the new furniture that arrived and placed in my garage. I need it moved to my living room. I am not abe to do it myself.",
    post_date: "Posted on 3/25/2023 at 11:42",
    user_id: 4,
    category_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
