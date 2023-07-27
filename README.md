# ⌚ WatchList
Hello and welcome! This is a fullstack ecommerce application for manual & automatic watches, implementing React for the frontend and Python & Flask + SQLAlchemy for the backend. This README will give an overview of the server-side, and getting the frontend + backend up & running in the terminals. For an overview of the client-side, please go [here](/client/README.md).

## File Structure
```
.
├── CONTRIBUTING.md
├── LICENSE.md
├── README.md
├── Pipfile
├── Pipfile.lock
├── client
│   ├── README.md
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
│       ├── components
│       └── context
└── server
    ├── app.py
    ├── config.py
    ├── migrations
    ├── models.py
    └── seed.py
```

## Installation & Running Your Server
1. Fork and clone this repo from Github to your local environment
2. Move to your local base directory and open the terminal in your code editor
3. Run ```pipenv install``` to install dependencies
4. Run ```pipenv shell``` to create and enter your virtual environment
5. In your main project directory, run ```cd server``` to enter the server directory
6. After that, in the same terminal, run ```flask run``` to get the backend server up & running

## Generate the Database
<img src="client/public/watchlistERD.png" width="500" alt="watchlist project entity relationship diagram">

To setup your database, do the following:
* `cd` into the `server/` directory and run ```export FLASK_APP=app.py``` to specify how to load the application
* `flask db migrate -m "your message"`
* ```flask db upgrade```
* run ```python seed.py``` to seed the database

> **Tip: It's always a good idea to start with an empty revision! This allows
> you to roll all the way back while still holding onto your database. You can
> create this empty revision with `flask db revision -m'Create DB'`.**

## Starting the Client
To start running the client, do the following:
* open a separate terminal, ```cd``` into the client directory
* run ```npm install``` to install dependencies
* run ```npm start``` to open the app in the browser

> **TIP: It's good practice to have the backend server running first!

## Packages Used







## Resources & Acknowledgements

- [Chatengine.io](https://chatengine.io/)
- Watches used for this app were sourced from the following sites:
    - [TeddyBaldassarre Watch Blog](https://teddybaldassarre.com/blogs/watches/best-mechanical-watches)
    - [FratelloWatches](https://www.fratellowatches.com/the-classic-time-only-manual-wind-watch-examples-for-every-budget-from-hamilton-grand-seiko-omega-and-more/#gref)
    - [SaksFifthAvenue](https://www.saksfifthavenue.com/product/Oris-Big-Crown-ProPilot-X-Calibre-115-0400018040529.html?site_refer=CSE_GGLPLA:Mens_Jewelry:Oris&country=US&currency=USD&CSE_CID=G_Saks_PLA_US_Men%27s+Accessories:Jewelry&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDgMEXcUM_GlruGn-SXkRDlKIEM3bwmDQAUn56LscIl3iUt9qcR4Le4aAtONEALw_wcB&gclsrc=aw.ds)
    - [TwoBrokeWatchSnobs](https://twobrokewatchsnobs.com/best-automatic-watches/)
- [Material UI](https://mui.com/)
- [React documentation](https://react.dev/)
- [Python documentation](https://docs.python.org/3/)
- [Flask documentation](https://stackabuse.com/python-circular-imports/)
- [SQLAlchemy documentation](https://docs.sqlalchemy.org/en/20/)
- [Flask-SQLAlchemy documentation](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)
