const ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/jvals/starcraft2CoopRandom.git',
        user: {
            name: 'jvals', // update to use your name
            email: 'jvals@users.noreply.github.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)