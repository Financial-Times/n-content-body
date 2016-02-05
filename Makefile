install:
	obt install --verbose

test:
	obt verify
	obt build
