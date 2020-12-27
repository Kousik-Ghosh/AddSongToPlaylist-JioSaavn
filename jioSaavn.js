window.i = 3;
window.j = 1;
setInterval(function() {
	new Promise(function(myResolve, myReject) {
		var rightClick = document.createEvent('HTMLEvents');
		rightClick.initEvent('contextmenu', true, false);
		var song = document.getElementsByClassName("o-snippet__action-init u-centi")[i];
		song.style.backgroundColor = "Black"
		song.dispatchEvent(rightClick);
		console.info(" Adding song:" + j);
		j++;
		console.info(" i:" + i);
		i = i + 2;
		myResolve();
	}).then(function(value) {
		new Promise(function(myResolve, myReject) {
			setTimeout(function() {
				var addToPlayListButton = document.getElementsByClassName("c-nav__list")[5].getElementsByClassName("c-nav__link")[3];
				addToPlayListButton.click();
				myResolve();
			}, 3000);
		}).then(function(value) {
			new Promise(function(myResolve, myReject) {
				setTimeout(function() {
					var playlist = document.getElementsByClassName("c-nav__list")[7].getElementsByClassName("c-nav__item")[1].getElementsByClassName("c-nav__link")[0];
					playlist.click();
					myResolve();
				}, 3000);
			}).then(function(value) {
				new Promise(function(myResolve, myReject) {
					setTimeout(function() {
						var myName = document.getElementsByClassName("u-margin-bottom-none@sm")[7];
						myName.click();
						myResolve();
					}, 3000);
				});
			}).then(function() {
				new Promise(function(myResolve, myReject) {
					setTimeout(function() {
						var rightClick = document.createEvent('HTMLEvents');
						rightClick.initEvent('contextmenu', true, false);
						var song = document.getElementsByClassName("o-snippet__action-init u-centi")[5];
						song.style.backgroundColor = "Black"
						song.dispatchEvent(rightClick);
						myResolve();
					}, 3000);
				});
			});
		});
	});
}, 15000);