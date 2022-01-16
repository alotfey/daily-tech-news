const User = require('./User');
const Post = require("./Post");

// create associations one to many
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

module.exports = { User, Post };
