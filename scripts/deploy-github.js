const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: '',
  },
  () => {
    console.log('Deploy Complete!')
  }
)
