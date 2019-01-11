$(() => {
    let btn = $("#btn");
    let login = (user, mima) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: "http://localhost:3000/setting/login",
                data: {
                    user,
                    mima
                },
                success(data) {
                    resolve(data)
                    console.log(data);
                }
            })
        })
    }
    btn.click(async () => {
        let user = $("#user").val();
        let mima = $("#mima").val();
        let data = await login(user, mima);
        if (data === '成功') {
            console.log('登录成功');
            location.href='index.html';
        } else {
            console.log('登录失败');
        }
    })
})