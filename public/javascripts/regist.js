$(function() {
	$("#btnReg").click(function() {
		$.ajax({
			url: "/register/userRegister",
			type: "POST",
			dataType: "text",
			data: {
				username: $("#username").val(),
				password: $("#pwd").val(),
				name: $("#name").val()
			},
			success: function(data, textStatus) {
				var dataJson = eval("(" + data + ")");
				if (dataJson == true) {
					alert("成功");
				} else {
					alert("失败");
				}

			}
		});
	});
});
