## NSRemoteLogServer

LICENSE: MIT

AUTHORS:

* Giordano Scalzo <http://giordanoscalzo.tumblr.com/> [@giordanoscalzo](http://twitter.com/giordanoscalzo)

This server is a simple Node.js app that sends received msg to all browser connected using Socket.io, no muss no fuss.
As far I need a quick solution, it assumes it's hosted on Heroku, but it's straightforward to modify to be hosted elsewhere.

### Instructions 

Create a new heroku app:
   > heroku create

Note down the name of app (i.e hollow-galaxy-7080)

Deploy app:
   > git push heroku master

Connect to server:
   > http://hollow-galaxy-7080.herokuapp.com

Send a message using provided script:
   > ./send.sh hollow-galaxy-7080 'message log'

 That's all!
 
