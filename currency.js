function euroConverter(){
document.converter.dollar.value = document.converter.euro.value * 1.08
document.converter.pound.value = document.converter.euro.value * 0.86
document.converter.yen.value = document.converter.euro.value * 119.61
document.converter.yuan.value = document.converter.euro.value * 7.41
document.converter.cad.value = document.converter.euro.value * 1.42

}
function dollarConverter(){
document.converter.euro.value = document.converter.dollar.value * 0.930
document.converter.pound.value = document.converter.dollar.value * 0.80
document.converter.yen.value = document.converter.dollar.value * 111.26
document.converter.yuan.value = document.converter.dollar.value * 6.89
document.converter.cad.value = document.converter.dollar.value * 1.32
}
function poundConverter(){
document.converter.dollar.value = document.converter.pound.value * 1.24
document.converter.euro.value = document.converter.pound.value * 1.16
document.converter.yen.value = document.converter.pound.value * 138.46
document.converter.yuan.value = document.converter.pound.value * 8.58
document.converter.cad.value = document.converter.pound.value * 1.66

}

function yuanConverter(){
document.converter.euro.value = document.converter.yuan.value * 0.13
document.converter.dollar.value = document.converter.yuan.value * 0.15
document.converter.pound.value =  document.converter.yuan.value * 0.12
document.converter.yen.value = document.converter.yuan.value * 16.14
document.converter.cad.value = document.converter.yuan.value * 0.19

}

function yenConverter(){
document.converter.dollar.value = document.converter.yen.value * 0.0009
document.converter.pound.value = document.converter.yen.value * 0.0072
document.converter.euro.value = document.converter.yen.value * 0.0084
document.converter.yuan.value = document.converter.yen.value * 0.0062
document.converter.cad.value = document.converter.yen.value * 0.011


}

function cadConverter(){
document.converter.euro.value = document.converter.cad.value * 0.70
document.converter.dollar.value = document.converter.cad.value * 0.74
document.converter.pound.value = document.converter.cad.value * 0.60
document.converter.yuan.value = document.converter.cad.value * 5.16
document.converter.yen.value = document.converter.cad.value * 84

} 