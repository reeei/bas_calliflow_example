sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageBox) {
        "use strict";
        //グローバル変数
        //Backendサービス(カスタムビジネスオブジェクト)の取得結果格納用オブジェクト変数
        var oData;

        return Controller.extend("journalentryiflauncher.controller.JournalEntryView", {
            onInit: function(){
                //Odata接続
                var oModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/YY1_P0001_CBO_CDS/");
                var oFilter = new sap.ui.model.Filter("KeyID", "EQ", "0001");
                //Odataサービス経由でAPIHostを含む固定値レコード取得
                oModel.read(
                    "/YY1_P0001_CBO",
                    {
                        "filters": [oFilter],
                        "success": function(oDataTemp, oResponse){
                            oData = oDataTemp;
                        },
                        "error": function(oError){
                            console.log(oError);
                            MessageBox.error("アプリ起動時にエラーが発生しました。更新してください。");
                        }
                    }
                );
            },

            call632: function(){
                //Busy設定
			    var oTable = this.byId("table0");
			    oTable.setBusy(true);
                //Host取得
                var host = oData.results[0].Host;
                const Http = new XMLHttpRequest();
                const url = "https://" + host + "/632_JournalEntrySalary";
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = function(){
                    //
                    if(Http.readyState == 4){
                        if(Http.status == 200){
                            console.log(Http.responseText);
                            MessageBox.success("正常に実行終了しました。S/4の通知を確認してください。");
                            oTable.setBusy(false);
                        } else if(Http.status == 210) {
                            console.log(Http.responseText);
                            MessageBox.success("データ取得件数が0件です。正常終了しました。");
                            oTable.setBusy(false);
                        } else {
                            console.log(Http.responseText);
                            MessageBox.error("データ連携時にエラーが発生しました。システム管理者へ連絡してください。");
                            oTable.setBusy(false);
                        }
                    }
                };
		    },

            call651: function(){
                //Busy設定
			    var oTable = this.byId("table0");
			    oTable.setBusy(true);
                //Host取得
                var host = oData.results[0].Host;
                const Http = new XMLHttpRequest();
                const url = "https://" + host + "/651_JournalEntryLaborCost";
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = function(){
                    //
                    if(Http.readyState == 4){
                        if(Http.status == 200){
                            console.log(Http.responseText);
                            MessageBox.success("正常に実行終了しました。S/4の通知を確認してください。");
                            oTable.setBusy(false);
                        } else if(Http.status == 210) {
                            console.log(Http.responseText);
                            MessageBox.success("データ取得件数が0件です。正常終了しました。");
                            oTable.setBusy(false);
                        } else {
                            console.log(Http.responseText);
                            MessageBox.error("データ連携時にエラーが発生しました。システム管理者へ連絡してください。");
                            oTable.setBusy(false);
                        }
                    }
                };
            },

            call652: function(){
                //Busy設定
			    var oTable = this.byId("table0");
			    oTable.setBusy(true);
                //Host取得
                var host = oData.results[0].Host;
                const Http = new XMLHttpRequest();
                const url = "https://" + host + "/652_JournalEntryBusFacTaxDeduction";
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = function(){
                    //
                    if(Http.readyState == 4){
                        if(Http.status == 200){
                            console.log(Http.responseText);
                            MessageBox.success("正常に実行終了しました。S/4の通知を確認してください。");
                            oTable.setBusy(false);
                        } else if(Http.status == 210) {
                            console.log(Http.responseText);
                            MessageBox.success("データ取得件数が0件です。正常終了しました。");
                            oTable.setBusy(false);
                        } else {
                            console.log(Http.responseText);
                            MessageBox.error("データ連携時にエラーが発生しました。システム管理者へ連絡してください。");
                            oTable.setBusy(false);
                        }
                    }
                };
            },

            call653: function(){
                //Busy設定
			    var oTable = this.byId("table0");
			    oTable.setBusy(true);
                //Host取得
                var host = oData.results[0].Host;
                const Http = new XMLHttpRequest();
                const url = "https://" + host + "/653_JournalEntrySecondContribution";
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = function(){
                    //
                    if(Http.readyState == 4){
                        if(Http.status == 200){
                            console.log(Http.responseText);
                            MessageBox.success("正常に実行終了しました。S/4の通知を確認してください。");
                            oTable.setBusy(false);
                        } else if(Http.status == 210) {
                            console.log(Http.responseText);
                            MessageBox.success("データ取得件数が0件です。正常終了しました。");
                            oTable.setBusy(false);
                        } else {
                            console.log(Http.responseText);
                            MessageBox.error("データ連携時にエラーが発生しました。システム管理者へ連絡してください。");
                            oTable.setBusy(false);
                        }
                    }
                };
            },
            call668: function(){
                //Busy設定
			    var oTable = this.byId("table0");
			    oTable.setBusy(true);
                //Host取得
                var host = oData.results[0].Host;
                const Http = new XMLHttpRequest();
                const url = "https://" + host + "/668_DirectActivityAllocationLaborCost";
                Http.open("GET", url);
                Http.send();
                Http.onreadystatechange = function(){
                    //
                    if(Http.readyState == 4){
                        if(Http.status == 200){
                            console.log(Http.responseText);
                            MessageBox.success("正常に実行終了しました。");
                            oTable.setBusy(false);
                        } else if(Http.status == 210) {
                            console.log(Http.responseText);
                            MessageBox.success("データ取得件数が0件です。正常終了しました。");
                            oTable.setBusy(false);
                        } else if(Http.status == 504) {
                            console.log(Http.responseText);
                            MessageBox.warning("データ連携に時間がかかっています。連携完了後に受信するメールをご確認ください。※メール受信まで5～10分程度かかることがあるためご了承ください。");
                            oTable.setBusy(false);
                        } else {
                            console.log(Http.responseText);
                            MessageBox.error("データ連携時にエラーが発生しました。システム管理者へ連絡してください。");
                            oTable.setBusy(false);
                        }
                    }
                };
            }

        });
    });
