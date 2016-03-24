


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
			var title = listing.title;
			var shortTitle = title.substr(0,30) + '...';
			var image = listing.Images[0].url_170x135;
			var desc = listing.description;
			var shortDesc = desc.substr(0, 15) + "...";
			var price = listing.price;
			var url = listing.url;
			//var shop = listing.Shop.shop_name;
			//I should separate this out

			$( ".displayDiv" ).append
  			 ("<div>" + "<a href ='"+url+"'/>" + "<img src ='"+image+"'/>" 
  			 	+ "<span>" + shortTitle  + "</span>" + "<p>" 
  			 	+ "$" +price+ "</p>" + "</div>");

  			//console.log(shop);
		})
	}
});



 


