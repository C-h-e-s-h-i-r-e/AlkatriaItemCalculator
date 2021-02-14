import { Grid, Paper } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import React from "react";
import ReactDOM from 'react-dom';

import "./App.css";
import RaritySelect from "./component/selects/rarity_select";
import SelectFunctionalComponent2 from "./component/selects/origin_select";
import SelectFunctionalComponent from "./component/selects/class_select";
import LvlSelect from "./component/selects/lvl_input";
import NameSelect from "./component/selects/name_input";
import MageCb from "./component/checkboxes/mage_cb";
import HunterCb from "./component/checkboxes/hunter_cb";
import WarriorCb from "./component/checkboxes/warrior_cb";
import FocusedStat from "./component/checkboxes/focused_stat";
import FocusedStat2 from "./component/checkboxes/focused_stat2";
import FocusedStat3 from "./component/checkboxes/focused_stat3";
import FocusedRes from "./component/checkboxes/focused_res";
import FocusedRes2 from "./component/checkboxes/focused_res2";
import FocusedRes3 from "./component/checkboxes/focused_res3";
import FocusedRes4 from "./component/checkboxes/focused_res4";
import Ratio from "./component/checkboxes/ratio_basic";

import { classOptions } from "./data/class_data";
import { originOptions } from "./data/origin_data";

import Tips from "./component/items/item_tips";
import Tips2 from "./component/items/item_tips2";
import AdminPanel from "./component/items/item_tips_admin_panel";

function App() {
  return (
    <div className="App">
      <Box m={10}>
        <Paper elevation={6}>
          <Box p={3}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs>
                <h2 class="second"><span>Select Rarity ...</span></h2>
                <RaritySelect />
              </Grid>

              <Grid item xs>
              <h2 class="second"><span>Select Origin ...</span></h2>
                <SelectFunctionalComponent2 options={originOptions} />
              </Grid>

              <Grid item xs>
              <h2 class="second"><span>Select Class ...</span></h2>
                <SelectFunctionalComponent options={classOptions} />
              </Grid>

              <Grid item xs>
              <h2 class="second"><span>Select Level ...</span></h2>
                <LvlSelect />
              </Grid>

              <Grid item xs>
              <h2 class="second"><span>Choose Name ...</span></h2>
                <NameSelect />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box m={3}>
        <Paper elevation={6}>
          <Box p={3}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs>
                <div id="class_cb">
                  
                </div>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <div id="input_alert"></div>

      <Box m={3}>
        <Paper elevation={6}>
          <Box p={3}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs>
                <div id="basic_ratio">
                  <Ratio />
                </div>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box m={3}>
        <Paper elevation={6}>
          <Box p={3}>
            <Grid container justify="center" spacing={5}>

              <Grid item xs>
                <div id="stat_rb">
                  <FocusedStat />
                  <FocusedStat2 />
                  <FocusedStat3 />
                  <div id="stat_alert"></div>
                </div>
              </Grid>

              <Grid item xs>
                <div id="res_rb">
                  <FocusedRes />
                  <FocusedRes2 />
                  <FocusedRes3 />
                  <FocusedRes4 />
                  <div id="res_alert"></div>
                </div>
              </Grid>

            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box m={3}>
        <Paper elevation={6}>
          <Box p={3}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs>
                <button onClick={show}>Generate</button>

                <div id="result">
                  <div id="name"></div>
                  <div id="rarity"></div>
                  <div id="origin"></div>
                  <div id="class"></div>
                  <div id="lvl"></div>
                  <div id="parts"></div>
                  <div id="ratio">10_10</div>
                  <div id="stat1"></div>
                  <div id="stat2"></div>
                  <div id="stat3"></div>
                  <div id="res"></div>
                  <div id="res2"></div>
                  <div id="res3"></div>
                  <div id="res4"></div>
                </div>

                <div id="tips">
                <h1 class="sixth">Admin Panel</h1>
                  <div id="admin_panel"></div>
                <h1 class="sixth">Full</h1>
                  <div id="full"></div>
                  <h1 class="sixth">Not-Upgraded</h1>
                  <div id="original"></div>
                </div>

              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box p={3}>
      <button onClick={set}>Sum Of Selected Parts Stats</button>
      <div id="sets_stat">
      
      <div id="all_stats"></div>
      
      <div id="all_stats_not_upgraded"></div>
      </div>
      </Box>

    </div>


  );
}

