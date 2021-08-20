input.onButtonPressed(Button.A, function () {
    kitronik_RTC.setTime(14, 7, 0)
    kitronik_RTC.setDate(20, 8, 2021)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (kitronik_RTC.readMinutes()))
})
basic.forever(function () {
	
})
