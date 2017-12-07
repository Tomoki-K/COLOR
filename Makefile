install:
	npm install

run:
	npm run webpack
	open index.html
	npm run webpack -- --watch
