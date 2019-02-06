function MyDashboardViewModel(bindingContainerId) {
    var self = this;
    var containerId = bindingContainerId;

    self.validationMsgs = ko.observableArray([]);

    self.myTaskCountList = ko.observableArray([]);
    self.allTaskCountList = ko.observableArray([]);
    self.myCompletedTaskCountList = ko.observableArray();

    self.isMyTasksLoading = ko.observable(true);
    self.isAllTasksLoading = ko.observable(true);
    self.isMyCompletedTasksLoading = ko.observable(true);
    self.userId = ko.observable();

    self.isMyTasksEmpty = ko.computed(function() {
        return !self.isMyTasksLoading() && self.myTaskCountList().length === 0;
    });
    self.isAllTasksEmpty = ko.computed(function() {
        return !self.isAllTasksLoading() && self.allTaskCountList().length === 0;
    });
    self.isMyCompletedTasksEmpty = ko.computed(function() {
        return !self.isMyCompletedTasksLoading() && self.myCompletedTaskCountList().length === 0;
    });

    function validResult(result) {
        if (result.ResultCode === "success") {
            return true;
        } else {
            self.validationMsgs.pushAll(result.ValidationMsgs, false);
            return false;
        }
    }

    self.searchMyTask = function(data, event) {
        self.validationMsgs.removeAll();
        //amplify.store("searchMyTask", { TaskID: data.TaskID(), UserID: self.userId() });
        //navigate.tabNav(2);
        MyDashboardService.instance().get_NextFileToProcessByMyTask(data.TaskID(), function(result) {
            var canNavigate = false;

            if (result.ResultCode === "success") {
                if (result.Result1 != null) {
                    if (result.Result1.FileID_HRef != null) {
                        canNavigate = true;
                        navigate.fileSelectNav(result.Result1.FileID_HRef);
                    }
                }
            }

            if (!canNavigate) {
                self.validationMsgs.push({ Key: "cannotNavigate", Value: "Unable to nagivate to next file. Please try another task." });
            }
        });
    };
    self.searchAllTask = function(data, event) {
        amplify.store("searchAllTask", data.TaskID());
        navigate.tabNav(2);
    };
    self.init = function() {
        MyDashboardService.instance().get_MyTaskCounts(function(result) {
            self.myTaskCountList.pushAllToObservables(result.Result1, false);
            self.userId(result.Result2);
            self.chart("myTasksChart", self.makeChartData(result.Result1), "My Tasks");
            self.isMyTasksLoading(false);
        });
        MyDashboardService.instance().get_AllTaskCounts(function(result) {
            self.allTaskCountList.pushAllToObservables(result.Result1, false);
            self.chart("allTasksChart", self.makeChartData(result.Result1, 10), "All Tasks");
            self.isAllTasksLoading(false);
        });
        MyDashboardService.instance().get_MyCompletedTaskCounts(function(result) {
            self.myCompletedTaskCountList.pushAllToObservables(result.Result1, false);
            self.chart("myCompletedTasksChart", self.makeChartData(result.Result1), "My Completed Tasks");
            self.isMyCompletedTasksLoading(false);
        });
    };
    self.makeChartData = function(data, top) {
        if (data.length === 0) {
            return null;
        }
        if (top == null || top > data.length) {
            top = data.length;
        }
        var dataList = [];
        var totalOther = 0;
        var x;
        for (x = 0; x < top; x++) {
            dataList.push({ name: data[x].TaskName, y: data[x].TaskCount });
        }

        if (top !== data.length) {
            for (x = top; x < data.length; x++) {
                totalOther += data[x].TaskCount;
            }
            dataList.push({ name: "Other", y: totalOther });
        }

        return dataList;
    };
    self.chart = function(id, dataList, name) {
        if (!dataList) {
            return;
        }
        $("#" + id).highcharts({
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie"
            },
            title: {
                text: ""
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                    //dataLabels: {
                    //    enabled: true,
                    //    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    //    style: {
                    //        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    //    }
                    //}
                }
            },
            series: [
                {
                    name: name,
                    colorByPoint: true,
                    data: dataList
                }
            ]
        });
    };
    var element = $("#" + containerId)[0];
    ko.applyBindings(self, element);
}