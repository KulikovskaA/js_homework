/**
 * Created by masya on 6/16/17.
 */
"use strict";
var inputs = document.querySelectorAll("input");
var mail = inputs[2];

mail.value = "texxxxxxxxxxt";
// ////////////or
// document.getElementsByTagName('input')[2].value = "texxxxxxxxxxt";


var inputs = document.querySelectorAll("input");

inputs[0].style.borderStyle = 'solid';
inputs[0].style.borderColor = 'red';
inputs[1].style.borderStyle = 'solid';
inputs[1].style.borderColor = 'red';


var submit = document.querySelector("input[type = 'submit']");

submit.style.background = 'green';
submit.value = "Just button";

var check = document.getElementById('check1');
check.checked = true;










