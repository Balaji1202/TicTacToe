import Vue from 'vue';
import TicTacToe from './TicTacToe.vue';

new Vue({
    data() {
        return {
            store: {
                currentMove: 'x',
                gameStatus: '',
                restart: false,
                changeSettings: false,
                boardSize: 3,
                start: false,
                showSetting: false,
                firstPlayer: 'x',
                secondPlayer: 'o',
                singlePlayer: true,
                easy: true
            }
        }
    },
    render: h => h(TicTacToe)
}).$mount('#tic-tac-toe-app')