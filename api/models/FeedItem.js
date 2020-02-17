module.exports = {
    attributes: {
        post: {
            model: 'post', required: true
        },

        postOwner: {
            model: 'user'
        },

        user: {
            model: 'user'
        },

        postCreatedAt: {
            type: 'number'
        },
        
        hasLiked: {
            type: 'boolean',
            defaultsTo: false
        }

        // additional props that I'll show you later
    }
}