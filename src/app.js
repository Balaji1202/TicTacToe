import Vue from 'vue';
import TicTacToe from './TicTacToe.vue';

new Vue({
    data() {
        return {
            store: {
                currentMove: 'x',
                gameStatus: '',
                restart: false,
                boardSize: 3,
                start: false
            }
        }
    },
    render: h => h(TicTacToe)
}).$mount('#tic-tac-toe-app')