$(document).ready(function(){
	// Добавление кнопки
	$('#add-item').click(function(){
		var newItem = prompt("Введите название пункта")
		$('#list').append("<li class='item-list'><h4>"+newItem+"</h4><i class='fa fa-times'></i></li>");
	});
	// Удаление кнопки
	$('html').on('click','.fa-times', function(){
		$(this).parent().remove();
	});

})