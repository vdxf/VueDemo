const Tool = function (win) {
    let Tool = {};

    Tool.dataToLocalStorageOperate = {
        save: function (dataName, dataValue) {
            if (typeof dataName !== 'undefined' && typeof  dataValue !== 'undefined')
                localStorage.setItem(dataName, JSON.stringify(dataValue))
        },
        achieve: function (dataName) {
            let dataValue = localStorage.getItem(dataName)
            dataValue && (dataValue = JSON.parse(dataValue))
            return dataValue
        },
        remove: function (dataName) {
            if (dataName) {
                localStorage.removeItem(dataName)
            }
        },
        clear: function () {
            localStorage.clear()
        }
    }
    return Tool
} (window)
export default Tool