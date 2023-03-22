const { Post } = require("../models");

const postData = [{
    "user_id": "1",
    "title": "Need Help Today",
    "offer": "Will give a box of bananas",
    "Need": "Need transportation to ER",
    "post": "This may be a long shot, but I am really sick and don't have a vehicle. I need to see an emergency doctor now.",
    "thread": [],
    "post_date": "3/21/2023",
    "category_id": []
},
{
    "user_id": "2",
    "title": "Need Help Tomorrow",
    "offer": "Will give a gift of box of Chocolates",
    "Need": "Need help reviewing my essay for College Admissions",
    "post": "Hello, I am trying to get into Harvard, and finished writing the essay requirement for admissions. Can someone who is experiences wiht the admissions process or writing, please help proof read my essage?",
    "thread": [],
    "post_date": "3/21/2023",
    "category_id": []
},
{
    "user_id": "3",
    "title": "Need help next week",
    "offer": "Will give a box of bananas",
    "Need": "Need transportation to ER",
    "post": "This may be a long shot, but I am really sick and don't have a vehicle. I need to see an emergency doctor now.",
    "thread": [],
    "post_date": "3/21/2023",
    "category_id": []
},
{
    "user_id": "4",
    "title": "Need help in the evening today",
    "offer": "Will give a fresh baked apple pie",
    "Need": "Need help moving new furniture from one room to another",
    "post": "Hello, I am hoping someone can assist with helping me to move the new furniture that arrived and placed in my garage. I need it moved to my living room. I am not abe to do it myself/alone.",
    "thread": [],
    "post_date": "3/22/2023",
    "category_id": []
}

];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;