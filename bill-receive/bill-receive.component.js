window.billReceiveComponent = Vue.extend({
    components: {
        'menu-component': billReceiveMenuComponent
    },
    template: `
    <style>
        .minha-classe{
            background-color: burlywood;
        }
        .red{
            color: red;
        }
        .green{
            color: green;
        }
        .gray{
            color: gray;
        }
    </style>

    <h1>{{ title }}</h1>
    <h3 :class="{'gray': status === false, 'green': status > 0, 'red': status === 0 }">{{ status | statusGeneralReceive}}</h3>
    
    <menu-component></menu-component>
    <router-view></router-view>`,
    data: function() {
        return {
            test: '',
            title: "Contas a receber"
        }
    },
    computed: {
        status: function(){
            var bills = this.$root.$children[0].billsReceive;
            if(!bills.length){
                return false;
            }
            var count = 0;
            for(var i in bills){
                if(!bills[i].done){
                    count++;
                }
            }
            console.log(count);
            return count;
        }
    }
});