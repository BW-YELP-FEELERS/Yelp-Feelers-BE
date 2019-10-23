# Yelp-Feelers-BE

## API
### You should be able to hit the following:
**BASE URL**: https://yelp-feelers-be.herokuapp.com
**/register** :  register a user
**/login** :  login a user
**/users** : see all users (token will be PROTECTED required) - currently returning HIGHEST RATED first 20
**/users/:id** : find a user by id (token will be PROTECTED  required)
**/reviews**: see all yelp reviews
**/reviews/**: find a review by id  NOTE:  we can adjust this to a business_id, user_id or some other field if needed
**/auth/reviews**: see all `PROTECTED` YELP FEELERS reviews (token required)
**/auth/reviews/**: find a `PROTECTED` YELP FEELERS review by id  NOTE:  we can adjust this to a `business_id`, `user_id` or some other field if needed (token required)
I have 3 seed users already active:
`test1`, `test2`, `test3`; all with a password of pass
We have `7 seed` reviews ready as well! (edited) 