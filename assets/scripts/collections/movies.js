define(["underscore","backbone","scripts/models/movie"],function(a,b,c){var d=b.Collection.extend({model:c,parse:function(e){if(this.type=="actor"){this.reset(e.cast)}else{this.reset(e.results)}},initialize:function(){this.sort_key="release_date";this.is_asc=false},comparator:function(e,f){e=e.get(this.sort_key);f=f.get(this.sort_key);var g=0;if(this.is_asc==true){g=e>f?1:e<f?-1:0}else{g=e>f?-1:e<f?1:0}return g}});return d});