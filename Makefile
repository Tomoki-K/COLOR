install:
	npm install

run:
	npm run webpack
	open html/app.html
	npm run webpack -- --watch
