import React from "react"
import { int_calc, att_calc, def_calc, as_calc, ct_calc, ls_calc, fr_calc, wr_calc, wir_calc, er_calc, hp_calc } from "./stat_funtions"

export default function Tips(props) {

    // console.log(props.name)
    // console.log(props.rarity)
    // console.log(props.origin)
    // console.log(props.prof)
    // console.log(props.lvl)
    // console.log(props.part)
    // console.log(props.ratio)

    var rarity_main = document.createElement("DIV");
    var rarity_name = document.createElement("DIV");

    if (props.rarity == "normal") {
        rarity_main.setAttribute("class", "normal")
        rarity_name.setAttribute("class", "rarity-normal")
        rarity_name.innerText = "( Normal )"
    }
    if (props.rarity == "rare") {
        rarity_main.setAttribute("class", "rare")
        rarity_name.setAttribute("class", "rarity-rare")
        rarity_name.innerText = "( Rare )"
    }
    if (props.rarity == "epic") {
        rarity_main.setAttribute("class", "epic")
        rarity_name.setAttribute("class", "rarity-epic")
        rarity_name.innerText = "( Epic )"
    }
    if (props.rarity == "legendary") {
        rarity_main.setAttribute("class", "legendary")
        rarity_name.setAttribute("class", "rarity-legendary")
        rarity_name.innerText = "( Legendary )"
    }
    if (props.rarity == "mithic") {
        rarity_main.setAttribute("class", "mithic")
        rarity_name.setAttribute("class", "rarity-mithic")
        rarity_name.innerText = "( Mithic )"
    }

    if (props.prof == "mage") {
        var prof = "Maga"
    }
    if (props.prof == "hunter") {
        var prof = "Łowcy"
    }
    if (props.prof == "warrior") {
        var prof = "Wojownika"
    }

    if (props.prof == "mage") {
        var prof_n = "Mag"
    }
    if (props.prof == "hunter") {
        var prof_n = "Łowca"
    }
    if (props.prof == "warrior") {
        var prof_n = "Wojownik"
    }

    if (props.part == "boots") {
        var part = "Buty"
    }
    if (props.part == "armor") {
        var part = "Zbroja"
    }
    if (props.part == "helmet") {
        var part = "Hełm"
    }
    if (props.part == "gloves") {
        var part = "Rękawice"
    }
    if (props.part == "shield") {
        var part = "Tarcza"
    }
    if (props.part == "ring") {
        var part = "Pierścień"
        var t = "Bizu"
    }
    if (props.part == "necklace") {
        var part = "Naszyjnik"
        var t = "Bizu"
    }
    if (props.part == "wand") {
        var part = "Różdzka"
        var type = "Jednoręczny"
    }
    if (props.part == "staff") {
        var part = "Laska"
        var type = "Dwuręczny"
    }
    if (props.part == "bow") {
        var part = "Łuk"
        var type = "Dwuręczny"
    }
    if (props.part == "crossbow") {
        var part = "Kusza"
        var type = "Dwuręczny"
    }
    if (props.part == "arrows") {
        var part = "Strzały"
        var type = "Amunicja"
    }
    if (props.part == "one_hand_sword") {
        var part = "Miecz (1h)"
        var type = "Jednoręczny"
    }
    if (props.part == "two_hand_sword") {
        var part = "Miecz (2h)"
        var type = "Dwuręczny"
    }



    var item_name = document.createElement("DIV");
    item_name.setAttribute("class", "item_name")
    item_name.innerText = part + " " + props.name + " " + prof;

    var typee = document.createElement("DIV");
    var type_name = document.createElement("SPAN");
    typee.setAttribute("class", "type_name")
    type_name.setAttribute("class", "type")
    typee.innerText = "Typ: "
    type_name.innerText = type
    typee.append(type_name)

    var proffesion = document.createElement("DIV");
    var proffesion_name = document.createElement("SPAN");
    proffesion.setAttribute("class", "stat_name")
    proffesion_name.setAttribute("class", "stat")
    proffesion.innerText = "Profesja: "
    proffesion_name.innerText = prof_n
    proffesion.append(proffesion_name)

    var att = document.createElement("DIV");
    var att_stat = document.createElement("SPAN");
    att.setAttribute("class", "stat_name")
    att_stat.setAttribute("id", "stat")
    att_stat.setAttribute("class", "attack3")
    att.innerText = "Atak: "
    att_stat.innerText = (att_calc(props.rarity, props.prof, props.lvl, props.ratio, props.origin, props.part)*0.6).toFixed(0)
    att.append(att_stat)

    var int = document.createElement("DIV");
    var int_stat = document.createElement("SPAN");
    int.setAttribute("class", "stat_name")
    int_stat.setAttribute("id", "stat")
    int_stat.setAttribute("class", "intelligence3")
    int.innerText = "Inteligencja: "
    int_stat.innerText = (int_calc(props.rarity, props.prof, props.lvl, props.ratio, props.origin, props.part)*0.6).toFixed(0)
    int.append(int_stat)

    var def = document.createElement("DIV");
    var def_stat = document.createElement("SPAN");
    def.setAttribute("class", "stat_name")
    def_stat.setAttribute("id", "stat")
    def_stat.setAttribute("class", "deffence3")
    def.innerText = "Obrona: "
    def_stat.innerText = (def_calc(props.rarity, props.prof, props.lvl, props.ratio, props.origin, props.part)*0.6).toFixed(0)
    def.append(def_stat)

    var as = document.createElement("DIV");
    var as_stat = document.createElement("SPAN");
    as.setAttribute("class", "stat_name")
    as_stat.setAttribute("id", "stat")
    as_stat.setAttribute("class", "attack_speed3")
    as.innerText = "Szybkosc Ataku: "
    as_stat.innerText = as_calc(props.rarity, props.prof, props.stat, props.origin, props.part) + "%"
    as.append(as_stat)

    var ct = document.createElement("DIV");
    var ct_stat = document.createElement("SPAN");
    ct.setAttribute("class", "stat_name")
    ct_stat.setAttribute("id", "stat")
    ct_stat.setAttribute("class", "crit3")
    ct.innerText = "Cios Krytyczny: "
    ct_stat.innerText = ct_calc(props.rarity, props.prof, props.stat, props.origin, props.part) + "%"
    ct.append(ct_stat)

    var ls = document.createElement("DIV");
    var ls_stat = document.createElement("SPAN");
    ls.setAttribute("class", "stat_name")
    ls_stat.setAttribute("id", "stat")
    ls_stat.setAttribute("class", "life_steal3")
    ls.innerText = "Kradzież życia: "
    ls_stat.innerText = ls_calc(props.rarity, props.prof, props.stat, props.origin, props.part) + "%"
    ls.append(ls_stat)

    var fr = document.createElement("DIV");
    var fr_stat = document.createElement("SPAN");
    fr.setAttribute("class", "stat_name")
    fr_stat.setAttribute("id", "stat")
    fr_stat.setAttribute("class", "fire3")
    fr.innerText = "Odporność ogień: "
    fr_stat.innerText = fr_calc(props.rarity, props.prof, props.res, props.origin, props.part) + "%"
    fr.append(fr_stat)

    var wr = document.createElement("DIV");
    var wr_stat = document.createElement("SPAN");
    wr.setAttribute("class", "stat_name")
    wr_stat.setAttribute("id", "stat")
    wr_stat.setAttribute("class", "water3")
    wr.innerText = "Odporność woda: "
    wr_stat.innerText = wr_calc(props.rarity, props.prof, props.res, props.origin, props.part) + "%"
    wr.append(wr_stat)

    var wir = document.createElement("DIV");
    var wir_stat = document.createElement("SPAN");
    wir.setAttribute("class", "stat_name")
    wir_stat.setAttribute("id", "stat")
    wir_stat.setAttribute("class", "wind3")
    wir.innerText = "Odporność wiatr: "
    wir_stat.innerText = wir_calc(props.rarity, props.prof, props.res, props.origin, props.part) + "%"
    wir.append(wir_stat)

    var er = document.createElement("DIV");
    var er_stat = document.createElement("SPAN");
    er.setAttribute("class", "stat_name")
    er_stat.setAttribute("id", "stat")
    er_stat.setAttribute("class", "earth3")
    er.innerText = "Odporność ziemia: "
    er_stat.innerText = er_calc(props.rarity, props.prof, props.res, props.origin, props.part) + "%"
    er.append(er_stat)

    var hp = document.createElement("DIV");
    var hp_stat = document.createElement("SPAN");
    hp.setAttribute("class", "stat_name")
    hp_stat.setAttribute("id", "stat")
    hp_stat.setAttribute("class", "hp3")
    hp.innerText = "Dodatkowe życie: "
    hp_stat.innerText = (hp_calc(props.rarity, props.prof, props.lvl, props.origin, props.part) / 2).toFixed(0)
    hp.append(hp_stat)

    var lvl = document.createElement("DIV");
    lvl.setAttribute("class", "level")
    lvl.innerText = "Poziom " + props.lvl;


    var container = document.getElementById("admin_panel");


    var s = document.getElementById("stat_alert");
    s.innerHTML = "";
    var r = document.getElementById("res_alert");
    r.innerHTML = "";
    var i_a = document.getElementById("input_alert");
    i_a.innerHTML = "";

    if ((props.name == "") || (props.rarity == "") || (props.origin == "") || (props.prof == "") || (props.lvl == "") || (props.part == "")) {
        var alert_input = document.createElement("P");
        alert_input.setAttribute("class", "alert")
        alert_input.innerText += "Some inputs are wrong or are missing !";
        i_a.appendChild(alert_input);
    } else if ((props.stat == props.stat2) || (props.stat2 == props.stat3) || (props.stat == props.stat3)) {

        var alert_stat = document.createElement("P");
        alert_stat.setAttribute("class", "alert")
        alert_stat.innerText = "Wrong stats !";
        s.appendChild(alert_stat);
    } else if ((props.res == props.res2) || (props.res == props.res3) || (props.res == props.res4) || (props.res2 == props.res3) || (props.res2 == props.res4) || (props.res3 == props.res4)) {

        var alert_res = document.createElement("P");
        alert_res.setAttribute("class", "alert")
        alert_res.innerText = "Wrong reses !";
        r.appendChild(alert_res);
    } else {


        rarity_main.appendChild(item_name);

        rarity_main.appendChild(rarity_name);

        if (type != null) {
            rarity_main.appendChild(typee)
        }

        rarity_main.appendChild(proffesion)

        if ((props.prof == "hunter" || props.prof == "warrior") && (type != null) || (props.prof == "hunter" || props.prof == "warrior") && (t == "Bizu")) {
            rarity_main.appendChild(att)
        }
        if ((props.prof == "mage") && (type != null) || (props.prof == "mage") && (t == "Bizu")) {
            rarity_main.appendChild(int)
        }
        if ((type == null) || (t == "Bizu")) {
            rarity_main.appendChild(def)
        }



        if (props.rarity == "normal") {
            var stats = []
            stats.push(props.stat)

            if (stats.includes("attack_speed")) {
                rarity_main.appendChild(as)
            }
            if (stats.includes("crit")) {
                rarity_main.appendChild(ct)
            }
            if (stats.includes("life_steal")) {
                rarity_main.appendChild(ls)
            }

        }
        if (props.rarity == "rare") {
            var stats = []
            stats.push(props.stat)

            if (stats.includes("attack_speed")) {
                rarity_main.appendChild(as)
            }
            if (stats.includes("crit")) {
                rarity_main.appendChild(ct)
            }
            if (stats.includes("life_steal")) {
                rarity_main.appendChild(ls)
            }

            var reses = []
            reses.push(props.res)

            if (reses.includes("fire")) {
                rarity_main.appendChild(fr)
            }
            if (reses.includes("water")) {
                rarity_main.appendChild(wr)
            }
            if (reses.includes("wind")) {
                rarity_main.appendChild(wir)
            }
            if (reses.includes("earth")) {
                rarity_main.appendChild(er)
            }

        }
        if (props.rarity == "epic") {
            var stats = []
            stats.push(props.stat)
            stats.push(props.stat2)

            if (stats.includes("attack_speed")) {
                rarity_main.appendChild(as)
            }
            if (stats.includes("crit")) {
                rarity_main.appendChild(ct)
            }
            if (stats.includes("life_steal")) {
                rarity_main.appendChild(ls)
            }

            var reses = []
            reses.push(props.res)
            reses.push(props.res2)

            if (reses.includes("fire")) {
                rarity_main.appendChild(fr)
            }
            if (reses.includes("water")) {
                rarity_main.appendChild(wr)
            }
            if (reses.includes("wind")) {
                rarity_main.appendChild(wir)
            }
            if (reses.includes("earth")) {
                rarity_main.appendChild(er)
            }

        }
        if (props.rarity == "legendary") {
            rarity_main.appendChild(as)
            rarity_main.appendChild(ct)
            rarity_main.appendChild(ls)

            var reses = []
            reses.push(props.res)
            reses.push(props.res2)
            reses.push(props.res3)

            if (reses.includes("fire")) {
                rarity_main.appendChild(fr)
            }
            if (reses.includes("water")) {
                rarity_main.appendChild(wr)
            }
            if (reses.includes("wind")) {
                rarity_main.appendChild(wir)
            }
            if (reses.includes("earth")) {
                rarity_main.appendChild(er)
            }


        }
        if (props.rarity == "mithic") {
            rarity_main.appendChild(as)
            rarity_main.appendChild(ct)
            rarity_main.appendChild(ls)
            rarity_main.appendChild(fr)
            rarity_main.appendChild(wr)
            rarity_main.appendChild(wir)
            rarity_main.appendChild(er)
        }

        // rarity_main.appendChild(as)
        // rarity_main.appendChild(ct)
        // rarity_main.appendChild(ls)
        // rarity_main.appendChild(fr)
        // rarity_main.appendChild(wr)
        // rarity_main.appendChild(wir)
        // rarity_main.appendChild(er)

        rarity_main.appendChild(hp)
        rarity_main.appendChild(lvl)

        container.appendChild(rarity_main);

    }

    return (null
        // <div id="container">
        //     <div class="mitic">

        //         <div class="item_name">Rękawice Dewastatora Maga</div>
        //         <small><i class="description">** Kocham Gitka **</i></small><br></br>
        //         <div class="rarity-mitic">(Mityczny)</div>

        //         <div class="type_name">Typ: <span class="type">Jednoreczny</span></div>
        //         <div class="stat_name">Profesja: <span class="stat">Mag</span></div>
        //         <div class="stat_name">Obrona: <span class="stat">97</span></div>
        //         <div class="stat_name">Cios krytyczny: <span class="stat">4%</span></div>
        //         <div class="stat_name">Kradzież zycia: <span class="stat">4%</span></div>
        //         <div class="stat_name">Odporność wiatr: <span class="stat">11%</span></div>
        //         <div class="stat_name">Odporność ogień: <span class="stat">11%</span></div>
        //         <div class="stat_name">Odporność ziemia: <span class="stat">9%</span></div>
        //         <div class="stat_name">Dodatkowe życia: <span class="stat">550</span></div>
        //         <div class="upgrade"><i>Obrona IV</i></div>
        //         <div class="upgrade"><i>Cios Krytyczny IV</i></div>
        //         <div class="upgrade"><i>Dodatkowe życie IV</i></div>
        //         <div class="level">Poziom 40</div>

        //     </div>
        // </div>
    );

}