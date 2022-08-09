

$(document).on('change','.card-selection',function() {
	a = $("input[type='checkbox']").val();
	if(this.checked){
		console.log(this.parentNode);
		this.parentNode.getElementsByClassName('unchecked')[0].style.display = "none";
		this.parentNode.getElementsByClassName('checked')[0].style.display = "block";
	} else {
		this.parentNode.getElementsByClassName('checked')[0].style.display = "none";
		this.parentNode.getElementsByClassName('unchecked')[0].style.display = "block";
	}
});