if (!document.getElementById('plaintext_warning')) {
    let toolbarHeight = 35;
    let div = document.createElement("div");
    div.id = "plaintext_warning";
    div.textContent = "Beware ! This website stores passwords insecurely, click to dismiss this warning";
    let st = div.style;
    st.display = "block";
    st.top = "0px";
    st.left = "0px";
    st.width = "100%";
    st.height = toolbarHeight + "px";
    st.background = "#ff5c33";
    st.color = "black";
    st.fontStyle = "italic";
    st.position = "fixed";
    st.fontSize = "18pt"
    st = "Center"
    div.onclick = function(element) {
        div.style.display = "none"
    };
    document.body.style.webkitTransform = "translateY(" + toolbarHeight + "px)";
    document.documentElement.appendChild(div);
} else {
    document.getElementById('plaintext_warning').style.display = "block"
}
