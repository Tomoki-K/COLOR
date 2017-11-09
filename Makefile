install:
	npm install

run:
	npm run webpack
	open html/index.html
	npm run webpack -- --watch
