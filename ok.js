let list = {
    lastName: 'Qi',
    country: 'United States',
    lastOnlineTimeSeconds: 1634441438,
    city: 'Princeton',
    rating: 3672,
    friendOfCount: 7789,
    titlePhoto: 'https://userpic.codeforces.org/312472/title/7cf0a442d4071e87.jpg',
    handle: 'Benq',
    avatar: 'https://userpic.codeforces.org/312472/avatar/5716ac69aea8159a.jpg',
    firstName: 'Benjamin',
    contribution: 88,
    organization: 'MIT',
    rank: 'legendary grandmaster',
    maxRating: 3797,
    registrationTimeSeconds: 1435099979,
    maxRank: 'legendary grandmaster'
  };

const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
  console.log(key,value)
})
keyValue(list)