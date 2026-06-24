const characters = [

{
    name: "ベル(cast/staff)",
    image: "images/belle.png",
    description: "呪いが刻まれたビスクドール。<br>主人亡き後、使い魔達の力を借りて屋敷や庭園の管理をしている。<br>「薔薇も、宝石も、人形も…愛でられてこそ美しくいられるのです。」"
},

{
    name: "レファリエル(cast/staff)",
    image: "images/refa.png",
    description: "悪魔と恋し、天界を追放された元天使。<br>愛する人がかつて愛した薔薇園にて再会の日を待つ。<br>「この薔薇園は、あなたと再び巡り会うための祈りの場所。…そうだろう？」"
},

{
    name: "ヴァン(cast/staff)",
    image: "images/van.png",
    description: "管理人の使い魔として働いている吸血鬼。<br>雑務や監視、報告などを担っている。<br>「君たちの知っていることを'全て'教えてくれ。」"
},

{
    name: "ロディ(staff)",
    image: "images/rodi.png",
    description: "使い魔として召喚されたカーバンクル。屋敷の番人。<br>「くれぐれも失礼のないように…。<br>わたくしも、直接手を下すようなことはしたくありませんので。」"
},

{
    name: "ヴィオラ(cast)",
    image: "images/vio.png",
    description: "芸術家の娘を模して造られた少女型機械人形。 <br>'美'と'愛’に焦がれ、今もなお創造主の残響を追う。<br>「美しいものに触れていると、お父様の娘でいられる気がするの…」"
},

{
    name: "モルタル(cast)",
    image: "images/mol.png",
    description: "元外科医の亡霊。倒錯的な美へ陶酔している。猫が怖い。<br>「死は救済？······ハ、ハ！厭世観に囚われてはいけない。<br>絶美への過程を敬愛するのだ！ 」"
},

{
    name: "クローナ(cast)",
    image: "images/krona.png",
    description: "真っ白な羽を持つ巨大蛾の妖精。<br>皆から愛される美しい蝶になりたいと夢見ている。<br>「ここにいる間だけは美しくいられるの。<br>いつかは永遠の美と共に空に飛び立つわ。」"
},

{
    name: "リディア(cast)",
    image: "images/ly.png",
    description: "『欲』を力の糧にしている悪魔。<br>自分の思う『今1番可憐な姿』をとっており美しいものに目がない。大変強欲。<br>「ここには美しいものが沢山あるが、ワシが1番美しいじゃろう？」"
},

{
    name: "アル(staff)",
    image: "images/al.png",
    description: "黒蛇の微アルビノ個体の使い魔。<br>料理や屋敷の清掃、手入れをしている。<br>「貴方の時間が、大切で忘れられない思い出となりますように♪」"
},

{
    name: "イド(staff)",
    image: "images/ido.png",
    description: "黒猫の使い魔。<br>野良の妖魔としてしばらく放浪していたが屋敷の雰囲気に魅せられ使い魔に。<br>「皆様を素敵なお時間へエスコートさせていただきます。」"
},

{
    name: "レオ(staff)",
    image: "images/reo.png",
    description: "雪豹の使い魔。主に薔薇のお手入れをしている。<br>「この静けさ、まるで雪が降る前の森のよう……落ち着きますね。」"
},

{
    name: "ニア(cast)",
    image: "images/nia.png",
    description: "化け猫。元々は屋敷の薔薇園に住み着いていた野良猫。<br>「このミルクを...僕に...？人間～キミってば、いいやつだな～！」"
},

{
    name: "ラーべ(staff)",
    image: "images/rabe.png",
    description: "今は亡き屋敷の主人の元使い魔。<br>自分の事をあまり話さず、屋敷にもほとんどいないので謎の多い存在<br>「久しぶりに帰ってみれば...かなり賑やかになっているじゃぁないか。<br>これは退屈しないで済みそうだね」"
},

{
    name: "エンプティ(cast)",
    image: "images/emp.png",
    description: "記憶を日に日に失ってしまう体質。刺激的で新鮮な記憶を作る為にこの地へきた。<br>「目に映るものだけを信じていては、いずれ足元を救われる。……忘れぬ事だ。」"
},

{
    name: "ノエル(cast)",
    image: "images/noe.png",
    description: "滅びた海底王国のマーメイドプリンセス。<br>呪われた宝石をその身に宿し、今は陸で“終わり”を待っている。<br>「海は、もう私を拒むの。それなのに……胸の中では未だ波が鳴っているのよ。」 "
},

{
    name: "イネス(cast)",
    image: "images/ines.png",
    description: "夜の間のみ人のを保てる影。<br>昔、語りかけてくれた人間との会話を思い出すために薔薇園に顔を出している。<br>「光には触れられないけれど、貴方の言葉には触れられるから。」"
},

{
    name: "ルクス(cast)",
    image: "images/lux.png",
    description: "魔法が好きなエルダーリッチ。薔薇園と屋敷を気に入り居場所にしている。<br>「人間と話すのは嫌いじゃない。魔法の話題ならなおさら。」"
},

{
    name: "リオラ(cast)",
    image: "images/rio.png",
    description: "青薔薇の精霊。かつて精霊狩りから逃れた生き残り。<br>失われた仲間と記憶を探している。<br>「仲間を探している......それだけは忘れていない。」"
},

{
    name: "メルシェラ(cast)",
    image: "images/mel.png",
    description: "ヴィーヴィル。美しいものを愛でるため食すために生きる者。<br>森の廃城にて信者と暮らしている。<br>「あらあらあら！あなたの瞳とても美しいわねぇ。…失礼、お腹が鳴ってしまいましたわ。」"
},

{
    name: "アインズ(cast)",
    image: "images/ein.png",
    description: "その昔自らに呪いを植え付けた薔薇の魔女を探し求めている。<br>「彼女は僕を殺そうとしたのか、それとも救おうとしたのか＿＿＿」"
},

{
    name: "ノノ(cast)",
    image: "images/nuo.png",
    description: "禁術によって蘇った僵尸。<br>人間と仲良くしたいので交流ができるこの薔薇園に居座ってる。<br>「襲わない。怖くないぞ。诺诺はおまえと仲良くしたいだけ。」"
},

{
    name: "ベロスレア(cast)",
    image: "images/beres.png",
    description: "地獄の番犬として逃亡者を捕獲・処罰する役割を務めている。<br>たまには善良な人間と関わりたいと思い屋敷にやってきた。<br>「罪人ばっか喰べて飽きちゃったから…味変に君のこと食べていーい？」"
},

{
    name: "ノマド（cast）",
    image: "images/nomad.png",
    description: "卑屈で非力で臆病な悪魔。<br>ある理由から天使に強い憧れを抱いており、屋敷に招かれる人間へ自分なりの善行を重ねている。<br>「わ、笑わないで聞いてくれますか…？僕…天使になりたいんです…」"
},

{
    name: "ファウロス（cast）",
    image: "images/faurus.png",
    description: "ヤギ人狼のシスター。故郷に似た香りに誘われこの屋敷にやってきた。<br>小さくて真っ白な悪魔に懐かれている。<br>「私に神託を乞うのか？いいだろう、何が聞きたい？」"
},

{
    name: "ミゼリア(cast)",
    image: "images/placeholder.jpg",
    description: "？？？"
},

{
    name: "ヴェイル(cast)",
    image: "images/placeholder.jpg",
    description: "？？？"
},

{
    name: "？？？",
    image: "images/placeholder.jpg",
    description: "？？？"
},

{
    name: "？？？",
    image: "images/placeholder.jpg",
    description: "？？？"
},

{
    name: "？？？",
    image: "images/placeholder.jpg",
    description: "？？？"
},

{
    name: "？？？",
    image: "images/placeholder.jpg",
    description: "？？？"
}

];

const castGrid = document.getElementById("cast-grid");

characters.forEach(character => {

    const card = document.createElement("div");

    card.className = "cast-card";

    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <h3>${character.name}</h3>
    `;

    card.onclick = () => {
        openCharacter(
            character.name,
            character.description,
            character.image
        );
    };

    castGrid.appendChild(card);

});

function openCharacter(name, description, image){

    document.getElementById("modal-name").textContent = name;

    document.getElementById("modal-description").innerHTML = description;

    document.getElementById("modal-image").src = image;

    document.getElementById("character-modal").style.display = "flex";
}

function closeCharacter(){

    document.getElementById("character-modal").style.display = "none";
}