/*global history */
sap.ui.define([
	"sitbh/controller/BaseController",
	"sitbh/model/formatter"
], function(BaseController, formatter) {
	"use strict";

	return BaseController.extend("sitbh.controller.Categorias", {

		formatter: formatter,

		onInit: function() {

		},
		
		onCategoriaSelected: function(oEvent){
			var oParameters = oEvent.getParameters();
			var oItemList = oParameters.listItem;
			
			var oContext = oItemList.getBindingContext();
			
			var oCategoria = oContext.getObject();
			
			// var oContext = 
			// alert("msg");
			var oRouter = this.getRouter();
			oRouter.navTo("categoriaEscolhida", {
				// id: 1
				// id: oItemList.getDescription()
				id: oCategoria.ID
			});
		}

	});
});