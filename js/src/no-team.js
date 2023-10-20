$((()=>{
        const a = new URLSearchParams(window.location.search);
        $("#emailSpan").text(a.get("email"))
    }
));
