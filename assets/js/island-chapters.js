// Each scene owns a physical clue and two vocabulary interactions.
const islandChapters = {
  ferry: {
    number: 2, title: '月光湖的最后一班船', item: '打了两个孔的旧船票', icon: '🎟️',
    opening: '钟声刚落，湖对岸回了两声铃，一长一短。岚手里的信撒了一地。星团替他按住最后一个信封，上面贴好了邮票，收件人只写着「下一班」。岚把信翻了个面：“你想知道她是谁，就帮我把这封信送到。”',
    scenes: {
      cafe: {node:3, name:'茶馆里的旧合照', text:'露娜从柜台底下抽出一张合照。小岚攥着船票，身边的女孩戴着顶大了两圈的船长帽。背面的墨水晕开了一半。', prop:'合照背面',
        tasks:[
          {word:'promise', line:'I made my little brother a promise.', prompt:'女孩在照片上给弟弟留下了什么？', choices:['一张账单','一个诺言','一条航线'], key:1, hint:'make a promise 意思是许下诺言。', after:'露娜点点照片上的女孩：“她是岚的姐姐。她答应过，等自己当上船长，第一个来接他。”'},
          {word:'promise', line:'I will keep my _____.', prompt:'把「诺言」的英文填回姐姐的信。', kind:'en', hint:'开头是 pro，整个词有七个字母。', after:'信纸和柜台上的船员明信片，连字母 p 向左弯的小钩都一样。露娜把明信片塞回你手里：“寄信的人，已经是船长了。”'}
        ]},
      pier: {node:7, name:'旧码头的木牌', text:'星团绕到木牌背后，用爪子扒掉一片湿叶。底下的刻痕很旧，唯独最后一个词刚被人用手擦干净。', prop:'木牌背面',
        tasks:[
          {word:'still', line:'I still have my ticket.', prompt:'这里的 still 是什么意思？用中文写。', kind:'zh', accept:['仍然','依然','还','仍','还是','仍旧','依旧'], hint:'岚小时候有这张票，今天也有。', after:'岚从衣袋里掏出半张回程票。一个圆孔贴着去程日期，回程那一格空着。'},
          {word:'visible', line:'The old lamp is no longer visible from the lake.', prompt:'船上的人遇到了什么问题？', choices:['从湖上看不见旧灯了','船灯太亮了','船票上的字看不清'], key:0, hint:'visible 是「看得见的」，no longer 是「不再」。', after:'你摸到灯座上的四个螺丝孔。旧灯早就搬走了。雾中的船又摇了一遍铃，等岸上给出回音。'}
        ]},
      post: {node:1, name:'给船长回信', needs:['cafe','pier'], text:'在喷泉边，岚展开写着「下一班」的信封。里面是小时候没敢交给姐姐的回信。现在只差把靠岸地点写上去。', prop:'回程船票',
        tasks:[
          {word:'destination', line:'Destination: __________', prompt:'票上这一栏要填写什么？', choices:['票价','出发日期','目的地'], key:2, hint:'destination 指旅程最终到达的地方。', after:'岚把旧码头和新码头都圈在地图上：“你选。我知道两边的路。”'},
          {word:'remind', line:'Please _____ me to bring my ticket.', prompt:'替岚补上「提醒」的英文。', kind:'en', hint:'remind someone to do something，提醒某人做某事。', after:'星团把回程票从邮袋底下叼出来。岚接过票，等你决定从哪里接船。'}
        ]}
    },
    endings:{
      lamp:{node:7, label:'陪岚点亮旧码头', text:'岚把露营灯举上空灯座，船头慢慢贴了岸。姐姐伸出手：“船票呢？”岚摸了两次口袋才递过去。咔哒。她在空了许多年的回程格上，打下第二个孔。'},
      bell:{node:6, label:'用钟声引向新码头', text:'你敲出一长一短。船头转向钟楼下亮着灯的新码头。镇民围上去接缆绳，岚站在人群最后。姐姐越过一排伸来的手，朝他晃晃打孔钳：“最后面那位，验票。”岚这才笑着挤到前面。'}
    }
  },
  bookboat: {
    number: 3, title:'会靠岸的图书馆', item:'首航借书证', icon:'📖',
    opening:'第二天，姐姐从船舱拖出一只木箱。镇图书馆的旧印章还在，缝里却钻出一小截绿芽。箱盖下压着一张借书证，姓名栏空着，背面挤着一行铅笔字：“我赶早班船的时候，你们还没开门。”',
    scenes:{
      catalogue:{node:4, name:'箱底的借书单', text:'宁老师扶了扶眼镜。旧借书单上的人名都被海水洗淡了，最后一行还很清楚。星团把爪子按在那一行旁边。', prop:'旧馆借书单',
        tasks:[
          {word:'reserve',line:'Please reserve the book about seeds for me.',prompt:'这里的 reserve 要宁老师做什么？',choices:['把书退回去','把这本书留给读者','把种子种在保护区'],key:1,hint:'reserve 有多个词义，这里是动词，后面跟着一本书。',after:'宁老师翻开抽屉：“这本种子图鉴，我一直替写纸条的人留着。”书里还夹着一枚压平的豆荚。'},
          {word:'available',line:'The book is available now.',prompt:'在这张借书单上，available 表示书现在怎么样？用中文写。',kind:'zh',accept:['可借','可借阅','可以借','可以借阅','能借','能借到','有书可借','可用','可用的','可利用的','有空余','可以借到','可以借了','能借了'],hint:'读者现在就能把它借走。填「可借」也可以。',after:'宁老师把图鉴包好，又放进去一张空卡：“谁借到它，谁就在这里签第一个名字。”'}
        ]},
      seed:{node:2, name:'花园里的早班乘客', text:'小森在扎一捆苗，旁边的女孩把一粒干豆子推到土里，又挖出来看看。她叫小满，每天跟外婆坐早班船去湖对岸的菜地。', prop:'小满的种子袋',
        tasks:[
          {word:'protect',line:'_____ the seeds from the cold.',prompt:'种子袋受潮了。请补上「保护」的英文。',kind:'en',hint:'七个字母，以 pro 开头，结尾是 tect。',after:'你和小满把豆子换进干布袋。她在袋口写下名字。那个“满”字挤成一团的三点水，和借书证上的笔迹一样。'},
          {word:'volunteer',line:'I can volunteer to carry the box.',prompt:'小满这句话是什么意思？',choices:['她想买下木箱','她需要有人帮她搬家','她愿意主动搬书箱'],key:2,hint:'volunteer to do something 是自愿做一件事。',after:'“纸条是我写的。”小满把空白借书证翻过来，“我想知道豆苗为什么总往窗边倒。可我放学下船，你们又关门了。”'}
        ]},
      launch:{node:7, name:'给第一箱书写航单',needs:['catalogue','seed'],text:'姐姐把空苹果箱倒过来，当作借书台。宁老师把种子图鉴递给小满。她没急着翻页，先问：“那跟我坐同一班船的人呢？”', prop:'首航借书证',
        tasks:[
          {word:'deliver',line:'We can _____ books by boat.',prompt:'把「递送」的英文写进航单。',kind:'en',hint:'以 de 开头。完整拼法是 deliver。',after:'姐姐拉开座位下的小柜门。一本图鉴塞进去刚刚好，后面还留得出九本书的位置。'},
          {word:'support',line:'Thank you for your support.',prompt:'借书证背面的 support 在这里是什么意思？用中文写。',kind:'zh',accept:['支持','帮助','支援','相助','鼓励','扶持'],hint:'这里是在感谢大家出力帮忙。',after:'小满签好了第一张借书证。还剩航单上的「第一站」。姐姐把铅笔交到你手里。'}
        ]}
    },
    endings:{
      garden:{node:2,label:'第一站设在花园',text:'你把第一站写成「小森的花园」。木箱搁在苗床边的长凳上，小满照着图鉴把花盆转了半圈。那天下午，第一张借书证的背面多了一幅铅笔画：两片豆叶，正朝新的方向伸展。'},
      crossing:{node:7,label:'第一站设在早班船上',text:'你在航单上写下「明早第一班」。次日六点，小满把图鉴抱上船，给身旁的外婆念第一页。有人把菜篮往里收了收，给书箱腾出一个座位。船离岸时，第二个读者已经在排队。'}
    }
  }
};

