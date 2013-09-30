// Using jquery solution
// (function(){

// 	app.el['input_city'] = $('input[bs-typeahead="listCity"]');

// 	app.el['input_city'].typeahead({
// 	    source: function(query, process) {
// 	        var objects = [], data = [{"id":1, "city":"London"},{"id":2, "city":"Madrid"},{"id":3, "city":"Paris"}]
// 	        $.each(data, function(i, object) {
// 	            app.mapped[object.city] = object;
// 	            objects.push(object.city);
// 	        });
// 	        process(objects);
// 	    },
// 	    updater: function(item) {
// 			// $("ul.typeahead.dropdown-menu:visible").siblings("input[type='hidden']").val(app.mapped[item].id);
// 			this.$element.siblings('input[type="hidden"]').val(app.mapped[item].id);
// 			return item;
// 	    }
// 	}); 

// })();