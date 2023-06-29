function getInputElement(e) {
    return document.getElementById("digit" + e + "-input")
}

function moveToNext(e, t) {
    t = t.which || t.keyCode;
    1 === getInputElement(e).value.length
        && (6 !== e ? getInputElement(e + 1).focus() : (getInputElement(e).blur())),
        8 === t && 1 !== e && getInputElement(e - 1).focus()
}