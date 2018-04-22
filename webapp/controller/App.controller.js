sap.ui.define([
	"sitbh/controller/BaseController"
], function(BaseController) {
	"use strict";
	
	return BaseController.extend("sitbh.controller.App", {
	
		onInit: function(){
			
			//var aCategorias = [ "Comida", "Bebida" ];
			var aCategoriasRoot = {
				categorias : { 
					nomes : [
						{ nome: "Comida" },
						{ nome: "Bebida" }
					]
				}
			};
			
 			var oModel1 = new sap.ui.model.json.JSONModel(aCategoriasRoot);
 			
 			// var ocombo1 = this.byId("comboCategorias");
 			// ocombo1.setModel(oModel1);
			
			this.getView().setModel(oModel1, "view");
 			
 			
			
		},
	
		onPress : function (oEvent) {
	//		debugger;
			//alert(msg)
		}
	});

});