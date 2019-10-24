# Yelp-Feelers-BE
# ****************** ENDPOINTS *********************
## API
### You should be able to hit the following:
**BASE URL**: https://yelp-feelers-be.herokuapp.com
## NON AUTH:
`/register` :  register a user
`/login` :  login a user
### YELP REVIEWS
`/reviews`: see all yelp reviews
`/reviews/`: find a review by id
## AUTH:
### USERS
`/auth/users` : see all users (token will be PROTECTED required) - currently returning HIGHEST RATED first 20
`/auth/users/:id` : find a user by id (token will be PROTECTED  required)

### YF MODIFIED REVIEWS
`/auth/reviews`: see all PROTECTED YELP FEELERS reviews (token required)
`/auth/reviews/`: find a PROTECTED YELP FEELERS review by id  NOTE:  we can adjust this to a business_id, user_id or some other field if needed (token required)
### FAVORITES
`/users/:userid/favs/:reviewid` : Allows a USER to POST/ADD a REVIEWED ENTITY to their FAVORITES!
`/users/:userid/favs` : RETRIEVES favorites for specified users
## SEEDS:
`3 USERS`
test1, test2, test3; all with a password of pass
`7 REVIEWS`
MISC
`9 FAVORITES`
Each user, by default, has seed reviews with id 1, 2, 3 FAVORITED (edited) 