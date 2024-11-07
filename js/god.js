// 每組的當前顯示索引
let currentIndexes = [1, 1, 1];

// 描述文字數組
const descriptions = [
    ["「北斗星君」是指在北天排列成斗杓的七星，即天樞、天璇、天機、天權、玉衡、開陽及搖光之合稱，道家亦稱為「天罡」。 因道教普遍信仰「南斗注生、北斗注死」，所以北斗星君常被世人奉為本命真君崇拜，具有消災解厄，保命延生之神職功能。 「太清玉冊」曰：「北斗星君為七元解厄真君」，在天文學中，北斗七星常被當作指示方向之重要標幟，故漁民亦崇奉有加。 本宮奉祀之北斗星君與南斗星君成對陪祀在凌霄寶殿內，以協助玉皇上帝查察人間善惡。", "凌霄寶殿頂層【天公殿】奉祀主神為玉皇上帝，乃神中至尊，俗稱：昊天上帝、玉皇大帝、天公。在通俗信仰中為至高無上神明，統天地百神及黎民庶士，擁有極高權威。道德經云：玉帝居昊天金闕彌羅天宮，妙相莊嚴，法相無上，統御諸天，綜領萬聖，主宰宇宙，開化萬天；行天之道，佈天之德，造化萬物，濟渡群生；權橫三界，總御萬靈、無量度入、為天界至尊之神，萬天帝王也。", "「南斗星君」也稱為「南極仙翁」、「南極老人」、「南極星」、「老人星」，因主司凡人壽命，亦稱「壽星」。據《史記》「天官書」記載：「狼比地有大星，曰南極老人」，另《史記》「正義」亦云：「老人一星在弧南，亦曰南極，為人占壽命延長之應，常以秋分之曙見於景，春分之夕見於丁，見，國長命，故謂之壽昌，天下安寧，不見，人主憂也」，《爾雅》「釋天」記載說：「壽星，角亢也」，其注云：「數起角亢，列宿之長，故曰壽星」，又「崔駰，仗頌」云：「壽如南極，子孫千億」這些說明了民間普遍信仰「南斗星君」，是其來有自的。 本宮依秩於凌霄寶殿內崇奉「南斗星君」，以輔佐玉皇上帝考察蟻民功過壽考。"],
    ["第二組 - 圖片1", "第二組 - 圖片2", "第二組 - 圖片3"],
    ["第三組 - 圖片1", "第三組 - 圖片2"]
];

function updateSlides(groupIndex) {
    const slides = document.querySelectorAll(`.slides[data-group="${groupIndex}"] img`);
    slides.forEach((img, index) => {
        img.classList.remove('active');
        img.style.opacity = 0.5;
        img.style.transform = 'scale(0.8)';
    });

    const activeIndex = currentIndexes[groupIndex];
    slides[activeIndex].classList.add('active');
    slides[activeIndex].style.opacity = 1;
    slides[activeIndex].style.transform = 'scale(1)';
    document.getElementById(`description${groupIndex}`).innerText = "點擊圖片認識神明";
}

function nextSlide(groupIndex) {
    const slides = document.querySelectorAll(`.slides[data-group="${groupIndex}"] img`);
    currentIndexes[groupIndex] = (currentIndexes[groupIndex] + 1) % slides.length;
    updateSlides(groupIndex);
}

function prevSlide(groupIndex) {
    const slides = document.querySelectorAll(`.slides[data-group="${groupIndex}"] img`);
    currentIndexes[groupIndex] = (currentIndexes[groupIndex] - 1 + slides.length) % slides.length;
    updateSlides(groupIndex);
}

function showDescription(groupIndex, imageIndex) {
    document.getElementById(`description${groupIndex}`).innerText = descriptions[groupIndex][imageIndex];
}

// 初始顯示每組的第一張圖片
updateSlides(0);
updateSlides(1);
updateSlides(2);
