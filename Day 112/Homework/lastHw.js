const fs = require('fs');
const randomWords = ['გამარჯობა', 'სალამი', 'გამარჯობა', 'მეგობარი', 'მოვლენა', 'წიგნი', 'პატრიოტი', 'ტესტი', 'ლექცია', 'შეკითხვა', 'ლიკანი', 'სწავლა', 'მოზარდი', 'ზაფხული', 'ზამთარი', 'ვარსკვლავი', 'კომუნიკაცია', 'პრაქტიკა', 'გაუმარჯოს', 'ბორჯომი'];

for (let i = 1; i <= 20; i++) {
  fs.writeFileSync(`file${i}.txt`, randomWords[i % randomWords.length]);
}