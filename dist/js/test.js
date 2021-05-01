let txt = document.querySelector('[data-type-writer]');
let items = [
      'وعدتك أن لا أحبك ثم أمام القرار الكبير، جبنت',
      'وعدتك أن لا أعود وعدت وأن لا أموت اشتياقاً ومت',
      'وعدت مرار وقررت أن أستقيل مراراً ولا أتذكر أني استقلت',
      'وعدت بأشياء أكبر مني فماذا غداً ستقول الجرائد عني؟',
      'أكيدٌ ستكتب أني جننت أكيدٌ ستكتب أني انتحرت', 
      'وعدتك أن لا أكون ضعيفاً وكنت وأن لا أقول بعينيك شعراً وقلت',
      'وعدت بأن لا وأن لا وأن لا وحين اكتشفت غبائي ضحكت',
];

let word = 0;
let letter = 0;
let currentTxt = [];
let isDeleted = false;
let isDeleting = false;

const FAST = 1e2;
const NORMAL = 2e2;
const LOW = 1e3;

!function typeWriter() {
      isDeleted = false;
      if (word < items.length) {
            if (!isDeleting && letter <= items[word].length) {
                  currentTxt.push(items[word][letter]);
                  letter++
                  txt.innerHTML = currentTxt.join('');
            }
            if (isDeleting && letter <= items[word].length) {
                  currentTxt.pop(items[word][letter]);
                  letter--
                  txt.innerHTML = currentTxt.join('');
            }
            if (letter == items[word].length) {
                  isDeleting = true;
                  isDeleted = true;
            }
            if (isDeleting && letter == 0) {
                  currentTxt = [];
                  isDeleting = false;
                  word++
            }
            if (word === items.length) word = 0;
      }
      let timeSetting = isDeleted ? LOW : isDeleting ? FAST : NORMAL
      setTimeout(typeWriter, timeSetting);
}();