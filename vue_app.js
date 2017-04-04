Vue.use(VueHighcharts);

var options = {
    chart: {
        animation: {
            duration: 2000
        }  
    },
    title: {
        text: 'Reviews'
    },
    legend: {
        enabled: false
    },
    credits: { enabled: false }, tooltip: { enabled: false },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Random Data'
        }, min: 0, max: 100
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'data',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]
    }]
};

var vm = new Vue({
    el: '#app',
    data: {
        options: options,
        toggle_data: true
    },
    mounted:function(){
        this.autoUpdateData();
    },
    methods: {
        btnDataUpdateTogle: function(){
            this.toggle_data = !this.toggle_data;
        },
        autoUpdateData: function(){
            var chart = this.$refs.highcharts.chart, i = 0, random_data = [],
                can_update = this;
            
            setInterval(function(){
                if(can_update.toggle_data){
                    
                    random_data = [];
                    for(i = 0; i < 12; i++){
                        random_data.push(Math.round((Math.random() * 100) * 100) / 100);
                    }
                    chart.series[0].setData(random_data);
                    
                }
            }, 2000);
        }
    }
});