function currentIslandStory(a = rpgData()) {
  if (!a.chapterDone) return null;
  return a.stories?.bookboat ? 'bookboat' : a.stories?.ferry ? 'ferry' : null;
}

function sceneReady(scene, chapter, progress) {
  return (scene.needs || []).every(id => progress.counts[id] === chapter.scenes[id].tasks.length);
}

function storyTasksDone(chapter, progress) {
  return Object.entries(chapter.scenes).every(([id, scene]) => progress.counts[id] === scene.tasks.length);
}

function storyProgress(id) {
  const chapter = islandChapters[id], progress = rpgData().stories[id];
  let count = 0, total = 0;
  for (const [key, scene] of Object.entries(chapter.scenes)) {
    count += progress.counts[key] || 0;
    total += scene.tasks.length;
  }
  return {count, total};
}

function storyButton(label, handler, ...args) {
  // Only internal chapter/scene identifiers and numeric indices are used as arguments.
  return rpgButton(rpgClean(label), handler + '(' + args.map(v => typeof v === 'string' ? "'" + v + "'" : v).join(',') + ')');
}

function storyNextChapterButton(a) {
  if (!a.chapterDone) return '';
  if (!a.stories?.ferry) return storyButton('开启第二章 · 月光湖的最后一班船','startIslandStory','ferry');
  if (a.stories.ferry.ending && !a.stories.bookboat) return storyButton('开启第三章 · 会靠岸的图书馆','startIslandStory','bookboat');
  return '';
}

