const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: '1',
        post_id: '1',      
    },
    {
        comment_text: 'amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        user_id: '2',
        post_id: '2',
    }
];

const seedcomments = () => Comment.bulkCreate(commentData)
module.exports = seedcomments;
