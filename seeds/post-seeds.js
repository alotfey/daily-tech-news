const { Post } = require('../models');

const postData = [
    {
        title: 'justo donec enim',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Aliquet eget sit amet tellus. Tortor posuere ac ut consequat semper viverra nam libero. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Fermentum iaculis eu non diam phasellus. Imperdiet proin fermentum leo vel orci porta. Vehicula ipsum a arcu cursus vitae congue mauris. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Mauris cursus mattis molestie a iaculis at erat pellentesque. Dolor purus non enim praesent elementum facilisis leo vel. Volutpat maecenas volutpat blandit aliquam etiam erat. Facilisis gravida neque convallis a cras semper. Morbi enim nunc faucibus a pellentesque sit. Urna nunc id cursus metus aliquam. Sem et tortor consequat id porta nibh venenatis. In nisl nisi scelerisque eu ultrices vitae. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.',
        user_id: '1'
    },
    {
        title: 'congue eu consequat',
        post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. In massa tempor nec feugiat nisl pretium fusce id velit. Lectus mauris ultrices eros in. Molestie nunc non blandit massa. Lacinia quis vel eros donec ac odio tempor. Scelerisque fermentum dui faucibus in ornare quam. Feugiat in ante metus dictum at tempor commodo ullamcorper a. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Arcu odio ut sem nulla pharetra diam sit amet. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Blandit turpis cursus in hac habitasse platea. In mollis nunc sed id semper risus in. Et netus et malesuada fames ac. Facilisi etiam dignissim diam quis enim.',
        user_id: '2'
    }
];

const seedPosts = () => Post.bulkCreate(postData)
module.exports = seedPosts;