function startIslandStory(id) {
  const a = rpgData();
  if (rpgMoving || !a.chapterDone || !Object.hasOwn(islandChapters, id)) return;
  if (id === 'bookboat' && !a.stories?.ferry?.ending) return;
  a.stories ||= {};
  if (!a.stories[id]) a.stories[id] = {counts:{}, ending:''};
  if (currentIslandStory(a) !== id) return;
  save();
  const lead = id === 'bookboat' ? (a.stories.ferry.ending === 'lamp' ? '旧码头的露营灯还亮着。' : '新码头的系缆柱上还挂着昨夜的花环。') : '';
  showIslandPanel(`<h3>${islandChapters[id].title}</h3><p>${lead}${islandChapters[id].opening}</p>${storyJournalHtml(id)}`);
}

function showIslandPanel(html) {
  rpgPanel = html;
  rpgScreen();
  rpgRenderPanel(html, true);
}

function storyJournalHtml(id) {
  const chapter = islandChapters[id], progress = rpgData().stories[id];
  if (progress.ending) {
    const end = chapter.endings[progress.ending];
    return `<div class="story-paper"><small>已完成 · 第${chapter.number}章</small><h3>${end.label}</h3><p>${end.text}</p>
      <p>${chapter.icon} 已收藏 · ${chapter.item}</p></div>${storyNextChapterButton(rpgData())}`;
  }
  const allDone = storyTasksDone(chapter, progress);
  const buttons = allDone ? Object.values(chapter.endings).map(end => storyButton(end.label, 'rpgGo', end.node)) :
    Object.entries(chapter.scenes).filter(([key, scene]) => sceneReady(scene,chapter,progress) && (progress.counts[key] || 0) < scene.tasks.length)
      .map(([,scene]) => storyButton(RPG_SPOTS[scene.node].name + ' · ' + scene.name, 'rpgGo', scene.node));
  return `<p class="rpg-status">${allDone ? '请选择结局地点，到达后亲自确认。' : '点一个地点，和星团一起过去。'}</p><div class="rpg-actions">${buttons.join('')}</div>`;
}

