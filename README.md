# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

https://yarnpkg.com/package/@tailwindcss/forms
yarn add @tailwindcss/forms

rails new creators -c tailwind -j esbuild -d postgresql -T --main


rails dbconsole
\d
\d events
\dT+


procfile.dev

brew install redis
brew services start redis

EDITOR="atom --wait" rails credentials:edit

stripe listen --forward-to localhost:3000/webhooks/stripe
stripe listen --forward-to localhost:3000/webhooks/stripe --forward-connect-to localhost:3000/webhooks/stripe

https://www.youtube.com/watch?v=M1_JCZxhlRA&list=PLS6F722u-R6IJfBrIRx3a2SBkAL4vUp2p&index=9

min 14