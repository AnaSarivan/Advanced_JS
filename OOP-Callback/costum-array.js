
// in console - nc = new NumberContainer()
class NumberContainer {
    // HW1: try to set initial values through 
    //constructor - new NumberContainer(2, 4, 6)
    constructor(maxLen = 3) {
        this.val_0 = undefined
        this.val_1 = undefined
        this.val_2 = undefined

        this.maxLen = maxLen
    }

    get length () {
        /* if (this.val_0 == undefined) {
            return 0 
        } else if (this.val_1 == undefined) {
            return 1
        } else if (this.val_2 == undefined) {
            return 2
        } else {
            return 3
        } */
        for (let i=0; i<this.maxLen; i++) {
            if (this[`val_${i}`] == undefined) {
                return i
            }
        }
        return this.maxLen
    }

    //HW2: try to avoid anything else than numbers
    push (number) {
        /* if(this.length == 0) {
            this.val_0 = number
        } else if (this.length == 1) {
            this.val_1 = number
        } else if (this.length == 2) {
            this.val_2 = number
        } else {
            console.error("Container FULL!")
        } */

        if (this.length == this.maxLen)  {
            return console.error("Container FULL!")
        }
        this[`val_${this.length}`] = number
    }

    forEach (cb) {
        /* if(this.length > 0) {
            cb(this.val_0)
        }
        if(this.length > 1) {
            cb(this.val_1)
        }
        if(this.length > 2) {
            cb(this.val_2)
        } */
        for (let i=0; i<this.length; i++) {
            cb(this[`val_${i}`])
        }
    } // in console - nc.forEach((n) => {console.log(n)})

    // HW3: try to do a forEachReverse (cb (val))

    reduce (cb , initVal) {
        // optimize this code(reduce) using for loop
        let acc = initVal
        // this work as a loop
        if(this.length > 0) {
            acc = cb(this.val_0, acc)
        }
        if(this.length > 1) {
            acc = cb(this.val_1, acc)           
        }
        if(this.length > 2) {
            acc = cb(this.val_2, acc)
        }
        return acc
    }
 
}