function storyPlaceHtml(node) {
  const id = currentIslandStory();
  if (!id) return storyNextChapterButton(rpgData());
  const chapter = islandChapters[id], progress = rpgData().stories[id];
  if (progress.ending) return storyJournalHtml(id);
  if (storyTasksDone(chapter, progress)) {
    const ending = Object.entries(chapter.endings).find(([,end]) => end.node === node);
    if (!ending) return storyJournalHtml(id);
    return `<span class="rpg-tag">第${chapter.number}章 · 最后的决定</span><h3>${ending[1].label}</h3>
      <p>${id === 'ferry' ? '船在等岸上的信号。岚攥着那半张票，看向你。' : '小满停下笔，把航单转向你。第一站由你来定。'}</p>
      ${storyButton('就这样做','finishIslandStory',id,ending[0])}${storyButton('看看另一个选择','rpgShowQuest')}`;
  }
  const match = Object.entries(chapter.scenes).find(([,scene]) => scene.node === node);
  if (!match) return storyJournalHtml(id);
  const [key, scene] = match;
  if (!sceneReady(scene,chapter,progress)) return storyJournalHtml(id);
  const n = progress.counts[key] || 0;
  if (n >= scene.tasks.length) return `<h3>✓ ${scene.name}</h3><p>${scene.tasks.at(-1).after}</p>` + storyJournalHtml(id);
  const task = scene.tasks[n];
  const params = `'${id}','${key}',${n}`;
  const controls = task.choices ? task.choices.map((v,i) => storyButton(v, 'answerIslandTask', id, key, n, i)).join('') :
    `<label for="story-answer">${task.kind === 'zh' ? '输入中文意思' : '输入英文单词'}</label>
    <input class="inputword" id="story-answer" lang="${task.kind === 'zh' ? 'zh-CN' : 'en'}" autocomplete="off" autocapitalize="none" spellcheck="false" enterkeyhint="done"
      oncompositionstart="this.dataset.composing='yes'" oncompositionend="this.dataset.composing='';this.dataset.composed=performance.now()"
      onkeydown="if(event.key==='Enter' && !event.isComposing && event.keyCode!==229 && !this.dataset.composing){event.preventDefault();if(!event.repeat && performance.now()-Number(this.dataset.composed||-1000)>80)answerIslandTask(${params})}">
    ${storyButton('确认答案','answerIslandTask',id,key,n)}`;
  return `<div class="story-scene"><span class="rpg-tag">第${chapter.number}章 · ${RPG_SPOTS[node].name}</span><h3>${scene.name}</h3>
    <p>${n === 0 ? scene.text : scene.tasks[n-1].after}</p>
    <div class="story-paper ${id === 'bookboat' ? 'story-library-card' : ''}"><small>${scene.prop} · ${n+1}/${scene.tasks.length}</small><p lang="en">${rpgClean(task.line)}</p></div>
    <p><b>${task.prompt}</b></p><div class="rpg-actions">${controls}</div><p class="rpg-status" id="story-feedback" role="status"></p>
    <details><summary>需要一点提示</summary><p>${task.hint}</p>${storyButton('听这个词的发音','speak',task.word)}</details></div>`;
}

