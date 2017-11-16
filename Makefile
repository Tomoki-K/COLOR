install:
	npm install

run:
	npm run webpack
	open app.html
	npm run webpack -- --watch
