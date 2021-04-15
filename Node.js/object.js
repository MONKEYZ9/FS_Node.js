/**
 * http://usejsdoc.org/
 */
var member = ['sa', 'sa1', 'sa2'];
console.log(member[0]);

for (var i = 0; i < member.length; i++) {
	console.log(member[i]);
}



var roles = {
		'sangmin' :'programmer',
		'sangmin2' :'programmer',
		'sangmin3' :'programmer',
		'sangmin4' :'programmer'
}

for ( var name in roles) {
	console.log('object =>', name, 'value=>', roles[name]);
}

console.log(roles.sangmin);