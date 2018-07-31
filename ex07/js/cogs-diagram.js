$(document).ready(function() {
	console.log("cogs");

	$("#n_carlos").hover( 
		function(){
			$("#cog1, #cog3, #cog5").css({
				'transform':'rotate(40deg)',
				'transform-origin': 'center'
			});
			$("#cog2, #cog4").css({
				'transform':'rotate(-40deg)'
			});
		},
		function(){
			$("#cog1, #cog3, #cog5").css({
				'transform':'rotate(0deg)',
				'transform-origin': 'center'
			});
			$("#cog2, #cog4").css({
				'transform':'rotate(0deg)'
			});
		}
	);
});