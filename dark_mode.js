let i = 100;
let found = false;

let editor_inteval = setInterval(function(){
    check_style();

    if (i < 0) {
        clearInterval(editor_inteval);
        if (found === true) {
            setInterval(function(){
                check_style()
            }, 1000)
        }
    }
    i--;
}, 100);

function check_style() {
    let editor_frames = document.querySelectorAll("[guielement=pt-richtextarea] iframe");
    if (editor_frames.length > 0) {
        editor_frames.forEach(function(editor_frame) {
            let editor = editor_frame.contentWindow.document.getElementsByClassName("cke_editable")[0]
            if (editor.style.color !== "rgba(255, 255, 255, 0.88)") {
                editor.style.color = "rgba(255, 255, 255, 0.88)";
            }
        });
    }
}

