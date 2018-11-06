module.exports = function NoMoreAnnoyingTitles(mod) {
	const achieves = {
		99115: true,
		99116: true,
		99117: true,
		99111: true,
		99112: true,
		99113: true,
		99114: true,
		99103: true,
		99104: true,
		99105: true,
		99106: true,
		99103: true,
		99102: true,
		99101: true
	}
	
	mod.hook('S_SPAWN_USER', 13, event=>{
		if(achieves[event.title]) {
			event.title = 0;
			return true;
		}
	});
}