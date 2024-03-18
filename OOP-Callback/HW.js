
class NumberContainer {
    // HW1: try to set initial values through 
    //constructor - new NumberContainer(2, 4, 6)
    constructor(v_0, v_1, v_2) {
        this.val_0 = v_0
        this.val_1 = v_1
        this.val_2 = v_2

    }

    get length () {
        for (let i=0; i<3; i++) {
            if (this[`val_${i}`] == undefined) {
                return i
            }
        }
        return 3
    }
}