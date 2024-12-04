const calculator = {
    template: `
    <div class="row">
        <div class="col-md-4 offset-md-4">
            <div class="card">
                <div class="card-body">
                    <h3 class="card-title text-center">Calculator</h3>
                    <div class="form-group">
                        <input type="text" id="display" class="form-control text-right" v-model="display" readonly>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1" @click="append('1')">1</button>
                            <button class="btn btn-secondary mx-1" @click="append('2')">2</button>
                            <button class="btn btn-secondary mx-1" @click="append('3')">3</button>
                            <button class="btn btn-secondary mx-1" @click="append('+')">+</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1" @click="append('4')">4</button>
                            <button class="btn btn-secondary mx-1" @click="append('5')">5</button>
                            <button class="btn btn-secondary mx-1" @click="append('6')">6</button>
                            <button class="btn btn-secondary mx-1" @click="append('-')">-</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1" @click="append('7')">7</button>
                            <button class="btn btn-secondary mx-1" @click="append('8')">8</button>
                            <button class="btn btn-secondary mx-1" @click="append('9')">9</button>
                            <button class="btn btn-secondary mx-1" @click="append('*')">*</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="btn-group w-100" role="group">
                            <button class="btn btn-secondary mx-1" @click="append('0')">0</button>
                            <button class="btn btn-secondary mx-1" @click="append('.')">.</button>
                            <button class="btn btn-secondary mx-1" @click="calculate">=</button>
                            <button class="btn btn-secondary mx-1" @click="append('/')">/</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-danger btn-block" @click="clear">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            display: ''
        }
    },
    methods: {
        append(char) {
            this.display += char;
        },
        clear() {
            this.display = '';
        },
        calculate() {
            try {
                this.display = eval(this.display);
            } catch (e) {
                this.display = 'Error';
            }
        }
    }
};