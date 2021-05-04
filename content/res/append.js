rewarded = localStorage.getItem("rewarded");

for (let h = 1; h <= arcadeTotal; h++) {
$(".arcade").append(`
<div class="game-ct arcade-ct arcade${h} active" id="arcade${h}">
<img src="res/arcade/${window["ar_img_" + h]}.jpg" class="game-img">
<div class="game-txt">${window["ar_t_" + h]}</div>
</div>
<script>
$(".arcade${h}").click(function() {
orie = "${window["ar_ori_" + h]}";
localStorage.setItem("opened", "${window["ar_url_" + h]}");
});
</script>
`);
}

for (let i = 1; i <= racingTotal; i++) {
$(".racing").append(`
<div class="game-ct racing-ct racing${i} active" id="racing${i}">
<img src="res/racing/${window["r_img_" + i]}.jpg" class="game-img">
<div class="game-txt">${window["r_t_" + i]}</div>
</div>
<script>
$(".racing${i}").click(function() {
orie = "${window["r_ori_" + i]}";
localStorage.setItem("opened", "${window["r_url_" + i]}");
});
</script>
`);
}

for (let y = 1; y <= puzzleTotal; y++) {
    $(".puzzle").append(`
    <div class="game-ct puzzle-ct puzzle${y} active" id="puzzle${y}">
    <img src="res/puzzle/${window["p_img_" + y]}.jpg" class="game-img">
    <div class="game-txt">${window["p_t_" + y]}</div>
    </div>
    <script>
    $(".puzzle${y}").click(function() {
    orie = "${window["p_ori_" + y]}";
    localStorage.setItem("opened", "${window["p_url_" + y]}");
    });
    </script>
    `);
}

for (let z = 1; z <= premiumTotal; z++) {
$(".premium").append(`
<div class="game-ct premium-ct premium${z} active" id="premium${z}">
<img src="res/premium/${window["pr_img_" + z]}.jpg" class="game-img">
<div class="game-txt2">${window["pr_t_" + z]}</div>
<img src="res/lock.svg" class="lock-img">
</div>
<script>
$(".premium${z}").click(function() {
orie = "${window["pr_ori_" + z]}";
if (rewarded == 1) {
localStorage.setItem("opened", "${window["pr_url_" + z]}");
}
});
</script>
`);
}

if (rewarded == 1) {
$(".lock-img").css({opacity:'0'});
}

$(".premium-ct").click(function() {
if (rewarded == 0) {
setInterval(() => {
rewarded = localStorage.getItem("rewarded");
if (rewarded == 1) {
$(".lock-img").css({opacity:'0'});
 }
}, 2000);
setTimeout(() => {
parent.location="https://reward";
}, 400);
}
});