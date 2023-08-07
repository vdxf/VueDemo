import Tool from '@/assets/lib/Tool'
const Util = function (win) {
    const Util = {}
    Util.TotalBalance = {
        query () {
            return +Tool.dataToLocalStorageOperate.achieve('totalBalance') || 0
        },
        save (totalBalance) {
            Tool.dataToLocalStorageOperate.save('totalBalance', totalBalance)
        }
    }
    Util.Bill = {
        query ( queryCondition ) {
            let billArr = Tool.dataToLocalStorageOperate.achieve('billArr') || []
            if ( queryCondition ) {
                const yearValue = queryCondition.yearValue
                const monthValue = queryCondition.monthValue
                const dayValue = queryCondition.dayValue
                const checkValueArr = queryCondition.checkValueArr
                if (yearValue) {
                    let arr = []
                    billArr.forEach(( item, index ) => {
                        if ( item.dateValue.split('-')[0] === yearValue ) {
                            arr.push(item)
                        }
                    });
                    billArr = arr
                }
                if (monthValue) {
                    let arr = []
                    billArr.forEach(( item, index ) => {
                        if ( item.dateValue.split('-')[1] === monthValue ) {
                            arr.push(item)
                        }
                    });
                    billArr = arr
                }
                if (dayValue) {
                    let arr = []
                    billArr.forEach(( item, index ) => {
                        if ( item.dateValue.split('-')[2] === dayValue ) {
                            arr.push(item)
                        }
                    });
                    billArr = arr
                }
                if (checkValueArr.length) {
                    let arr = []
                    checkValueArr.forEach( ( item, index ) => {
                        billArr.forEach( ( it, i ) => {
                            console.log(item,it)
                            if ( it.billTypeNumber === item ) {
                                arr.push(it)
                            }
                        } )
                    });
                    console.log(arr)

                    billArr = arr
                }
            }
            return billArr
        },
        save ( bill ) {
            if ( !bill ) return
            if ( bill.consumptionOrEntry === 0 ) {
                Util.TotalBalance.save(+Util.TotalBalance.query() - ( +bill.sumValue ) )
            } else {
                Util.TotalBalance.save( +Util.TotalBalance.query() + ( +bill.sumValue ) )
            }
            let billArr = Util.Bill.query()
            billArr.unshift( bill )
            Tool.dataToLocalStorageOperate.save( 'billArr', billArr )
        },
        remove ( bill ) {
            let billArr = this.query()
            billArr.forEach( ( item, index ) => {
                if ( item.id === bill.id ) {
                    billArr.splice( index, 1 )
                    if ( bill.consumptionOrEntry === 0 ) {
                        Util.TotalBalance.save( +Util.TotalBalance.query() + ( +bill.sumValue ) )
                    } else {
                        Util.TotalBalance.save( +Util.TotalBalance.query() - ( +bill.sumValue ) )
                    }
                }
            } );
            Tool.dataToLocalStorageOperate.save( 'billArr', billArr )
        }
    }
    return Util
} (window)
export default Util