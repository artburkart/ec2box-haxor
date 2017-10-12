default: build

build:
	@npm install
	@zip -r ec2box-haxor.zip * -x ec2box-haxor.zip