function show() {
  var admin_panel = document.getElementById("admin_panel");
  admin_panel.innerHTML = "";
  admin_panel.style.display = "flex";

  var tips = document.getElementById("full");
  tips.innerHTML = "";
  tips.style.display = "flex";

  var tips2 = document.getElementById("original");
  tips2.innerHTML = "";
  tips2.style.display = "flex";

  var result = document.getElementById("result");
  var parts = document.getElementById("parts");
  parts.style.display = "inline";
  //result.style.display = "inline";

  var name = document.getElementById("name").innerText;
  var rarity = document.getElementById("rarity").innerText;
  var origin = document.getElementById("origin").innerText;
  var prof = document.getElementById("class").innerText;
  var lvl = document.getElementById("lvl").innerText;
  var partss = document.getElementById("parts").innerText;
  var ratio = document.getElementById("ratio").innerText;
  var stat = document.getElementById("stat1").innerText;
  var stat2 = document.getElementById("stat2").innerText;
  var stat3 = document.getElementById("stat3").innerText;
  var res = document.getElementById("res").innerText;
  var res2 = document.getElementById("res2").innerText;
  var res3 = document.getElementById("res3").innerText;
  var res4 = document.getElementById("res4").innerText;

  var array = partss.split(',');

  var a = [];
  var b = [];
  var c = [];

  for (var i = 0; i < array.length; i++) {
    var element = <Tips name={name} rarity={rarity} origin={origin} prof={prof} lvl={lvl} part={array[i]} ratio={ratio} stat={stat} stat2={stat2} stat3={stat3} res={res} res2={res2} res3={res3} res4={res4} />
    var element2 = <Tips2 name={name} rarity={rarity} origin={origin} prof={prof} lvl={lvl} part={array[i]} ratio={ratio} stat={stat} stat2={stat2} stat3={stat3} res={res} res2={res2} res3={res3} res4={res4} />
    var element3 = <AdminPanel name={name} rarity={rarity} origin={origin} prof={prof} lvl={lvl} part={array[i]} ratio={ratio} stat={stat} stat2={stat2} stat3={stat3} res={res} res2={res2} res3={res3} res4={res4} />
    
    a.push(element);
    b.push(element2);
    c.push(element3);
    //console.log(element)
    //tips.append(element)

  }
  ReactDOM.render(a, tips);
  ReactDOM.render(b, tips2);
  ReactDOM.render(c, admin_panel);

}

