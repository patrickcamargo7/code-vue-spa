window.billPayCreateComponent = Vue.extend({
    template: `        
        <form name="form" @submit.prevent="submit">
            <label>Vencimento: </label>
            <input type="text" v-model="bill.date_due"/>
            </br></br>
            <label>Nome: </label>
            <select v-model="bill.name">
                <option v-for="name in names" :value="name">{{ name }}</option>
            </select>
            </br></br>
            <label>Valor: </label>
            <input type="text" v-model="bill.value"/>
            </br></br>
            <label>Pago? </label>
            <input type="checkbox" v-model="bill.done"/>
            </br></br>
            <input type="submit" value="Enviar">
        </form>`,
    data: function(){
        return {
            formType: 'insert',
            names: [
                'Conta de Luz',
                'Conta de água',
                'Conta de Telefone',
                'Supermercado',
                'Cartão de Crédito',
                'Empréstimo',
                'Gasolina'
            ],
            bill: {
                date_due: '',
                name: '',
                value: 0,
                done: false
            }
        }
    },
    created: function () {
        if(this.$route.name == 'bill-pay.update'){
            this.formType = 'update';
            this.getBill(this.$route.params.index);
        }
    },
    methods:{
        submit: function(){
            if(this.formType == 'insert'){
                this.$root.$children[0].billsPay.push(this.bill);
            }

            this.bill = {
                date_due: '',
                name: '',
                value: 0,
                done: 0
            };

            this.$router.go({name: 'bill-pay.list'});
        },
        getBill: function(index){
            var bills = this.$root.$children[0].billsPay
            this.bill = bills[index];
        }
    }
});