function answerIslandTask(id, key, n, choice) {
  const a = rpgData();
  if (tab !== 'map' || rpgMoving || id !== currentIslandStory(a)) return;
  const progress = a.stories[id], chapter = islandChapters[id], scene = chapter.scenes[key];
  if (progress.ending || !scene || a.node !== scene.node || !sceneReady(scene,chapter,progress) || n !== (progress.counts[key] || 0)) return;
  const task = scene.tasks[n], feedback = $('story-feedback');
  if (!task || !feedback) return;
  let ok;
  if (task.choices) {
    ok = choice === task.key;
  } else {
    const input = $('story-answer');
    if (!input || input.dataset.composing) return;
    const value = input.value.normalize('NFKC').trim().toLowerCase().replace(/[。.!！]$/, '');
    if (!value) { feedback.textContent = '先写下你的答案。'; input.focus(); return; }
    ok = task.kind === 'zh' ? task.accept.includes(value) : value === task.word;
  }
  if (!ok) { feedback.textContent = '再读一遍线索，或打开下面的提示。'; return; }
  progress.counts[key] = n + 1;
  save();
  if (n + 1 < scene.tasks.length) {
    showIslandPanel(storyPlaceHtml(a.node));
  } else {
    showIslandPanel(`<span class="rpg-tag">${scene.prop} · 已解开</span><h3>${scene.name}</h3><p>${task.after}</p>${storyJournalHtml(id)}`);
  }
}

function finishIslandStory(id, key) {
  const a = rpgData();
  if (rpgMoving || tab !== 'map' || id !== currentIslandStory(a)) return;
  const chapter = islandChapters[id], progress = a.stories[id], end = chapter.endings[key];
  if (!end || end.node !== a.node || progress.ending || !storyTasksDone(chapter, progress)) return;
  progress.ending = key;
  data.stars += 5;
  data.steps += 2;
  save();
  showIslandPanel(storyJournalHtml(id) + '<p class="rpg-badge">章节奖励 · 5 颗星星、2 步。纪念物已送到伙伴小屋。</p>');
}

function storyShelf(a) {
  return Object.entries(islandChapters).filter(([key]) => a.stories?.[key]?.ending)
    .map(([key, chapter]) => `<details class="story-paper"><summary>${chapter.icon} ${chapter.item}</summary><p>${chapter.endings[a.stories[key].ending].text}</p></details>`).join('');
}

// Import story and map state through the same backup as vocabulary progress.
function restoreIslandAdventure(raw) {
  const a = rpgDefaults();
  if (!raw || typeof raw !== 'object') return a;
  for (const [key, value] of Object.entries(a)) {
    if (typeof value === 'boolean') a[key] = raw[key] === true;
    if (typeof value === 'number' && Number.isSafeInteger(raw[key]) && raw[key] >= 0) a[key] = raw[key];
  }
  if (!RPG_SPOTS[a.node]) a.node = 0;
  if (['library','forest','wander'].includes(raw.route)) a.route = raw.route;
  if (['🪴','🎐','🕯️','📚'].includes(raw.decor)) a.decor = raw.decor;
  if (Array.isArray(raw.clues)) a.clues = [...new Set(raw.clues.filter(k=>k==='library'||k==='forest'))];
  if (Array.isArray(raw.visited)) a.visited = [...new Set([0,a.node,...raw.visited.filter(n=>Number.isInteger(n)&&RPG_SPOTS[n])])];
  if (!a.chapterDone) return a;
  a.stories = {};
  for (const [id, chapter] of Object.entries(islandChapters)) {
    const src = raw.stories?.[id];
    if (!src || (id === 'bookboat' && !a.stories.ferry?.ending)) break;
    const entry = {counts:{},ending:''};
    for (const [key,scene] of Object.entries(chapter.scenes)) {
      const count = src.counts?.[key];
      if (Number.isInteger(count) && sceneReady(scene,chapter,entry)) entry.counts[key] = Math.max(0,Math.min(count,scene.tasks.length));
    }
    if (Object.hasOwn(chapter.endings,src.ending) && storyTasksDone(chapter,entry)) entry.ending=src.ending;
    a.stories[id] = entry;
  }
  return a;
}
