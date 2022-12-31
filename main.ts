radio.setGroup(1)

input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
})

radio.onReceivedString(function (onReceivedString) {
    if (onReceivedString == "yes") {
        basic.showString("yes")
    }
})