function set() {
  var all_att_arr = document.getElementsByClassName("attack")
  var all_int_arr = document.getElementsByClassName("intelligence")
  var all_def_arr = document.getElementsByClassName("deffence")
  var all_as_arr = document.getElementsByClassName("attack_speed")
  var all_ct_arr = document.getElementsByClassName("crit")
  var all_ls_arr = document.getElementsByClassName("life_steal")
  var all_fr_arr = document.getElementsByClassName("fire")
  var all_wr_arr = document.getElementsByClassName("water")
  var all_wir_arr = document.getElementsByClassName("wind")
  var all_er_arr = document.getElementsByClassName("earth")
  var all_hp_arr = document.getElementsByClassName("hp")

  var all_att = 0
  var all_int = 0
  var all_def = 0
  var all_as = 0
  var all_ct = 0
  var all_ls = 0
  var all_fr = 0
  var all_wr = 0
  var all_wir = 0
  var all_er = 0
  var all_hp = 0

  if (all_att_arr.length != 0) {
    for (var i = 0; i < all_att_arr.length; i++) {
      all_att = parseInt(all_att) + parseInt(all_att_arr[i].innerText);
    }
  }

  if (all_int_arr.length != 0) {
    for (var i = 0; i < all_int_arr.length; i++) {
      all_int = parseInt(all_int) + parseInt(all_int_arr[i].innerText);
    }
  }

  if (all_def_arr.length != 0) {
    for (var i = 0; i < all_def_arr.length; i++) {
      all_def = parseInt(all_def) + parseInt(all_def_arr[i].innerText);
    }
  }

  if (all_as_arr.length != 0) {
    for (var i = 0; i < all_as_arr.length; i++) {
      all_as = parseInt(all_as) + parseInt(all_as_arr[i].innerText);
    }
  }

  if (all_ct_arr.length != 0) {
    for (var i = 0; i < all_ct_arr.length; i++) {
      all_ct = parseInt(all_ct) + parseInt(all_ct_arr[i].innerText);
    }
  }

  if (all_ls_arr.length != 0) {
    for (var i = 0; i < all_ls_arr.length; i++) {
      all_ls = parseInt(all_ls) + parseInt(all_ls_arr[i].innerText);
    }
  }

  if (all_fr_arr.length != 0) {
    for (var i = 0; i < all_fr_arr.length; i++) {
      all_fr = parseInt(all_fr) + parseInt(all_fr_arr[i].innerText);
    }
  }

  if (all_wr_arr.length != 0) {
    for (var i = 0; i < all_wr_arr.length; i++) {
      all_wr = parseInt(all_wr) + parseInt(all_wr_arr[i].innerText);
    }
  }

  if (all_wir_arr.length != 0) {
    for (var i = 0; i < all_wir_arr.length; i++) {
      all_wir = parseInt(all_wir) + parseInt(all_wir_arr[i].innerText);
    }
  }

  if (all_er_arr.length != 0) {
    for (var i = 0; i < all_er_arr.length; i++) {
      all_er = parseInt(all_er) + parseInt(all_er_arr[i].innerText);
    }
  }

  if (all_hp_arr.length != 0) {
    for (var i = 0; i < all_hp_arr.length; i++) {
      all_hp = parseInt(all_hp) + parseInt(all_hp_arr[i].innerText);
    }
  }


var all_stats = document.getElementById("all_stats")
all_stats.innerHTML = ""

var header = document.createElement("H1")
header.setAttribute("class","sixth")
header.innerText = "Full"
all_stats.append(header)

var att_p = document.createElement("P")
att_p.innerText = "Set Attack : " + all_att
all_stats.append(att_p)

var int_p = document.createElement("P")
int_p.innerText = "Set Intelligence : " + all_int
all_stats.append(int_p)

var def_p = document.createElement("P")
def_p.innerText = "Set Defffence : " + all_def
all_stats.append(def_p)

var as_p = document.createElement("P")
as_p.innerText = "Set Attack Speed : " + all_as
all_stats.append(as_p)

var ct_p = document.createElement("P")
ct_p.innerText = "Set Critical Hit : " + all_ct
all_stats.append(ct_p)

var ls_p = document.createElement("P")
ls_p.innerText = "Set Life Steal : " + all_ls
all_stats.append(ls_p)

var fr_p = document.createElement("P")
fr_p.innerText = "Set Fire Resistance : " + all_fr
all_stats.append(fr_p)

var wr_p = document.createElement("P")
wr_p.innerText = "Set Water Resistance : " + all_wr
all_stats.append(wr_p)

var wir_p = document.createElement("P")
wir_p.innerText = "Set Wind Resistance : " + all_wir
all_stats.append(wir_p)

var er_p = document.createElement("P")
er_p.innerText = "Set Earth Resistance : " + all_er
all_stats.append(er_p)

var hp_p = document.createElement("P")
hp_p.innerText = "Set Hp : " + all_hp
all_stats.append(hp_p)

///
var all_att_arr = document.getElementsByClassName("attack2")
var all_int_arr = document.getElementsByClassName("intelligence2")
var all_def_arr = document.getElementsByClassName("deffence2")
var all_as_arr = document.getElementsByClassName("attack_speed2")
var all_ct_arr = document.getElementsByClassName("crit2")
var all_ls_arr = document.getElementsByClassName("life_steal2")
var all_fr_arr = document.getElementsByClassName("fire2")
var all_wr_arr = document.getElementsByClassName("water2")
var all_wir_arr = document.getElementsByClassName("wind2")
var all_er_arr = document.getElementsByClassName("earth2")
var all_hp_arr = document.getElementsByClassName("hp2")

var all_att = 0
var all_int = 0
var all_def = 0
var all_as = 0
var all_ct = 0
var all_ls = 0
var all_fr = 0
var all_wr = 0
var all_wir = 0
var all_er = 0
var all_hp = 0

if (all_att_arr.length != 0) {
  for (var i = 0; i < all_att_arr.length; i++) {
    all_att = parseInt(all_att) + parseInt(all_att_arr[i].innerText);
  }
}

if (all_int_arr.length != 0) {
  for (var i = 0; i < all_int_arr.length; i++) {
    all_int = parseInt(all_int) + parseInt(all_int_arr[i].innerText);
  }
}

if (all_def_arr.length != 0) {
  for (var i = 0; i < all_def_arr.length; i++) {
    all_def = parseInt(all_def) + parseInt(all_def_arr[i].innerText);
  }
}

if (all_as_arr.length != 0) {
  for (var i = 0; i < all_as_arr.length; i++) {
    all_as = parseInt(all_as) + parseInt(all_as_arr[i].innerText);
  }
}

if (all_ct_arr.length != 0) {
  for (var i = 0; i < all_ct_arr.length; i++) {
    all_ct = parseInt(all_ct) + parseInt(all_ct_arr[i].innerText);
  }
}

if (all_ls_arr.length != 0) {
  for (var i = 0; i < all_ls_arr.length; i++) {
    all_ls = parseInt(all_ls) + parseInt(all_ls_arr[i].innerText);
  }
}

if (all_fr_arr.length != 0) {
  for (var i = 0; i < all_fr_arr.length; i++) {
    all_fr = parseInt(all_fr) + parseInt(all_fr_arr[i].innerText);
  }
}

if (all_wr_arr.length != 0) {
  for (var i = 0; i < all_wr_arr.length; i++) {
    all_wr = parseInt(all_wr) + parseInt(all_wr_arr[i].innerText);
  }
}

if (all_wir_arr.length != 0) {
  for (var i = 0; i < all_wir_arr.length; i++) {
    all_wir = parseInt(all_wir) + parseInt(all_wir_arr[i].innerText);
  }
}

if (all_er_arr.length != 0) {
  for (var i = 0; i < all_er_arr.length; i++) {
    all_er = parseInt(all_er) + parseInt(all_er_arr[i].innerText);
  }
}

if (all_hp_arr.length != 0) {
  for (var i = 0; i < all_hp_arr.length; i++) {
    all_hp = parseInt(all_hp) + parseInt(all_hp_arr[i].innerText);
  }
}


var all_stats = document.getElementById("all_stats_not_upgraded")
all_stats.innerHTML = ""

var header = document.createElement("H1")
header.setAttribute("class","sixth")
header.innerText = "Not-Upgraded"
all_stats.append(header)

var att_p = document.createElement("P")
att_p.innerText = "Set Attack : " + all_att
all_stats.append(att_p)

var int_p = document.createElement("P")
int_p.innerText = "Set Intelligence : " + all_int
all_stats.append(int_p)

var def_p = document.createElement("P")
def_p.innerText = "Set Defffence : " + all_def
all_stats.append(def_p)

var as_p = document.createElement("P")
as_p.innerText = "Set Attack Speed : " + all_as
all_stats.append(as_p)

var ct_p = document.createElement("P")
ct_p.innerText = "Set Critical Hit : " + all_ct
all_stats.append(ct_p)

var ls_p = document.createElement("P")
ls_p.innerText = "Set Life Steal : " + all_ls
all_stats.append(ls_p)

var fr_p = document.createElement("P")
fr_p.innerText = "Set Fire Resistance : " + all_fr
all_stats.append(fr_p)

var wr_p = document.createElement("P")
wr_p.innerText = "Set Water Resistance : " + all_wr
all_stats.append(wr_p)

var wir_p = document.createElement("P")
wir_p.innerText = "Set Wind Resistance : " + all_wir
all_stats.append(wir_p)

var er_p = document.createElement("P")
er_p.innerText = "Set Earth Resistance : " + all_er
all_stats.append(er_p)

var hp_p = document.createElement("P")
hp_p.innerText = "Set Hp : " + all_hp
all_stats.append(hp_p)
}

export default App;
