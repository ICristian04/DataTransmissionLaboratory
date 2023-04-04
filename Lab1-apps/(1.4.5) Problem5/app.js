$('#add').click(function(){
    
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var result = parseInt(firstNumberText) + parseInt(secondNumberText);
    $('#result').val(result);
})
$('#substract').click(function(){
    
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var result = parseInt(firstNumberText) - parseInt(secondNumberText);
    $('#result').val(result);
})
$('#multiply').click(function(){
    
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var result = parseInt(firstNumberText) * parseInt(secondNumberText);
    $('#result').val(result);
})
$('#divide').click(function(){
    
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var result = parseInt(firstNumberText) / parseInt(secondNumberText);
    $('#result').val(result);
})