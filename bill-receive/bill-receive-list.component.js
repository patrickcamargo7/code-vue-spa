window.billReceiveListComponent = Vue.extend({
    template: `
        <style>
        .pago{
            color: green;
        }
        .nao-pago{
            color: red;
        }
        </style>
        <table border="1" cellpadding="10">
            <thead>
            <tr>
                <th>#</th>
                <th>Vencimento</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Recebido?</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(index, bill) in bills">
                <td>{{ index + 1 }}</td>
                <td>{{ bill.date_due }}</td>
                <td>{{ bill.name }}</td>
                <td>{{ bill.value | currency 'R$ ' 2 }}</td>
                <td class="minha-classe" :class="{'pago': bill.done, 'nao-pago': !bill.done}">
                    {{ bill.done | doneLabel }}
                </td>
                <td>
                    <a v-link="{ name: 'bill-receive.update', params: { index: index } }">Editar</a> |
                    <a href="#" @click.prevent="deleteBill(bill)">Excluir</a>
                </td>
            </tr>
            </tbody>
        </table>
    `,
    data: function () {
        return {
            bills: this.$root.$children[0].billsReceive
        }
    },
    methods: {
        deleteBill: function (bill) {
            if(confirm('Deseja excluir esta conta?')) {
                this.$root.$children[0].billsReceive.$remove(bill);
            }
        }
    }
});