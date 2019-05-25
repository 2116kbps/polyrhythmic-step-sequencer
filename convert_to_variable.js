var myval="";

function bang()
{
	outlet(0, myval);
}

function msg_int(v)
{
	myval = "$" + v;
	bang();
}