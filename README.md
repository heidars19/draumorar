# Draumórar

Personal project for Heiðar Sigurjónsson

# Visit website


*Please note: Website does not use https, so don't enter any sensitive information into fields*

# Running the website locally
1. Clone this project `git clone https://github.com/heidars19/draumorar.git`
2. Inside the project folder, create a new virtual environment `virtualenv venv`
3. Activate the virtual environment `source venv/bin/activate`
4. Install Django `pip install django`
5. Install Postgres support `pip install psycopg2`
5. Install Django-Heroku `pip install django-heroku`
6. Install gUnicorn `pip install gunicorn`
8. Run `python manage.py runserver`
9. Open your web browser on localhost:8000

# Heroku commands
1. Install heroku CLI
2. `heroku --version`
3. `heroku login`
4. `heroku git:remote -a draumorar`

# Deploying
`git push heroku master`

Everything should work from here on out!
