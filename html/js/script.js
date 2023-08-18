window.addEventListener('message', function(event) {
    let data = event.data
    if (event.data.type == 'showui') {
        $(".coords-menu").fadeIn(200);
    }
    if (event.data.type == 'hideui') {
        $(".coords-menu").fadeOut();
    }
    if (event.data.type == 'showNotification') {
        const notificationContainer = document.getElementById('notificationContainer');
        notificationContainer.textContent = event.data.message;
        $(".notification").fadeIn(200);
        setTimeout(function () {
            $(".notification").fadeOut();
        }, 2000);
    }
    if (event.data.type == 'copy') {
        const el = document.createElement('textarea');
        el.value = event.data.content;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    $("#close").click(function() {
        $.post("https://epyi_hud/exit", JSON.stringify({}));
    })


    $("#c-vec3").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-vec3"
        }));
    })
    $("#c-table").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-table"
        }));
    })
    $("#c-tablei").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-tablei"
        }));
    })
    $("#c-X").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-X"
        }));
    })
    $("#c-Y").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-Y"
        }));
    })
    $("#c-Z").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "c-Z"
        }));
    })
    $("#h-W").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "h-W"
        }));
    })
    $("#ch-vec4").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "ch-vec4"
        }));
    })
    $("#ch-table").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "ch-table"
        }));
    })
    $("#ch-tablei").click(function() {
        $.post("https://epyi_hud/request-copy", JSON.stringify({
            type: "ch-tablei"
        }));
    })
})