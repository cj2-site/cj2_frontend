# CJ2.SITE PROJECT SCOPE

## Task List
https://trello.com/b/dTVbGhwt/cj2site

## MVP

* Have a working frontend:

  * user can enter a long URL
  * shortened URL is presented to the user
  * anonymous user can only generate one shortened URL at a time
  * displays number of clicks as metric


* Have a working backend:

  * received long URLs from client
  * generate shortened URL using a hash
  * save URL to DB
  * reply to frontend with shortened URL
  * utilizing GoQR API http://goqr.me/api/ for the QR Code

## Stretch Goals

  * Allow logged in users to save shortened URLs to retrieve later on
  * Allow logged in users to enter in multiple long URLs (separated by commas?)
  * Allow logged in users to view previous generated shortened URLs
  * Allow logged in users to create customized shortened URLs
  * Allow users to share to other social media platform: Twitter using API
  * User can be authenticated using Google OAuth
  * Add QR codes to the shortened URL
  * Add admin page for DB CRUD
  
