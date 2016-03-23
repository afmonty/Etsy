


var etsydata = $.ajax({
	url: "https://api.etsy.com/v2/listings/active.js?api_key=cs08kp5uc0o3f5hgkek1lp4d&keywords=ninja&includes=Images,Shop`",
	type: "GET",
	dataType: 'jsonp',
	success: function(data) {
		console.log(data);
		// for(var i = 0; i < 25; i++){
		// 	[etsydata].indexOf("index", "title", "price");
		// 	console.log(datalist);
		data.results.forEach(function(listing){
			var title = [listing.title];
			//var shortTitle = title.substr(0,17) + '...';
			var image = listing.Images[0].url_170x135;
			var desc = listing.description;
			var price = listing.price;
			//var shop = listing.Shop.shop_name;

			$( ".displayDiv" ).append
  			 ("<div>" + "<img src ='"+image+"'/>" 
  			 	+ "<span>" + title  + "</span>" + "<span>" 
  			 	+price+ "</span>" + "</div>");

  			console.log(listing.shop);
		})
	}
});






 


