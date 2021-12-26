let raz = new Number;

raz = 0;

a.onclick = function () {

    raz = raz + 1;
    var div1 = div0.cloneNode(false);
    var divdiv = div1;
    div1.id = "div" + raz;
    div1.style.display = "block";
    block1.after(div1);

    div1 = cl0.cloneNode(true);
    div1.id = "cl" + raz;
    divdiv.prepend(div1);


    div1 = br0.cloneNode(true);
    div1.id = "br" + raz;
    divdiv.prepend(div1);

    div1 = bt3.cloneNode(true);
    div1.id = "e" + raz;
    divdiv.prepend(div1);
    div1.onclick = function () {
        divdiv.style.display = "none";
        var st = div1.id;
        document.forms[tttt]["st"].value = "";
        document.forms[tttt]["st2"].value = "";
    }

    div1 = bt2.cloneNode(true);
    div1.id = "w" + raz;
    divdiv.prepend(div1);
    div1.onclick = function () {

        var st = div1.id;
        var uuuu = tttt.substring(2, st.length);
        var gggg = Number(uuuu);
        if (gggg != 1) {
            gggg = gggg - 1;
            var yyyy = "div" + gggg;
            var hh1 = document.forms[tttt]["st"].value;
            var hh11 = document.forms[tttt]["st2"].value;
            var hh2 = document.forms[yyyy]["st"].value;
            var hh22 = document.forms[yyyy]["st2"].value;
            document.forms[tttt]["st"].value = hh2;
            document.forms[tttt]["st2"].value = hh22;
            document.forms[yyyy]["st"].value = hh1;
            document.forms[yyyy]["st2"].value = hh11;
        }


    }

    div1 = bt1.cloneNode(true);
    div1.id = "q" + raz;
    divdiv.prepend(div1);
    div1.onclick = function () {

        var tttt = div1.id;
        var uuuu = tttt.substring(2, tttt.length);
        var gggg = Number(uuuu);
        if (gggg != raz) {
            gggg = gggg + 1;
            var yyyy = "div" + gggg;
            var hh1 = document.forms[tttt]["st"].value;
            var hh11 = document.forms[tttt]["st2"].value;
            var hh2 = document.forms[yyyy]["st"].value;
            var hh22 = document.forms[yyyy]["st2"].value;
            document.forms[tttt]["st"].value = hh2;
            document.forms[tttt]["st2"].value = hh22;
            document.forms[yyyy]["st"].value = hh1;
            document.forms[yyyy]["st2"].value = hh11;
        }


    }

    div1 = ff0.cloneNode(true);
    div1.id = "ff" + raz;
    div1.name = "div" + raz;
    divdiv.prepend(div1);

    b.onclick = function () {
        var kk = "";
        var i;



        for (i = raz; i > 1; i = i - 1) {

            var hh = document.forms["div" + i]["st"].value;
            var jj = document.forms["div" + i]["st2"].value;
            if ((hh != "") && (jj != ""))
                kk = kk + "\u0022" + hh + "\u0022" + ":" + "\u0022" + jj + "\u0022" + ",";
        }
        if (i == 1) {
            var hh = document.forms["div" + i]["st"].value;
            var jj = document.forms["div" + i]["st2"].value;
            if ((hh != "") && (jj != ""))
                kk = kk + "\u0022" + hh + "\u0022" + ":" + "\u0022" + jj + "\u0022";
        }
        if (((document.forms["div" + raz]["st"].value) == "") || ((document.forms["div" + raz]["st2"].value) == "")) kk = kk.substring(0, kk.length - 1);

        if (kk != "")
            kk = "{" + kk + "}";
        let div = document.createElement('div');
        div.innerHTML = kk;
        document.body.append(div);
    }

};
